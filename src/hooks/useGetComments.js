import { useContext, useEffect, useState } from "react";
import { URL_API } from "../api/const";
import { tokenContext } from "../context/tokenContext";

export const useGetComments = (id) => {
  const [commentsData, setCommentsData] = useState({});
  const { token } = useContext(tokenContext);

  useEffect(() => {
    fetch(`${URL_API}/comments/${id}`, {
      headers: { Authorization: `bearer ${token}` },
    })
      .then((response) => response.json())
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ]) => {
          const comments = children.map((item) => item.data);
          setCommentsData({ post, comments });
        },
      )

      .catch();
  }, [id]);
  return [commentsData, setCommentsData];
};
