import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, user_id } = req.body
  
  var query = supabase.from('queue').select()
  //check role
  var role = await checkUserId(user_id)
  //role = shelter
  if (!role) {
    var shelter_id = await getShelterID(user_id)
    if (queue_id == null) {
      //get all
      query = query.eq('shelter_id', shelter_id)
    } else {
      //get one
      query = query.eq('shelter_id', shelter_id).eq('queue_id', queue_id)
    }
  } else {
    //role = user
    //get all 
    if (queue_id == null) {
      //get all
      query = query.eq('user_id', user_id)
    } else {
      //get one
      query = query.eq('user_id', user_id).eq('queue_id', queue_id)
    }
  }

  //print data
  const {data } = await query
  if (data == "") {
    res.status(400).json("Data Not Found")
  }
  res.status(200).json(data)
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
    const query = data?.map(({ user_role }) => ({ user_role }))
    console.log("user role ", query)
    //convert to string
    const userRole = JSON.stringify(query)
    const role = userRole.split(':')[1].split('}]')[0]
    //check user id = user
    if ( role === "2" ) {
      response = true
    } else {
      response = false
    }
  }
  //console.log("user id ", response)
  return response
}

async function getShelterID(user_id, shelterID) {
  const { data } = await supabase.from('shelter_profile').select().eq('user_id', user_id)
  const query = data?.map(({ shelter_id }) => ({ shelter_id }))
  const shelterquery = JSON.stringify(query)
  shelterID = shelterquery.split(':')[1].split('}]')[0]
  console.log(shelterID)
  return shelterID
}

 //store data to local variable 
  /*const query = data?.map(({queue_id, cat_id, shelter_id, user_id}) => ({
    queue_id,
    cat_id,
    shelter_id,
    user_id,
  }))
  console.log("data : ", query)
  console.log("Query Data Success!")*/