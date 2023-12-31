import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  useTheme,
  Tooltip,
} from "@mui/material";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import { tokens } from "../theme";
import { useLocation } from "react-router-dom";
import Grow from "@mui/material/Grow";
import img1 from "../img/6.jpg";
import img2 from "../img/tata_sudhakar.jpeg";
import img3 from "../img/4.jpg";
import img4 from "../img/5.jpg";
import img5 from "../img/arunkumar.jpeg";
import img6 from "../img/dr_vaishali.jpg";
import img7 from "../img/arun.jpeg";
import img8 from "../img/sumathi.jpeg";

const ExecutiveCommittee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Listen to changes in the pathname

  return (
    <>
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
          Committee members
        </Typography>
      </div>
      <div className="container">
        <Grid container spacing={2} className="my-2">
          <Grow in={true}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img1}
                  title="green iguana"
                />

                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr.N.Venkateswaran
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Chairman
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>{" "}
            </Grid>
          </Grow>

          <Grow in={true} timeout={1000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr. Tata Sudhakar
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Immd Post Chairman
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>

          <Grow in={true} timeout={2000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Mr. Shakthi Murugan
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Honorary Secratary
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>

          <Grow in={true} timeout={3000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250, width: "100%" }}
                  image={img3}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Mrs T J Jeyaprabha
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Honorary Treasurer
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <Tooltip title="venkateswaran.iete@gmail.com">
                    <IconButton aria-label="Facebook">
                      <LinkedInIcon className="fs-3" />
                    </IconButton>
                  </Tooltip>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>

          <Grow in={true} timeout={4000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr C Udayakumar
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>

          <Grow in={true} timeout={4000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr V Thulasibai
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={4000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="http://ietechennai.in/assets/img/trainers/5.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Mr D Vijendrababu
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>

          <Grow in={true} timeout={4000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Shri Ganapathy Suresh
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={5000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img5}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Shri S Arun Kumar
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={5000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Shri S Madivaanan
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    EC Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={5000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img6}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr Vaishali D
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Co-opted Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={5000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img7}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Mr.Arun
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Co-opted Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={5000}>
            <Grid
              item
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card sx={{ minWidth: 275, backgroundColor: colors.topbar[300] }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={img8}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    Dr. K. Sumathi
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    Co-opted Member
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
        </Grid>
      </div>
    </>
  );
};

export default ExecutiveCommittee;
