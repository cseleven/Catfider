import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const { login_id } = req.body

  var shelter_id = await getShelterID(login_id)

  //check shelter_id exist 
  var shelter = await checkShelterId(shelter_id)
  if (shelter) {
    //query
    const { data } = await supabase.from('shelter_profile').select()
    .eq('shelter_id', shelter_id)
    console.log("SELECT SHELTER SUCESS")
    res.status(200).json(data)
  } else {
    res.status(400).json("Shelter ID Not Found")
  }
}
  
//check shelter_id exist
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
  console.log("Shelter Found")
  return response
}


//check ShelterID
async function getShelterID(login_id, shelter_id) {
    //query
    const { data } = await supabase.from('shelter_profile').select().eq('login_id', login_id)
    console.log(data)
    if (data == "" || data == null) {
        //shelter_id does not exist
        shelter_id = null
    } else {
        const query = data?.map(({ shelter_id }) => ({ shelter_id }))
        const json = JSON.stringify(query)
        shelter_id = json.split(':')[1].split('}]')[0]
    }
    console.log("shelter id ", shelter_id)
    return shelter_id
}
