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
        .select()
    //check error
    if (er) throw er
    console.log("Insert Data Success!")

    //query data 
    const { data, error } = await supabase.from('shelter_profile')
        .select('*')
    if (error) throw error
    console.log("Query Data Success!")

}

