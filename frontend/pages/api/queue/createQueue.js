import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {cat_id, user_id, queue_date, queue_time } = req.body

  //query data
  const {data , error} = await supabase.from('cat_profile').select().eq('cat_id', cat_id)
  const shelterID = data?.map(({shelter_id}) => ({ shelter_id }))
  
  //convert json data to string
  const shelterString = JSON.stringify(shelterID)
  const shelter = shelterString.split(':')[1].split('}]')[0]

  //check user_id exist
  var userID = await checkUserId(user_id)

  if (!userID) {
    // if user_id does not exist
    console.log("User ID not found!")
    res.status(400).json("User ID not found!")
  } else {
    //check if queue date already exist
    console.log("User ID found!")
    var queueDate = await checkQueueDateTime(queue_date, queue_time)

    if (!queueDate) {
      // if queue_date exist
      console.log("Queue Date Time already exist!")
      res.status(400).json("Queue Date already exist!")
    } else {
      // if queue date does not exist then insert data
      console.log("Queue Date Time not exist!")
      const { error } = await supabase.from('queue').insert([
        {
          cat_id: cat_id,
          shelter_id: shelter,
          create_date: new Date(),
          update_date: new Date(),
          queue_date: queue_date,
          queue_time: queue_time,
          queue_status: false,
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

//check queue_date already exist
async function checkQueueDateTime(queue_date, queue_time, response) {
  //setup variable 
  console.log("Date Input : ", queue_date)

  //query and mapping variable
  const { data, error } = await supabase.from('queue').select('*')
  const query = data?.map(({ queue_date }) => ({ queue_date }))
  //const time = checkQueueTime(queue_time)

  for (let i=0; i<query.length;i++){
    //setup variable
    const queryDate = JSON.stringify(query[i])
    const splitDate = queryDate.split(':')[1].split('"')[1]

    //if queue_date already exist
    if (splitDate === queue_date) {
      console.log("Date Found : ", splitDate)

      //setup variable 
      console.log("Time Input : ", queue_time)

      //query and mapping variable
      const { data, error } = await supabase.from('queue').select('*')
      const query = data?.map(({ queue_time }) => ({ queue_time }))

      for (let i=0; i<query.length;i++){
        //setup variable
        const queryTime = JSON.stringify(query[i])
        const splitTime = queryTime.split(':')[1].split('"')[1]

        //if time already exist
        if (splitTime === queue_time) {
          console.log("Time Found : ", splitTime)
          response = false
          break
        }
        //time not exist
        response = true
      }
      break
    } else {
      //date not exist
      response = true
    }
  }
  console.log(response)
  return response
}

/*
//check queue_date already exist
async function checkQueueDate(queue_date, response) {
 //setup variable 
  const date = new Date(queue_date).toISOString().split('T')[0]
  console.log("date input : ", date)

  //query and mapping variable
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
  return response
}*/

 
 