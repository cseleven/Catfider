import { supabase } from "../supabase"

//edit from client
export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {queue_id, queue_date} = req.body

  //check if queue id exist
  //insert user_id noes not exist 
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


  