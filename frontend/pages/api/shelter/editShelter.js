import { supabase } from "../supabase"

//"queue_date": "2022-12-09T07:36:58.793+00:00"
//edit from client
export default async function handler(req, res) {

    //call parameter from body
    const {
        shelter_id, shelter_name, website_url,
        detail, email, phone_number, address,
        location_url, profile_picture, cover_picture,
        contact_firstname, contact_lastname, contact_email,
        contact_phone, login_id
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
                        shelter_id, shelter_name, website_url,
                        detail, email, phone_number, address,
                        location_url, profile_picture, cover_picture,
                        contact_firstname, contact_lastname, contact_email,
                        contact_phone, login_id
                    }])
                    .eq('shelter_id', shelter_id)
                
                //check error
                if (er) throw er
                console.log("Edit Data Success!")

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







