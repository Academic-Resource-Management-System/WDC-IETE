import React from "react";
import { Grid, Paper, Typography, Avatar, useTheme } from "@mui/material";
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
import { Grow } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Membership = () => {
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
          IETE Student Forum
        </Typography>
        <Typography
          variant="h3"
          style={{
            overflowWrap: "break-word",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Connecting Students with Experts and Industry Leaders
        </Typography>
      </div>
      <div className="container">
        <Grid container spacing={2} className="my-2">
          <Grow in={true}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                style={{
                  overflowWrap: "break-word",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Why Join Us?
              </Typography>
            </Grid>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className="mt-2"
                style={{ overflowWrap: "break-word", textAlign: "justify" }}
              >
                The IETE Student Forum, a dynamic platform that fosters
                connections between student members and a diverse array of
                professionals, including experts, academics, R&D professionals,
                industry leaders, and the executive committee of IETE. Here,
                you'll uncover thrilling prospects for exchanging knowledge and
                forging collaborations. We regularly organize meetings that
                facilitate the convergence of experts, academics, research and
                development specialists, industry leaders, and members of the
                IETE executive committee from various centers. These gatherings
                also encompass collaborative programming sessions, uniting
                students who share common interests across multiple institutions
                within the city and the region. Upon graduation, students can
                confidently transition into corporate IETE members, proudly
                holding the esteemed designation of BE. AMIETE. This transition
                comes with the added benefit of reduced membership fees,
                achieved by offsetting the forum participation fee.
              </Typography>
            </Grid>
          </Grow>

          <Grow in={true} timeout={2000}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                style={{
                  overflowWrap: "break-word",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Membership
              </Typography>
            </Grid>
          </Grow>

          <Grow in={true} timeout={2000}>
            <Grid
              item
              xs={12}
              md={4}
              sm={3}
              className="d-flex w-100 flex-column align-items-center justify-content-center"
            >
              <Card className="w-100 h-100 bg-transparent py-3">
                <CardContent>
                  <Typography className="fs-4 text-center">
                    Corporate Members
                  </Typography>
                </CardContent>
                <CardActions className="d-flex flex-column align-items-start">
                  <Typography className="fs-5 text-start  ps-4"></Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    1. Honorary fellow (HF) (elected)
                  </Typography>{" "}
                  <Typography className="fs-5 my-3 text-start ps-4">
                    2. Distinguished Fellow (DF) (elected)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    3. Fellow (F)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    4. Member (M)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    5. Associate member (AM)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    Click Check button to learn more about the Eligibility
                    Criteria and other details
                  </Typography>
                  <div className="  d-flex justify-content-end align-items-end pe-4 w-100 ">
                    <Button
                      variant="contained"
                      color="primary"
                      className="bg-primary"
                      style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      check
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Grid
              item
              xs={12}
              md={4}
              sm={3}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card className="w-100 h-100 bg-transparent py-3">
                <CardContent>
                  <Typography className="fs-4 text-center">
                    Non-Corporate Members
                  </Typography>
                </CardContent>
                <CardActions className="d-flex flex-column align-items-start">
                  <Typography className="fs-5 text-start  ps-4"></Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    6. Associate (A)
                  </Typography>{" "}
                  <Typography className="fs-5 my-3 text-start ps-4">
                    7. Organisational Member (ORG)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    8. AMIETE Student (AMIETE)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    9. DIPIETE Student (DipIETE)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    10. Diploma Member (DipIETE Passout)
                  </Typography>
                  <Typography className="fs-5 my-3 text-start ps-4">
                    Click Check button to learn more about the Eligibility
                    Criteria and other details
                  </Typography>
                  <div className="  d-flex justify-content-end align-items-end pe-4 w-100 ">
                    <Button
                      variant="contained"
                      color="primary"
                      className="bg-primary"
                      style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      check
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in={true} timeout={3000}>
            <Grid
              item
              xs={12}
              md={4}
              sm={3}
              className="d-flex w-100 flex-column  align-items-center justify-content-center px-2 py-2"
            >
              <Typography
                variant="h3"
                style={{
                  overflowWrap: "break-word",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Forms
              </Typography>
              <Link
                to="https://iete.org/IETE1_CORPUP.pdf"
                className="w-100"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  className="px-2 py-3 my-2 "
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center", // Center vertically
                    backgroundColor: colors.topbar[300],
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Corporate Member
                  </Typography>
                </Paper>
              </Link>

              <Link
                to="https://iete.org/CE_Formup.pdf"
                className="w-100"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  className="px-2  my-2 py-3 "
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center", // Center vertically
                    backgroundColor: colors.topbar[300],
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Chartered Engineer
                  </Typography>
                </Paper>
              </Link>

              <Link
                to="https://iete.org/orgmemup.pdf"
                className="w-100"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  className="px-2  my-2 py-3 "
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center", // Center vertically
                    backgroundColor: colors.topbar[300],
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Organisational Member
                  </Typography>
                </Paper>
              </Link>

              <Link
                to="https://iete.org/AMMEM.pdf"
                className="w-100"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  className="px-2 my-2 py-3 "
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center", // Center vertically
                    backgroundColor: colors.topbar[300],
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    AMIETE
                  </Typography>
                </Paper>
              </Link>

              <Link
                to="https://iete.org/DIPMEM.pdf"
                className="w-100"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  className="px-2 my-2 py-3 "
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center", // Center vertically
                    backgroundColor: colors.topbar[300],
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{
                      flex: 1,
                      overflowWrap: "break-word",
                    }}
                  >
                    DIPIETE
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          </Grow>
        </Grid>
      </div>
    </>
  );
};

export default Membership;
