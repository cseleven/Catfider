export default async function handler(req, res) {
  const data = {
    topic1: "Email address",
    topic2: "Password",
    topic3: "name"
  }
  console.log("finish CatProfile")
  res.status(200).json(data)

}