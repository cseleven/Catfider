import { useRouter } from "next/router";

export default function CatProfile() {
  const router = useRouter();
  console.log("id : ", router.query.cat_id)
  return <h2>Cat ID: {router.query.cat_id}</h2>;
}