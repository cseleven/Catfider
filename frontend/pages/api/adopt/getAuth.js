import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const { login_id } = req.body

  const { data:user } = await supabase.auth.getUser()
  //const json = JSON.stringify(user)
  //console.log(json)

  /*let { data, error } = await supabase.auth.signInWithPassword({
    email: e.target.email.value,
    password: e.target.password.value
  }).then(console.log("data:"+ data))*/
  

  console.log(data)
  res.status(200).json(data)
}
  




