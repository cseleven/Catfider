import { supabase } from "../../supabase"

export default async function handler(req, res) {

  //add edit delete

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {
    shelter_id, cat_id, cat_name, sex,
    breed, color, sterile, vaccine,
    detail, cat_picture, status, age,
  } = req.body

  //check shelter id
  var shelterID = await checkShelterId(shelter_id)
  if (!shelterID) {
    console.log("Shelter ID not found!")
    res.status(200).json("Shelter ID not found!")
  } else {
    console.log("Shelter ID Found!")
    const { er } = await supabase.from('cat_profile')
      .insert([{
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
        age: age,
      }])

    //print data
    res.status(200).json("Insert Data Success!")

  }

}



//check user_id exist
async function checkShelterId(shelter_id, response) {
  //query
  const { data, error } = await supabase.from('shelter_profile').select().eq('shelter_id', shelter_id)
  if (data == "") {
    //user_id does not exist
    response = false
  } else {
    //user_id exist
    response = true
  }

  //print result
  console.log(data)
  return response
}

