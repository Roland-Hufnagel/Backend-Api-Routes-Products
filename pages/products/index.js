import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) {
    return <p>an error occured</p>;
  }
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return (
    <>
      <h1>All Products</h1>
      {data.map((date) => {
        return (
          <li key={date.id}>
            <p>Name: {date.name}</p>
            <p>Descr.: {date.description}</p>
            <p>Category: {date.category}</p>
            <p>
              Price: {date.price}
              {date.currency}
            </p>
          </li>
        );
      })}
    </>
  );
}
