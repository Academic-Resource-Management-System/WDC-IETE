import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  CardMedia,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel"; // Corrected import statement
import { tokens } from "../theme";
import im from "../A.jpg";
import { Collapse, Grow } from "@mui/material";
import { useLocation } from "react-router-dom";
import img12 from "../img/Slide12.jpeg";
import img2 from "../img/Slide2.jpeg";
import img3 from "../img/Slide3.jpeg";
import img4 from "../img/Slide4.jpeg";

function Item(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Listen to changes in the pathname

  return (
    <div className="container">
      <Paper
        className="h-100 py-2 px-4"
        style={{ backgroundColor: colors.topbar[300] }}
      >
        <Grid
          container
          spacing={2}
          className="my-2"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              className="fs-2"
              style={{
                overflowWrap: "break-word",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                paddingLeft: "0.5rem",
                fontWeight: "900",
              }}
            >
              {props.item.name}
            </Typography>

            <Typography
              className="fs-5"
              style={{
                overflowWrap: "break-word",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                fontWeight: "750",
                paddingLeft: "0.5rem",
              }}
            >
              {props.item.date}
            </Typography>

            <Typography
              className="fs-5 mt-2"
              style={{
                overflowWrap: "break-word",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                paddingLeft: "0.5rem",
              }}
            >
              {props.item.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height={300}
              image={props.item.pic} // Provide the image URL here
              alt={props.item.name}
              style={{ objectFit: "cover" }} // Add this line
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const Home = () => {
  var items = [
    {
      name: "Professional Resume Writing",
      description:
        "Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner",
      pic: img4,
      date: "17th October 2023 (Saturday)",
    },
    {
      name: "EVOLUTION OF COMPUTING AND SKILL SETS FOR THE FUTURE",
      description:
        "Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software",
      pic: img3,
      date: "17th October 2023 (Saturday)",
    },
    {
      name: "EASE THE ERROR 1.0",
      description:
        "24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas",
      pic: img12,
      date: "10/10/2023 & 11/10/2023",
      date: "10th October 2023 (Sunday) & 11th October 2023 (Monday) ",
    },
    {
      name: "5G AND IT’S HISTORYs",
      description:
        "Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks",
      pic: img2,
      date: "20/09/2023",
      date: "20th November 2023 (Monday)",
    },
  ];

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is below a certain threshold to trigger the fade-in effect
      if (window.scrollY > 100) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <div
        className="vh-100 w-100 container-fluid"
        style={{
          backgroundImage: `url('${im}')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          imageRendering: "pixelated",
        }}
      >
        <Grid container spacing={2} className="h-100">
          <Grid item xs={12} md={6}>
            <div className="d-flex flex-column h-100 justify-content-center mx-md-5">
              <Grow in={true} timeout={1000}>
                <Typography
                  className="fs-1 text-light"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  "Learning Today,
                </Typography>
              </Grow>
              <Grow in={true} timeout={2000}>
                <Typography
                  className="fs-1 ms-3 ps-md-1 text-light"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Leading Tomorrow"
                </Typography>
              </Grow>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="d-flex flex-column h-100 justify-content-center mx-md-5">
              <Paper
                className="px-2 py-3 w-100"
                style={{
                  display: "flex",
                  alignItems: "center",

                  background: "transparent", // Set your desired background color with some transparency
                  backdropFilter: "blur(100px)",
                  border: "1pt solid black",
                }}
              >
                <div className="d-flex mx-3 flex-column justify-content-center align-items-center">
                  <Typography className="fs-4 text-light">13</Typography>
                  <Typography className="fs-4 text-light">MAY</Typography>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start ms-3">
                  <Typography
                    className=" fs-4  text-light"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Webinar On IoT Security
                  </Typography>
                  <Typography
                    className=" fs-6 text-light"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    (WISE-2022) organized by SETS Chennai & C-DAC Hyderabad in
                    collaboration with ISEA
                  </Typography>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="container p-3 mt-3">
        <Typography
          className="fs-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR
          NEW INDIA"
        </Typography>
        <Typography
          className="fs-6 py-2"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
        </Typography>
        <Typography
          className="fs-5  py-2 "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textAlign: "justify",
          }}
        >
          Chennai Centre of IETE is committed to attain commanding heights and
          achieve the status of “Centre of Excellence” in Technical, Engineering
          & Management education by harnessing the best practices in educational
          innovation and through its concerted endeavors like quality teaching,
          industrial consultancy and training to the aspirants including
          corporate training.
        </Typography>
      </div>
      <Typography
        className="fs-2 text-center my-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Recent Events
      </Typography>

      <Carousel // Use <Carousel> from react-material-ui-carousel
        animation="slide"
        autoPlay={true}
        timer={2000} // 20 seconds
        indicators={true}
        timeout={500} // Transition duration
        className="h-100 mb-5"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
