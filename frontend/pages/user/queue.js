import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

function Queue() {
  //setup 
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)

  useEffect(() => {
    fetchCat("x", function() {
          console.log("cat : " + cat)
        })
  }, [session])

  //fetch data
  const fetchCat = async (param, callback) => {
    try {
      setLoading(true)
      //call page/api/queue/apiname
      const createQueue = await fetch("/api/queue/createQueue").then(console.log("welcome to create queue"))
      const data = await createQueue.json()
      console.log("response : " + JSON.stringify(data))
      setCat(data)
    } finally {
      setLoading(false)
      console.log("cat : " + cat)
      callback()
    }
  }

  //return output
  return (
    <main>
      <h2>จองคิวแมว</h2>
      <h6>ชื่อแมว : {loading ? 'loading...': cat[0].cat_name}</h6>
      <h6>สายพันธุ์ : {loading ? 'loading...': cat[0].breed}</h6>
      <h6>สี : {loading ? 'loading...': cat[0].color}</h6>
      <h6>อายุ (สัปดาห์) : {loading ? 'loading...': cat[0].age}</h6>
    </main>
  )
}