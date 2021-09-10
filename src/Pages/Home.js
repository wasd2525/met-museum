import React, { useState, useEffect } from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result.departments);
      });
  }, []);
  return (
    <div
      style={{ height: "100%", minHeight: "100vh" }}
      className="grx-teal-blue"
    >
      <Grid
        style={{
          width: "70%",
          height: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
        container
      >
        {data.map((item, index) => {
          return (
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              key={1}
              xs={12}
              sm={12}
              md={2}
            >
              <Link to={{ pathname: `/id=${String(item.departmentId)}` }}>
                <Button
                  style={{
                    height: "160px",
                    width: "150px",
                  }}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  {String(item.displayName)}
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
