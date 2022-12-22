import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get my cat in user view
    //select by shelter_id

    const { login_id } = req.body

    var user_id = await getUserID(login_id)

    const { count, err } = await supabase
        .from('user_profile')
        .select('*', { count: 'exact', head: true })
        .match({ user_id: user_id })

    let query = supabase
        .from('user_profile')
        .select('user_id, queue(queue_id, cat_profile(cat_id, cat_name, sex, breed, color, detail, cat_picture, status, shelter_profile(shelter_name)))')
        .eq('user_id', user_id) 

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(count)
    console.log("Show My Cat SUCCESS!")
    res.status(200).json(data)

}

//check ShelterID
async function getUserID(login_id, user_id) {
    //query
    const { data } = await supabase.from('user_profile').select().eq('login_id', login_id)
    console.log(data)
    if (data == "" || data == null) {
        //user_id does not exist
        user_id = null
    } else {
        const query = data?.map(({ user_id }) => ({ user_id }))
        const json = JSON.stringify(query)
        user_id = json.split(':')[1].split('}]')[0]
    }
    console.log("user id ", user_id)
    return user_id
}