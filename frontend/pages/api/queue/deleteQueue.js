import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {queue_id} = req.body

  //check if queue id exist 
  //insert user_id noes not exist 
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
  console.log("data : ", data)
}


  