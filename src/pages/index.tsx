// src/pages/index.tsx
import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.hello}</div>;
}
