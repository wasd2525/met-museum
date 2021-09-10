import React, { useState, useEffect } from "react";
import Art from "./Pages/Art";
import { useParams } from "react-router-dom";

function Portal() {
  const [data, setData] = useState(Number);
  let { id } = useParams();

  useEffect(() => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=""`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(
          result.objectIDs[Math.floor(Math.random() * result.objectIDs.length)]
        );
      });
  }, []);
  if (data == 0) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <Art item={data} />
      </div>
    );
  }
}

export default Portal;
