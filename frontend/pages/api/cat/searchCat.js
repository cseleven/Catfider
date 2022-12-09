import { supabase } from "../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {

    const { data, error } = await supabase
        .from('cat_profile')
        .select('cat_id, cat_name,sex, breed, color, detail, shelter_id')
        .eq('cat_id',3)
    console.log("Filter Cat")
    res.status(200).json(data)

    // const {data, error} = await supabase
    // .from('cat_profile as c, shelter_profile as s')
    // .select('cat_id, cat_name,sex, breed, color, detail, ')
    //.eq('shelter_profile.shelter_name')
    //console.log("Filter Cat")
    // res.status(200).json(data)

}


