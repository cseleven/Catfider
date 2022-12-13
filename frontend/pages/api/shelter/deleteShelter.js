import { supabase } from "../supabase"

export default async function handler(req, res) {

    //call parameter from body
    const { shelter_id } = req.body

    //check if shelter id exist 
    var shelterID = await checkShelterId(shelter_id)
    if (shelterID) {
        //check if shelter_id != null
        if (shelter_id != null) {
            //delete
            const { data, er } = await supabase.from('shelter_profile')
            .select().eq('shelter_id', shelter_id)
            console.log(data)
            res.status(400).json(data)
        }


    } else {
        //shelter_id does not exist
        res.status(400).json("SHELTER ID not found!")
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