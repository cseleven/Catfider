export default async function handler(req, res) {
  console.log("postexample : " + req)
  res.status(200).json(req)
}