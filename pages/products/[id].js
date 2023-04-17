import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <p>an error occured</p>;
  }
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return (
    <>
      <h1>Details:</h1>
      <p>Name: {product.name}</p>
      <p>Descr.: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>
        Price: {product.price} {product.currency}
      </p>
    </>
  );
}
