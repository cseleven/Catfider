export default async function handler(req, res) {
  console.log("postexample : " + JSON.stringify(req))
  res.status(200).json(req)
}