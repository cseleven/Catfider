import { supabase } from "../supabase"

//edit for shelter
export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, user_id, queue_status } = req.body

  //check queue id exist
  var queue = checkQueueId(queue_id)
  if (!queue) {
    console.log("Queue ID Invalid!")
    res.status(400).json("Queue ID Invalid!")
  } else {
    //check user id role
    var role = await checkUserId(user_id)
    if (!role) {
      console.log("User ID Invalid!")
      res.status(400).json("User ID Invalid!")
    } else {
      //check queue with user_id 
      var shelterID = await checkQueueOwner(queue_id)
      console.log(shelterID)
      if (shelterID == user_id) {
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
async function checkUserId(user_id, response) {
  //query
  const { data, error } = await supabase.from('user_profile').select().eq('user_id', user_id)
  if ( data == "" ) {
    //user_id does not exist
    response = false
  } else {
    //user_id exist
    const query = data?.map(({ user_role }) => ({ user_role }))
    //console.log("user role ", query)
    //convert to string
    const userRole = JSON.stringify(query)
    const role = userRole.split(':')[1].split('}]')[0]
    //check user id = shelter
    if ( role === "1" ) {
      response = true
    } else {
      response = false
    }
  }
  //console.log("user id ", response)
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

//check queue_id exist
async function checkQueueOwner(queue_id, shelterID) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  const query = data?.map(({ shelter_id }) => ({ shelter_id }))
  const shelterquery = JSON.stringify(query)
  shelterID = shelterquery.split(':')[1].split('}]')[0]
  console.log(shelterID)
  return shelterID
}