import { supabase } from "./supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {

    const {data, error} = await supabase
    .from('cat')
    .select('*')
    console.log("Filter Cat")
    res.status(200).json(data)

}


