import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

export default () => {
  const { status, data, error, isFetching } = useQuery("posts", getPosts, {
    initialData: [],
  });

  return (
    <>
      result:
      <pre>{JSON.stringify({ status, data, error, isFetching }, null, 2)}</pre>
    </>
  );
};
