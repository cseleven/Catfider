import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {cat_id, user_id, adopt_date, adopt_form_status} = req.body

  //query data
  const {data , error} = await supabase.from('queue').select().eq('cat_id', cat_id).eq('user_id', user_id)
  const shelterID = data?.map(({shelter_id}) => ({shelter_id}))
  const queueID = data?.map(({queue_id}) => ({queue_id}))
  
  //check user_id exist
  var userID = await checkUserId(user_id)

  if (!userID) {
    // if user_id does not exist
    console.log("User ID not found!")
    res.status(400).json("User ID not found!")
  } else {
    const {data, error} = await supabase.from('adopt').insert([{
      cat_id: cat_id,
      shelter_id: shelterID,
      user_id: user_id,
      create_date: new Date(),
      adopt_date: adopt_date,
      queue_id: queueID,
      adopt_form_status: adopt_form_status,
    }])
    res.status(200).json("Create Adopt Succesful!")
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
    response = true
  }

  //print result
  return response
}

