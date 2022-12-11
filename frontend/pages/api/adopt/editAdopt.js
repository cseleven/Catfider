import { supabase } from "../supabase"

//"queue_date": "2022-12-09T07:36:58.793+00:00"
export default async function handler(req, res) {

  //call parameter from body
  const {adopt_id, adopt_date, user_id, shelter_id} = req.body

  //update from shelter 
  if (shelter_id != null) {
    //check if user id exist
    var shelterID = await checkShelterId(shelter_id)

    if (!shelterID) {
      // if shelter_id does not exist
      console.log("Shelter ID not found!")
      res.status(400).json("Shelter ID not found!")
    } else {
      //check adoptID exist
      var adoptID = await checkAdoptId(adopt_id)

      if (!adoptID) {
        // if adoptID does not exist
        console.log("Adopt ID not found!")
        res.status(400).json("Adopt ID not found!")
      } else {
        //check if queue_status = true 
        const { cat } = await supabase.from('adopt').select().eq('adopt_id', adopt_id)
        const queueStatus = cat?.map(({ queue_status }) => ({ queue_status }))

        if (!queueStatus) {
          // queue status = false
          console.log("Queue Status Invalid!")
          res.status(400).json("Queue Status Invalid!")
        } else {

          const adoptFormStatus = cat?.map(({ adopt_form_status }) => ({ adopt_form_status }))
          if (!adoptFormStatus) {
            // adopt form status = false
            console.log("Adopt Form Status Invalid!")
            res.status(400).json("Adopt Form Status Invalid!")
          } else {
            //update for cat adoption
            const catID = cat?.map(({cat_id}) => ({ cat_id }))
            const { er } = await supabase.from('cat_profile').select().update([{
              status: false,
              update_date: new Date(),
            }]).eq('cat_id', catID)
 
            //check error
            if (er) throw er

            //print data
            console.log("Edit Data Success!")
            res.status(200).json("Edit Success!")
          }
        }
      }
    }
  }

  //edit from user 
  if (user_id != null) {
    //check if user id exist
    var userID = await checkUserId(user_id)

    if (!userID) {
      // if user_id does not exist
      console.log("User ID not found!")
      res.status(400).json("User ID not found!")
    } else {
      //check queue_id exist
      var adoptID = await checkAdoptId(adopt_id)

      if (!adoptID) {
        // if adoptID does not exist
        console.log("Adopt ID not found!")
        res.status(400).json("Adopt ID not found!")
      } else {
        //insert 
        const { er } = await supabase.from('adopt').update([
          {
            adopt_date: adopt_date
          }
        ]).eq('adopt_id', adopt_id)
        
        //check error
        if (er) throw er
        console.log("Edit Data Success!")
        res.status(200).json("Edit Data Success!")
      } 
    }
  }

  //not enough input
  if (user_id == null && shelter_id == null) {
    console.log("Bad Input : Missing User ID or Shelter ID")  
    res.status(400).json("Missing User ID or Shelter ID")
  }
}

//check user_id exist
async function checkUserId(user_id, response) {
  //query
  const { data, error } = await supabase.from('user_profile').select().eq('user_id', user_id)
  if ( data == "" ) {
    //user_id does not exist
    response = false
  } else {
    //user_id exist
    response = true
  }

  //print result
  return response
}


//check shelter_id exist
async function checkShelterId(shelter_id, response) {
  //query
  const { data, error } = await supabase.from('shelter_profile').select().eq('shelter_id', shelter_id)
  if ( data == "" ) {
    //user_id does not exist
    response = false
  } else {
    //user_id exist
    response = true
  }

  //print result
  return response
}
  
//check queue_id exist
async function checkAdoptId(adopt_id, response) {
  //query
  const { data, error } = await supabase.from('adopt').select().eq('adopt_id', adopt_id)
  if ( data == "" ) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  //print result
  return response
}


 
 
  