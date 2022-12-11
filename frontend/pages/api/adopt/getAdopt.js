import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {adopt_id, user_id, shelter_id} = req.body

  //query data 
  var query = supabase.from('adopt').select()
  if (user_id != null) {
    query = query.eq('user_id', user_id)
    if (queue_id != null) {
      query = query.eq('adopt_id', adopt_id)
    }
  }

  //query data 
  if (shelter_id != null) {
    query = query.eq('shelter_id', shelter_id)
    if (adopt_id != null) {
      query = query.eq('adopt_id', adopt_id)
    }
  }

  //query data 
  if (user_id == null & shelter_id == null) {
    query = query.eq('adopt_id', adopt_id)
  }

  //print data
  const { data, error } = await query
  console.log(data)
  res.status(200).json(data)
}

