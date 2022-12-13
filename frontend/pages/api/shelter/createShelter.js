import { supabase } from "../supabase"

export default async function handler(req, res) {

    //call parameter from body
    const { user_id } = req.body

    //check user id
    var userID = await checkUserId(user_id)
    if (!userID) {
        console.log("User ID not found!")
        res.status(200).json("User ID not found!")
    } else {
        console.log("User ID Found!")
        const { error } = await supabase.from('shelter_profile').insert([
            {
              user_id: user_id,
            }
          ])
        //print data
        res.status(200).json("Add Shelter Success!")
    }

}


//check user_id exist
async function checkUserId(user_id, response) {
    //query
    const { data, error } = await supabase.from('user_profile').select().eq('user_id', user_id)
    if (data == "") {
        //user_id does not exist
        response = false
    } else {
        //user_id exist
        response = true
    }

    //print result
    console.log(data)
    return response
}

