import { supabase } from "../supabase"

//delete for user
export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, user_id } = req.body

  //check userID exist 
  var userID = await checkUserId(user_id)
  if (!userID) {
    res.status(400).json("User ID Not Found!")
  } else {
    //check if queue id exist 
    var queueID = await checkQueueId(queue_id)
    if (!queueID) {
      res.status(400).json("Queue ID Not Found!")
    } else {
      const { error } = await supabase.from('queue').delete().eq('queue_id', queue_id).eq('user_id', user_id)
      res.status(200).json("Delete Queue Success!")
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
    response = true
  }

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