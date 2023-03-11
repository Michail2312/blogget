import { useEffect, useState, useContext } from "react";
import { URL_API } from "../api/const";
import { tokenContext } from "../context/tokenContext";

export const useGetBestPosts = () => {
  const [bestPosts, setBestPosts] = useState([]);
  const { token } = useContext(tokenContext);
  useEffect(() => {
    fetch(`${URL_API}/best?limit=100`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) throw new Error(response.status);
        return response.json();
      })
      .then((bestPosts) => setBestPosts(bestPosts.data.children))
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [bestPosts];
};
