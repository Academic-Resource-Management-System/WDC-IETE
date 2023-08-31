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
const Membership = () => {
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
              development specialists, industry leaders, and members of the IETE
              executive committee from various centers. These gatherings also
              encompass collaborative programming sessions, uniting students who
              share common interests across multiple institutions within the
              city and the region. Upon graduation, students can confidently
              transition into corporate IETE members, proudly holding the
              esteemed designation of BE. AMIETE. This transition comes with the
              added benefit of reduced membership fees, achieved by offsetting
              the forum participation fee.
            </Typography>
          </Grid>
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
          <Grid
            item
            xs={12}
            md={4}
            sm={3}
            className="d-flex w-100 flex-column align-items-center justify-content-center"
          >
            <Card className="w-100 h-100">
              <CardContent>
                <Typography
                  variant="h5"
                  //     sx={{}}
                >
                  Corporate Members
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sm={3}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="w-100 h-100">
              <CardContent>
                <Typography variant="h3">Non-Corporate Members:</Typography>
                <Typography variant="h5" sx={{}}>
                  Chairman
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Grid>

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
            <Paper
              className="px-2 py-3 my-2 "
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Center vertically
                backgroundColor: colors.topbar[300],
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h5"
                className="ps-3 py-2"
                style={{ flex: 1, overflowWrap: "break-word" }}
              >
                Corporate Member
              </Typography>
            </Paper>
            <Paper
              className="px-2  my-2 py-3 "
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Center vertically
                backgroundColor: colors.topbar[300],
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h5"
                className="ps-3 py-2"
                style={{ flex: 1, overflowWrap: "break-word" }}
              >
                Chartered Engineer
              </Typography>
            </Paper>
            <Paper
              className="px-2  my-2 py-3 "
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Center vertically
                backgroundColor: colors.topbar[300],
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h5"
                className="ps-3 py-2"
                style={{ flex: 1, overflowWrap: "break-word" }}
              >
                Organisational Member
              </Typography>
            </Paper>
            <Paper
              className="px-2 my-2 py-3 "
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Center vertically
                backgroundColor: colors.topbar[300],
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h5"
                className="ps-3 py-2"
                style={{ flex: 1, overflowWrap: "break-word" }}
              >
                AMIETE
              </Typography>
            </Paper>
            <Paper
              className="px-2 my-2 py-3 "
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Center vertically
                backgroundColor: colors.topbar[300],
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h5"
                className="ps-3 py-2"
                style={{ flex: 1, overflowWrap: "break-word" }}
              >
                DIPIETE
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Membership;
