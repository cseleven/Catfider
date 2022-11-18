import { useRouter } from "next/router";

export default function CatProfile() {
  const router = useRouter();
  return <h2>Cat ID: {router.query.id}</h2>;
}