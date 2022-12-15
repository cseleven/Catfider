import { supabase } from "../supabase"

//edit for shelter
export default async function handler(req, res) {

  //call parameter from body
  const { adopt_id, adopt_status, shelter_id } = req.body
  console.log(adopt_id)
  console.log(adopt_status)
  console.log(shelter_id)

  var adoptID = await checkAdoptId(adopt_id)
  if (adoptID) {
    //update adopt
    var own = await checkAdoptOwner(adopt_id, shelter_id)
    if (own) {
      //update adopt
      await supabase.from('adopt').update([{
        update_date: new Date(),
        adopt_status: adopt_status
      }]).eq('adopt_id', 1)

      //update cat 
      const { data } = await supabase.from('adopt').select().eq('adopt_id', adopt_id)
      const queryCat = data?.map(({ cat_id }) => ({ cat_id }))
      const stringCat = JSON.stringify(queryCat)
      const cat_id = stringCat.split(':')[1].split('}]')[0]
      //update 
      await supabase.from('cat_profile').update([{
        status: false,
        update_date: new Date(),
      }]).eq('cat_id', cat_id)
      res.status(200).json("Edit Successful!")
    } else {
      //shelter id != shelter id in adopt
      res.status(400).json("This ShelterID Does Not Have Permission!")
    }
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

//check queue_id exist
async function checkAdoptOwner(adopt_id, shelter_id , response) {
  //query
  const { data, error } = await supabase.from('adopt').select().eq('adopt_id', adopt_id).eq('shelter_id', shelter_id)
  if ( data == "" ) {
    //shelter_id not own thid adopt id
    response = false
  } else {
   //shelter_id own thid adopt id
    response = true
  }

  //print result
  return response
}


 
 
  