import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {cat_id, shelter_id, user_id} = req.body

  //insert data
  const { er } = await supabase.from('queue').insert([
    {
      cat_id: cat_id,
      shelter_id: shelter_id,
      create_date: new Date(),
      update_date: new Date(),
      //queue_date: queue_date, should unique
      queue_date: new Date(),
      status: false,
      user_id: user_id
    }
  ])
  //check error
  if (er) throw er
  console.log("Insert Data Success!")

  //query data 
  const { data, error } = await supabase.from('queue').select()
  if (error) throw error
  console.log("Query Data Success!")
  console.log(data)  
  res.status(200).json(data)
}


  