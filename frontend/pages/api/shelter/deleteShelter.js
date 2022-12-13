import { supabase } from "../supabase"

export default async function handler(req, res) {

    //call parameter from body
    const { shelter_id } = req.body

    //check if shelter id exist 
    if (shelter_id != null) {
        //check if user id exist
        var shelterID = await checkShelterId(shelter_id)
        if (!shelterID) {
            // if user_id does not exist
            console.log("Shelter ID not found!")
            res.status(400).json("Shelter ID not found!")
        } else {
            //delete
            const { er } = await supabase
            .from('shelter_profile')
            .delete()
            .eq('shelter_id', shelter_id)
            console.log("DELETE SUCCESS")
            res.status(400).json("DELETE SUCCESS")
        }

    }
}


async function checkShelterId(shelter_id, response) {
    //query
    const { data, error } = await supabase.from('shelter_profile').select().eq('shelter_id', shelter_id)
    if (data == "") {
        //queue_id does not exist
        response = false
    } else {
        //queue_id exist
        response = true
    }

    //print result
    //console.log(data)
    return response
}