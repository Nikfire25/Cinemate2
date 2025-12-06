import PageNotFoundImg from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl texg-gray-700 font-bold my-10 dark:text-white">
            404, Oops! Page not found
          </p>
          <div className="max-w-3xl">
            <img
              src={PageNotFoundImg}
              alt="Page Not Found Image"
              className="rounded"
            />
          </div>
          <div className="my-5">
            <Link to="/">
              <button
                type="button"
                class="w-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 px-5 py-2.5 rounded-lg mr-2 mb-2 text-white"
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
