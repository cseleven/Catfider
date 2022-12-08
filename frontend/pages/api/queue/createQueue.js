import { supabase } from "../supabase"

export default async function handler(req, res) {

  //select data from database 
  req = 2 
  const { data, error } = await supabase
  .from('cat_profile')
  .select()
  //where
  .eq('cat_id', req)
  /*.insert([
    {
      cat_id: req,
      user_id: 1,
      create_date: Date.now(),
      update_date: Date.now(),
      queue_date: req,
      status:false
    }
  ])*/
  //.select(req)

  //logic for return data
  //data.cat_id = data.cat_id+1
  //console.log("id : ",data.cat_id)
  console.log("Create Queue")
  res.status(200).json(data)
  
}


