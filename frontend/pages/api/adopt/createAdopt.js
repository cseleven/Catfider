import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, adopt_date } = req.body

  //check already adopt
  const checkAdopt = await checkAlreadyAdopt(queue_id)
  if (!checkAdopt) {
    res.status(400).json("Already Create Adopt!")
  } else {
    //query data
    const {data , error} = await supabase.from('queue').select().eq('queue_id', queue_id)

    const shelter = data?.map(({shelter_id}) => ({ shelter_id }))
    const shelter_id = toString(shelter) 

    const cat = data?.map(({cat_id}) => ({ cat_id }))
    const cat_id = toString(cat)  

    const user = data?.map(({user_id}) => ({ user_id }))
    const user_id = toString(user)  
  
    
    //check queue_id exist
    var queueID = await checkQueueId(queue_id)

    if (!queueID) {
      // if queue_id does not exist
      console.log("Queue ID not found!")
      res.status(400).json("Queue ID not found!")
    } else {
      const { error } = await supabase.from('adopt').insert([{
        cat_id: cat_id,
        shelter_id: shelter_id,
        user_id: user_id,
        create_date: new Date(),
        update_date: new Date(),
        adopt_date: adopt_date,
        queue_id: queue_id,
        adopt_status: false,
      }])
      res.status(200).json("Create Adopt Succesful!")
    }
  }
}


//cehck already create adopt
async function checkAlreadyAdopt(queue_id, response) {
  const { data, error } = await supabase.from('adopt').select().eq('queue_id', queue_id)
  if (data == "" || data == null) {
    //no exist of adopt 
    response = true
  } else {
    response = false
  }
  return response
}

//check queue_id exist
async function checkQueueId(queue_id, response) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if ( data == "" || data == null) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  //print result
  return response
}



function toString (req) {
  const jsonString = JSON.stringify(req)
  const toString = jsonString.split(':')[1].split('}]')[0]
  return toString
}


