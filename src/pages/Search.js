import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import useTitle from "../hooks/useTitle";

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(api, queryTerm);
  useTitle(`Search results for ${queryTerm}`);
  return (
    <main>
      <section className="py-7 px-7">
        <p className="text-2xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No restult found for "${queryTerm}"`
            : `${movies.length} results found for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
