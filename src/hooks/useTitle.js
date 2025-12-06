import { useEffect } from "react";

const useTitle = (title = "Home") => {
  useEffect(() => {
    document.title = `${title} - CineMate`;
  }, [title]);
};

export default useTitle;
