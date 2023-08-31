import React from "react";
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
function Item(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
      pic: "http://www.ietechennai.in/assets/img/events/Slide4.jpeg",
      date: "17th October 2023 (Saturday)"
    },
    {
      name: "Professional Resume Writing",
      description:
        "Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner",
      pic: "http://ietechennai.in/assets/img/events/Slide3.jpeg",
      date: "17/10/2023"
    },
    {
      name: "EASE THE ERROR 1.0",
      description:
        "24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas",
      pic: "http://ietechennai.in/assets/img/events/Slide12.jpeg",
      date: "10/10/2023 & 11/10/2023"
    },
    {
      name: "5G AND IT’S HISTORYs",
      description:
        "Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks",
      pic: "http://ietechennai.in/assets/img/events/Slide2.jpeg",
      date: "20/09/2023"
    }

  ];

  return (
    <div className="px-4 ">
      <Carousel // Use <Carousel> from react-material-ui-carousel
        animation="slide"
        autoPlay={true}
        timer={2000} // 20 seconds
        indicators={true}
        timeout={500} // Transition duration
        className="h-100 "
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
