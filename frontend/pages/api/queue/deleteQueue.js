import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {queue_id, user_id, shelter_id} = req.body

  //check if queue id exist 
  var queueID = await checkQueueId(queue_id)
  if (queueID) {
    //check if user_id != null
    if (user_id != null) {
      //delete
      const { data, er } = await supabase.from('queue').select().eq('queue_id', queue_id)
      console.log(data)
      res.status(400).json(data)
    } 

    if (shelter_id != null){

    }

    if (user_id == null && shelter_id == null) {
      //no user_id and shelter input
      res.status(400).json("Missing user_id or shelter_id")
    }
  } else {
    //queue_id does not exist
    res.status(400).json("Queue ID not found!")
  }
  /*//insert user_id noes not exist 
  const { er } = await supabase.from('queue').delete().eq('queue_id', queue_id)
  //check error
  if (er) throw er
  console.log("Delete Data Success!")

  //query data 
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if (error) throw error
  console.log("Query Data Success!")

  if (data != null ) {
    res.status(200).json("Delete Data Success!")
  }
  
  //print data
  console.log("data : ", data)*/
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
  //console.log(data)
  return response
}