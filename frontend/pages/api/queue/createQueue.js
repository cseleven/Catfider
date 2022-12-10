import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {cat_id, shelter_id, user_id, queue_date} = req.body

  //check if queue date already exist
  //check user_id
  //insert user_id noes not exist 
  const { er } = await supabase.from('queue').insert([
    {
      cat_id: cat_id,
      shelter_id: shelter_id,
      create_date: new Date(),
      update_date: new Date(),
      //queue_date: queue_date, should unique
      queue_date: queue_date,
      status: false,
      user_id: user_id
    }
  ])
  //check error
  if (er) return res.status(401).json({ error: error.message })
  console.log("Insert Data Success!")

  //query data 
  const { data, error } = await supabase.from('queue').select()
  if (error) throw error
  console.log("Query Data Success!")

  //print data
  console.log(data)  
  res.status(200).json("Insert Data Success!")
}


  