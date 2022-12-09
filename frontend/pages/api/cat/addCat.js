import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {   
            shelter_id, cat_name, sex, 
            breed, color, sterile, vaccine, 
            detail, cat_picture, status, adopt_form_id,
            age,
  } = req.body

  //check if queue date already exist
  //check user_id
  //insert user_id noes not exist 
  console.log(shelter_id+" "+cat_name)
  const { er } = await supabase.from('cat_profile').insert([
    {
      //cat_id: 11,
      shelter_id: shelter_id,
      cat_name: cat_name,
      create_date: new Date(),
      update_date: new Date(),
      sex: sex,
      breed: breed,
      color: color,
      sterile: sterile,
      vaccine: vaccine,
      detail: detail,
      cat_picture: cat_picture,
      status: status,
      adopt_form_id: adopt_form_id,
      age: age,
    }
  ])
  //check error
  if (er) throw er
  console.log("Insert Data Success!")

  //query data 
  const { data, error } = await supabase.from('cat_profile').select()
  if (error) throw error
  console.log("Query Data Success!")

  //print data
  console.log(data)  
  res.status(200).json("Insert Data Success!")
}


  