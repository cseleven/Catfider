import { supabase } from "../supabase"

//"queue_date": "2022-12-09T07:36:58.793+00:00"
//edit from client
export default async function handler(req, res) {

    //call parameter from body
    const {
        shelter_id, shelter_name, website_url,
        email, address, location_url, contact_name, 
        contact_lastname, contact_phone,
        donate_name1, donate_number1, donate_name2, donate_number2
    } = req.body


    //update from shelter 
    if (shelter_id != null) {
        //check if user id exist
        var shelterID = await checkShelterId(shelter_id)
        if (!shelterID) {
            // if user_id does not exist
            console.log("Shelter ID not found!")
            res.status(400).json("Shelter ID not found!")
        } else {
            //update
                const { er } = await supabase.from('shelter_profile').update([
                    {
                        shelter_name: shelter_name,
                        website_url: website_url,
                        email: email,
                        contact_phone: contact_phone,
                        address: address,
                        location_url: location_url,
                        contact_name: contact_name,
                        contact_lastname: contact_lastname,
                        email: email,
                        contact_phone: contact_phone,
                        donate_name1: donate_name1, 
                        donate_number1: donate_number1, 
                        donate_name2: donate_name2, 
                        donate_number2 : donate_number2
                        
                    }])
                    .eq('shelter_id', shelter_id)
                
                //check error
                if (er) throw er
                console.log("Insert Shelter Success!")

                //query data 
                const { data, error } = await supabase.from('shelter_profile').select().eq('shelter_id', shelter_id)
                if (error) throw error
                console.log("Query Data Success!")

                //print data
                console.log(data)
                res.status(200).json(data)
            }
        }
    }


//check shelter_id exist
async function checkShelterId(shelter_id, response) {
    //query
    const { data, error } = await supabase.from('shelter_profile').select().eq('shelter_id', shelter_id)
    if (data == "") {
        //user_id does not exist
        response = false
    } else {
        //user_id exist
        response = true
    }

    //print result
    console.log("Shelter Found")
    return response
}






