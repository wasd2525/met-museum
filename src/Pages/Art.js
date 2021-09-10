import React, { useState, useEffect } from "react";
import "./Art.css";
import Grid from "@material-ui/core/Grid";
import met from "../Assets/met.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import LazyLoad from "react-lazyload";

function Art(props) {
  const [data, setData] = useState([]);
  const image = data.primaryImageSmall;
  useEffect(() => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.item}`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  let title;
  if (data != []) {
    if (String(data.title).length > 29)
      title = <h3 style={{ color: "#fff" }}>{data.title}</h3>;
    else title = <h1 style={{ color: "#fff" }}>{data.title}</h1>;
  }
  if (props.item == 0) {
    return <div>loading</div>;
  } else {
    return (
      <Zoom>
        <div style={{ height: "100vh" }} className="grx-deeppurple-teal">
          <Grid
            style={{
              width: "100%",
              height: "100%",
            }}
            container
          >
            <Grid
              style={{ padding: "40px" }}
              item
              key={1}
              xs={12}
              sm={12}
              md={6}
            >
              {title}
              <Fade bottom cascade>
                <h1 style={{ color: "#fff" }}>{data.objectEndDate}</h1>
              </Fade>
              <Fade bottom>
                <img
                  style={{
                    width: "40%",
                    boxShadow: "-9px 9px 0px -1px #BB0021",
                  }}
                  src={met}
                />
              </Fade>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "30px",
              }}
              item
              key={1}
              xs={12}
              sm={12}
              md={6}
            >
              <a target="_blank" href={image}>
                <Zoom>
                  <img
                    style={{
                      width: "100%",
                      height: "90vh",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      boxShadow: "0px 0px 15px -2px #000000",
                    }}
                    href={image}
                    src={image}
                    class="preview"
                    alt="image"
                  />
                </Zoom>
              </a>
            </Grid>
          </Grid>
        </div>
      </Zoom>
    );
  }
}

export default Art;
