import { supabase } from "../supabase"

//"queue_date": "2022-12-09T07:36:58.793+00:00"
export default async function handler(req, res) {

  //call parameter from body
  const {queue_id, queue_date, user_id, shelter_id} = req.body
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)

  //update from shelter 
  if (shelter_id != null) {
    //check if user id exist
    var shelterID = await checkShelterId(shelter_id)

    if (!shelterID) {
      // if user_id does not exist
      console.log("Shelter ID not found!")
      res.status(400).json("Shelter ID not found!")
    } else {
      //check queue_id exist
      var queueID = await checkQueueId(queue_id)

      if (!queueID) {
        // if queue_id does not exist
        console.log("Queue ID not found!")
        res.status(400).json("Queue ID not found!")
      } else {
        //update
        const { er } = await supabase.from('queue').update([
          {
            queue_status: true,
            update_date: new Date(),
          }
        ]).eq('queue_id', queue_id)

        //check error
        if (er) throw er
        console.log("Edit Data Success!")
        
        //print data
        console.log(data)  
        res.status(200).json(data)
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
      var queueID = await checkQueueId(queue_id)

      if (!queueID) {
        // if queue_id does not exist
        console.log("Queue ID not found!")
        res.status(400).json("Queue ID not found!")
      } else {
        //check queue_date exist
        var queueDate = await checkQueueDate(queue_date)

        if (!queueDate) {
          //if queue_date a already exist
          console.log("Queue Date already exist!")
          res.status(400).json("Queue Date already exist!")
        } else {
          //insert 
          const { er } = await supabase.from('queue').update([
            {
              queue_date: queue_date,
              update_date: new Date(),
            }
          ]).eq('queue_id', queue_id)
          
          //check error
          if (er) throw er
          console.log("Edit Data Success!")

          //query data 
          const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
          if (error) throw error
          console.log("Query Data Success!")
          
          //print data
          console.log(data)  
          res.status(200).json(data)
        } 
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
async function checkQueueId(queue_id, response) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
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

//check queue_date already exist
async function checkQueueDate(queue_date, response) {
  //setup variable 
   const date = new Date(queue_date).toISOString().split('T')[0]
   console.log("date input : ", date)
 
   //query and mapping variable
   const { data, error } = await supabase.from('queue').select('*')
   const query = data?.map(({queue_date}) => ({
     queue_date,
   }))
 
   for (let i=0; i<query.length;i++){
     //setup variable
     const queryDate = JSON.stringify(query[i])
     const splitDate = queryDate.split(':')[1].split('"')[1].split('T')[0]
 
     //if queue_date already exist
     if (splitDate === date) {
       console.log(i," ",splitDate)
       response = false
       break
     }
     response = true
   }
 
   //print result
   return response
}
 
 
 
  