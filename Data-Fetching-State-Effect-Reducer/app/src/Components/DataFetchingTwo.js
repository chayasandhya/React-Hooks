import React, { useReducer, useEffect } from "react";
import axios from "axios";

let initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_FAILURE":
      return { loading: false, error: "Something Wrong man****", post: {} };
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
