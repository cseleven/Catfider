import { supabase } from "../supabase"

export default async function handler(req, res) {

    //call parameter from body
    const {
        shelter_id, shelter_name, website_url,
        detail, email, phone_number, address,
        location_url, profile_picture, cover_picture,
        contact_firstname , contact_lastname, contact_email,
        contact_phone, login_id
    } = req.body

    var userID = await checkUserId(user_id)
    if (!userID) {
        // if user_id does not exist
        console.log("User ID not found!")
        res.status(400).json("User ID not found!")
    } else {
        //check if queue date already exist
        console.log("User ID found!")
            const { er } = await supabase
            .from('shelter_profile')
            .insert([
        {
            shelter_id: shelter_id,
            shelter_name: shelter_name, 
            website_url: website_url,
            detail: detail, 
            email: email, 
            phone_number: phone_number, 
            address: address,
            location_url: location_url, 
            profile_picture: profile_picture, 
            cover_picture: cover_picture,
            contact_firstname: contact_firstname, 
            contact_lastname: contact_lastname, 
            contact_email: contact_email,
            contact_phone: contact_phone, 
            login_id: login_id
            
        }])
            //check error
        if (er) throw er
        console.log("Insert Data Success!")
    }

    }


