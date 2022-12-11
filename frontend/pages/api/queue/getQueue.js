import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  //"queue_date": "2022-12-09T07:36:58.793+00:00"
  const {queue_id} = req.body

  //query data 
  
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if (error) throw error

  //store data to local variable 
  const query = data?.map(({queue_id, cat_id}) => ({
    queue_id,
    cat_id
  }))
  console.log("data : ", query)
  console.log("Query Data Success!")

  /*const { data, error } = await supabase.from('user_profile').select().eq('user_id', 5)
  if (data == "") {
    console.log("here")
  }*/

  //print data
  console.log(data)  
  res.status(200).json("Query Data Success!")
}


  