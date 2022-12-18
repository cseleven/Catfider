import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {cat_id, login_id, queue_date, queue_time } = req.body

  const user_id = await getUserId(login_id)

  //check already queue
  var checkQueue = await checkQueueUser(user_id, cat_id)

  if (!checkQueue) {
    res.status(400).json("Already Queued!")
  } else {
  //query data
  const {data , error} = await supabase.from('cat_profile').select().eq('cat_id', cat_id)
  const shelterID = data?.map(({ shelter_id }) => ({ shelter_id }))
  
  //convert json data to string
  const shelterString = JSON.stringify(shelterID)
  const shelter_id = shelterString.split(':')[1].split('}]')[0]
  console.log("cat's shelter id ", shelter_id)

  //check user_id exist
  var userID = await checkUserId(login_id)

  if (!userID) {
    // if user_id does not exist
    console.log("User ID not found!")
    res.status(400).json("User ID not found!")
  } else {
      //check if queue date already exist
      console.log("User ID found!")
      var queueDate = await checkQueueDateTime(queue_date, queue_time, cat_id)

      if (!queueDate) {
        // if queue_date exist
        console.log("Queue Date Time already exist!")
        res.status(400).json("Queue Date already exist!")
      } else {
        // if queue date does not exist then insert data
        console.log("Queue Date Time not exist!")
        await supabase.from('queue').insert([
          {
            cat_id: cat_id,
            shelter_id: shelter_id,
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
}

//check already queue
async function checkQueueUser(user_id, cat_id, response) {
  console.log(user_id)
  const { data, error } = await supabase.from('queue').select().eq('cat_id', cat_id).eq('user_id', user_id)
  console.log(data)
  if (data == "" || data == null) {
    response = true
  } else {
    //already queue
    response = false
  }
  return response
}

//check user_id exist
async function checkUserId(login_id, response) {
  //query
  const { data, error } = await supabase.from('user_profile').select().eq('login_id', login_id)
  if ( data == "" || data == null) {
    //user_id does not exist
    response = false
  } else {
   //user_id exist 
   response = true
  }
  //console.log("user id ", response)
  return response
}

//check queue_date already exist
async function checkQueueDateTime(queue_date, queue_time, cat_id,response) {
  //setup variable 
  console.log("Date Input : ", queue_date)

  //query and mapping variable
  const { data, error } = await supabase.from('queue').select().eq('cat_id', cat_id)
  const query = data?.map(({ queue_date }) => ({ queue_date }))
  console.log(query)
  if (query == "" || query == null) {
    //date not exist
    response = true
  } else {
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
        const { data, error } = await supabase.from('queue').select().eq('cat_id', cat_id)
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
  }
  console.log(response)
  return response
}

//check user_id exist
async function getUserId(login_id, user_id) {
  //query
  const { data } = await supabase.from('user_profile').select().eq('login_id', login_id)
  console.log(data)
  if ( data == "" || data == null) {
    //user_id does not exist
    user_id = null
  } else {
    const query = data?.map(({ user_id }) => ({ user_id }))
    const json = JSON.stringify(query)
    user_id = json.split(':')[1].split('}]')[0]
  }
  console.log("user id ", user_id)
  return user_id
}
