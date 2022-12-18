import { supabase } from "../supabase"

export default async function handler(req, res) {

    //call parameter from body
    const { login_id } = req.body

    //check login id
    var LoginID = await checkLoginId(login_id)
    if (!LoginID) {
        console.log("Login ID not matched!")
        res.status(200).json("Login ID not matched!")
    } else {
        console.log("Login ID matched!")
        const { error } = await supabase.from('shelter_profile').insert([
            {
              login_id: login_id,
            }
          ])
        //print data
        res.status(200).json("Add Shelter Success!")
    }

}


//check login_id exist
async function checkLoginId(login_id, response) {
    //query
    const { data, error } = await supabase.from('user_profile').select()
    .not('login_id', login_id)
    if (data == "") {
        //Login_id does not exist
        response = false
    } else {
        //Login_id exist
        response = true
    }

    //print result
    console.log(data)
    return response
}

