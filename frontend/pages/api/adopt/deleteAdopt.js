import { supabase } from "../supabase"

//delete for user
export default async function handler(req, res) {

  //call parameter from body
  const { user_id, adopt_id} = req.body

  //check if queue id exist 
  var adoptID = await checkAdoptId(adopt_id)

  if (adoptID) {

    //delete
    const { error } = await supabase.from('adopt').delete().eq('adopt_id', adopt_id).eq('user_id', user_id)
    //query
    const { data  } = await supabase.from('adopt').select().eq('adopt_id', adopt_id).eq('user_id', user_id)
    if ( data != "" ){
      res.status(400).json("Delete Fail!")
    }
    res.status(200).json("Delete Adopt Success!")
  } else {
    //queue_id does not exist
    res.status(400).json("Adopt ID not found!")
  }
}

//check queue_id exist
async function checkAdoptId(adopt_id, response) {
  //query
  const { data, error } = await supabase.from('adopt').select().eq('adopt_id', adopt_id)
  if ( data == "" ) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  //print result
  return response
}