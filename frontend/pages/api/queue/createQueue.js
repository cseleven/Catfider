import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {cat_id, shelter_id, user_id, queue_date} = req.body
  
  //check user_id exist
  var userID = await checkUserId(user_id)
  if (!userID) {
    // if user_id does not exist
    console.log("User ID not found!")
    res.status(400).json("User ID not found!")
  }else {
    //check if queue date already exist
    console.log("User ID found!")
    var queueDate = await checkQueueDate(queue_date)
    if (!queueDate) {
      // if queue_date exist
      console.log("Queue Date already exist!")
      res.status(400).json("Queue Date already exist!")
    }else {
      // if queue date does not exist then insert data
      console.log("Queue Date not exist!")
      const { error } = await supabase.from('queue').insert([
        {
          cat_id: cat_id,
          shelter_id: shelter_id,
          create_date: new Date(),
          update_date: new Date(),
          queue_date: queue_date,
          status: false,
          user_id: user_id,
        }
      ])
      
      //print data
      console.log("Insert Data Success!")
      res.status(200).json("Insert Data Success!")
    }
  }
}

//check user_id exist
async function checkUserId(user_id, response) {
  //query
  const { data, error } = await supabase.from('user_profile').select().eq('user_id', user_id)
  if ( data == "" ) {
    response = false
  } else {
    response = true
  }

  //print result
  console.log(data)
  return response
}

//check queue_date already exist
async function checkQueueDate(queue_date, response) {
 //setup variable 
  const date = new Date(queue_date).toISOString().split('T')[0]
  console.log("date input : ", date)

  //query
  const { data, error } = await supabase.from('queue').select('*')
  const query = data?.map(({queue_date}) => ({
    queue_date,
  }))

  for (let i=0; i<query.length;i++){
    //setup variable
    const queryDate = JSON.stringify(query[i])
    const splitDate = queryDate.split(':')[1].split('"')[1].split('T')[0]

    //if queue_date already exist
    if (splitDate === date) {
      console.log(i," ",splitDate)
      response = false
      break
    }
    response = true
  }

  //print result
  console.log(response)
  return response
}


