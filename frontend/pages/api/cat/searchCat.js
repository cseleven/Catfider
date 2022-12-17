import { supabase } from "../supabase"
import { useEffect, useState } from 'react'
import { stringify } from "querystring"

export default async function handler(req, res) {
    //filtering cat 

    const { page_number, cat_id, sex, breed, color, 
            sterile, vaccine, age, status, shelter_id } = req.body
    
    
    //check cat id
    var catID = await checkCatId(cat_id)
    if (!catID) {
        console.log("Cat ID not found!")
        res.status(200).json("Cat ID not found!")
    } else {
        console.log("Cat ID Found!")
        let query = supabase
            .from('cat_profile')
            .select('cat_id, cat_name, sex, breed, color, cat_picture, detail, shelter_id, shelter_profile(shelter_name)')
            //.range(9 * (page_number - 1), (9 * page_number) - 1)
        
            if(cat_id) { query = query.eq('cat_id', cat_id)}
            if (sex) { query = query.eq('sex', sex) }
            if (breed) { query = query.eq('breed', breed) }
            if (color) { query = query.eq('color', color) }
            if (sterile) { query = query.eq('sterile', sterile) }
            if (vaccine) { query = query.eq('vaccine', vaccine) }
            if (age) { query = query.eq('age', age) }
            if (status) { query = query.eq('status', status) }
            if (shelter_id) { query = query.eq('shelter_id', shelter_id) }
        
            const { data, error } = await query

        if (error) {
        throw error
        }

        console.log(data)
        res.status(200).json(data)
    }

}


//check user_id exist
async function checkCatId(cat_id, response) {
    //query
    const { data, error } = await supabase.from('cat_profile').select().eq('cat_id', cat_id)
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