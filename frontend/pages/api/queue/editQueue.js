import { supabase } from "../supabase"

//edit for shelter
export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, login_id, queue_status } = req.body

  //check queue id exist
  var queue = checkQueueId(queue_id)
  if (!queue) {
    console.log("Queue ID Invalid!")
    res.status(400).json("Queue ID Invalid!")
  } else {
    //check login id role
    var userID = await checkUserId(login_id)
    if (!userID) {
      console.log("User ID Invalid!")
      res.status(400).json("User ID Invalid!")
    } else {
      //check queue with login_id 
      var shelter = await checkQueueOwner(queue_id)
      console.log("queue own by shelter : ", shelter)

      var shelter_id = await getShelterID(login_id)
      console.log("shelter id form login id : " , shelter_id)

      if (shelter == shelter_id) {
        //edit
        const { er } = await supabase.from('queue').update([
          {
            queue_status: queue_status,
            update_date: new Date(),
          }
        ]).eq('queue_id', queue_id)
        res.status(200).json("Edit Data Successful!")
      } else {
        res.status(200).json("User ID Does Not Have Permission!")
      }
    }
  }
}

//check user_id exist
async function checkUserId(login_id, response) {
  //query
  const { data, error } = await supabase.from('shelter_profile').select().eq('login_id', login_id)
  console.log(data)
  if ( data == "" || data == null ) {
    //user_id does not exist
    response = false
  } else {
    //user_id exist
    response = true 
  }

  return response
}
  
//check queue_id exist
async function checkQueueId(queue_id, response) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if ( data == "" || data == null ) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  return response
}

//check queue_id exist
async function checkQueueOwner(queue_id, shelter_id) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  const query = data?.map(({ shelter_id }) => ({ shelter_id }))
  if ( query == "" || query == null) {
    shelter_id = null
  } else {
    const shelterquery = JSON.stringify(query)
    shelter_id = shelterquery.split(':')[1].split('}]')[0]
  }
  console.log(shelter_id)
  return shelter_id
}

//check shelter_id exist
async function getShelterID(login_id, shelter_id) {
  //query
  const { data } = await supabase.from('shelter_profile').select().eq('login_id', login_id)
  if ( data == "" || data == null) {
    //shelter_id does not exist
    shelter_id = null
  } else {
    const query = data?.map(({ shelter_id }) => ({ shelter_id }))
    const json = JSON.stringify(query)
    shelter_id = json.split(':')[1].split('}]')[0]
  }
  console.log("shelter id : ", shelter_id)
  return shelter_id
}
