import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get profile cat in shelter view per cat id
    //select by cat_id
    const { cat_id } = req.body
    let query = supabase
        .from('cat_profile')
        //.select('cat_id, cat_name, detail, age, sex, breed, color, sterile, vaccine, status, cat_picture, shelter_id, shelter_profile!inner(shelter_name), queue!inner(queue_date, user_id, queue_status), user_profile!inner(user_id, user_email)')
        .select('cat_id, cat_name, detail, age, sex, breed, color, sterile, vaccine, status, cat_picture, shelter_id, shelter_profile!inner(shelter_name, donate_name1, donate_number1, donate_name2, donate_number2), queue!inner(queue_date, user_id, user_profile!inner(user_email), queue_status)')
        if (cat_id) { query = query.eq('cat_id', cat_id) }

    //more ช่องทางการบริจาค + user email

    const { data, error } = await query

    if (error) {
        throw error
    }
    res.status(200).json(data)

}

