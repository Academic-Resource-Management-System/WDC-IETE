import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
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

const ExecutiveCommittee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://www.ietechennai.in/assets/img/trainers/6.jpg"
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
                <Typography
                  style={{ fontSize: '14px' }} // Adjust the size as needed
                  align="center"
                >
                  venkateswaran.iete@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/tata_sudhakar.jpeg"
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

                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  tatasudhakar@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  shakthimuruganece@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/4.jpg"
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  jprabha@svce.ac.in
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  cukumar@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  thulasi9840@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  dvijendrababu@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  lovechennai@yahoo.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/arunkumar.jpeg"
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  arunsundar.s@cvrde.drdo.in
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  madivaanan.s@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/dr_vaishali.jpg"
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

                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  vaishali.b@vdp.srmuniv.ac.in
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/arun.jpeg"
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  snatarajan1967@gmail.com
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

          <Grid
            item
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card sx={{ maxWidth: 275, backgroundColor: colors.topbar[300] }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://ietechennai.in/assets/img/trainers/sumathi.jpeg"
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
                <Typography
                  style={{ fontSize: '13px' }} // Adjust the size as needed
                  align="center"
                >
                  sumathi.ece@sairam.edu.in
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

        </Grid>
      </div>
    </>
  );
};

export default ExecutiveCommittee;