import React from "react";
import { useState, useEffect } from "react";


function App() {
  //logic
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setData(posts))
      .catch((error) => {
        setError(error);
      });
  }, []);
  // setError("Now there's an error")

  return (
    <>
    <h1>Posts</h1>
      {!error && data
        ? data.map((post) => (
            <div> 
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        : null}
      {error ? <h1>{error}</h1> : null}
    </>
  );
}

export default App;
