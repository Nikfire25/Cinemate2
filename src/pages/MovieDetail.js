import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Backup from "../assets/images/backup.png";
import useTitle from "../hooks/useTitle";

export const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchMovies();
  }, [url]);

  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Backup;

  useTitle(data.title);
  return (
    <main>
      <section className="flex justify-between flex-wrap py-2 px-5">
        <div className="max-w-sm">
          <img src={image} alt={data.title} className="rounded" />
        </div>

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.title}
          </h1>

          <p className="my-4">{data.overview}</p>

          {data.genres && (
            <p className="my-7 flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          )}

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            {data.vote_average && (
              <p className="ms-2 text-sm font-bold text-heading">
                {data.vote_average.toFixed(2)}
              </p>
            )}

            {data.vote_count && (
              <>
                <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
                <p className="text-sm font-medium text-heading underline hover:no-underline">
                  {data.vote_count} reviews
                </p>
              </>
            )}
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime: </span>
            <span>{data.runtime} Mins</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget: </span>
            <span>$ {data.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date: </span>
            <span>{data.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code: </span>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="no_reffer"
            >
              <span>{data.imdb_id}</span>
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

// https://www.imdb.com/title/tt30096221/?ref_=rlm
