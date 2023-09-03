import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  useTheme,
  TextField,
  CardMedia,
  Button,
  Paper,
} from "@mui/material";
import { Nav } from "react-bootstrap";
import { useEffect } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grow } from "@mui/material";
import { tokens } from "../theme";
import { useLocation } from "react-router-dom";
function Item(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="container">
      <Grow in={true} timeout={1500}>
        <Paper
          className="h-100 py-2 px-4 mt-3"
          style={{ backgroundColor: colors.topbar[300] }}
        >
          <Grid
            container
            spacing={2}
            className="my-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {" "}
            {props.item.pic !== "null" ? (
              <>
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
              </>
            ) : (
              <Grid item xs={12} className="py-4">
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
            )}
          </Grid>
        </Paper>
      </Grow>
    </div>
  );
}
const Event = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Listen to changes in the pathname

  var items = [
    {
      name: "Professional Resume Writing",
      description:
        "Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner",
      pic: "http://www.ietechennai.in/assets/img/events/Slide4.jpeg",
      date: "17th October 2023 (Saturday)",
    },
    {
      name: "EVOLUTION OF COMPUTING AND SKILL SETS FOR THE FUTURE",
      description:
        "Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software",
      pic: "http://ietechennai.in/assets/img/events/Slide3.jpeg",
      date: "17th October 2023 (Saturday)",
    },
    {
      name: "EASE THE ERROR 1.0",
      description:
        "24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas",
      pic: "http://ietechennai.in/assets/img/events/Slide12.jpeg",
      date: "10th October 2023 (Sunday) & 11th October 2023 (Monday) ",
    },
    {
      name: "5G AND IT’S HISTORYs",
      description:
        "Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks",
      pic: "http://ietechennai.in/assets/img/events/Slide2.jpeg",
      date: "20th November 2023 (Monday)",
    },
    {
      name: "Webinar on IoT Security(WISE-2022)",
      description:
        "Professional Resume Writing SETS Chennai & C-DAC Hyderabad in collaboration with ISEA. All interested members are requested to register at the following link to participate in the webinar Participation certificate will be issued to all the registered participants after attending all the sessions.",
      pic: "null",
      date: "30th May 2022 (Saturday)",
    },
    {
      name: "COVID 19 AND AI SOLUTIONS",
      description:
        "Quiz on ‘COVID19 and AI Solutions”. The event started with the note on ‘Revering of knowledge",
      pic: "http://www.ietechennai.in/assets/img/events/Slide1.jpeg",
      date: "20th September 2023 (Monday)",
    },
    {
      name: "OCEAN TECHNOLOGY IN IOT",
      description:
        "Mr.TATA SUDHAKAR (former IETE Che Chairman) explained about the role of Ocean Technology for society, Coastal Protection",
      pic: "http://www.ietechennai.in/assets/img/events/Slide11.jpeg",
      date: "20th September 2023 (Monday)",
    },
    {
      name: "A REALISTIC APPROACH TOWARDS DATA SCIENCE",
      description:
        "Mr.Sivasubramanian (Business Intelligence & Data Analyst)covered various topics on data science like the sectors",
      pic: "http://www.ietechennai.in/assets/img/events/Slide10.jpeg",
      date: "23th August 2023 (Friday)",
    },
    {
      name: "MATLAB PROGRAMMING TECHNIQUES",
      description:
        "DR.Markkandan (Asst. Professor, Anand Institute of Higher Technology) talked about MATLAB Fundamentals, Applications, Sample Matlab",
      pic: "http://www.ietechennai.in/assets/img/events/Slide9.jpeg",

      date: "14th August 2023 (Saturday)",
    },

    {
      name: "ELECTRONIC CONTROL UNIT FOR HEAVY DUTY TRUCKS",
      description:
        "Mr.K.V.Nagesh (Founder and Managing Director of Data Care Systems) talked on speaking about engine cooling, speed & preheat control.",
      pic: "null",

      date: "08th August 2023 (Sunday)",
    },

    {
      name: "RECENT TRENDS IN OPTICAL COMMUNICATION SYSTEMS",
      description:
        "Sri A.Sadagopan (Asst. General Manager(Retd.), BSNL talked on Recent Trends in optical Communication",
      pic: "null",

      date: "05th September 2023 (Monday)",
    },

    {
      name: "SOFTWARE DESIGN ASPECTS OF WLAN ACCESS POINTS",
      description:
        "Mr. Ashok Govindarajan (Head of Wireless Networks, Zilogic) started the session with how WLAN access points",
      pic: "null",

      date: "25th July 2023 (Saturday)",
    },

    {
      name: "GPS AND BEYOND: AN INTRODUCTION TO SATELLITE POSTITONING SYSTEM",
      description:
        "DR.K.M.Sivakholundu (Vice Chancellor, IMU) talked on GPS: Space Segment, Navigation message, GPS Ranging",
      pic: "null",

      date: "11th July 2023 (Sunday)",
    },

    {
      name: "AN INTRODUCTION TO IoT AND APPLICATIONS",
      description:
        "Mr.G.L.GangaPrasad (Senior Director, CFDOAC) talked on Basics of IoT, why IoT, components, communication",
      pic: "null",

      date: "04th July 2023 (Tuesday)",
    },
  ];

  return (
    <>
      {" "}
      <div className="container-fluid  w-100 py-3 ">
        <Typography
          variant="h2"
          style={{
            overflowWrap: "break-word",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center horizontally
            //    backgroundColor: "red",
            padding: "1rem",
          }}
        >
          Events
        </Typography>
      </div>
      <div className="h-100 mb-5 w-100 container px-2 " style={{}}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Event;
