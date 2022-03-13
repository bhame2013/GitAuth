import { getAPIClient } from "src/services/api";

interface IBooks {
  title: string;
}

export default function HomePage({ books }: { books: IBooks[] }) {
  return (
    <ul>
      {books && books.map((data, index) => {
        return <li key={index}>{data.title}</li>
      })}
    </ul>
  );
}

export async function getServerSideProps(ctx: any) {
  const api = getAPIClient(ctx)

  try {
    const { data } = await api.get('books?page=1&amount=25');

    return { props: { books: data.data } };
  } catch (err: any) {
    // console.log(err)
    return { props: { books: [] } };
  }
}
