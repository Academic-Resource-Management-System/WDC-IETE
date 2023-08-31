import React from "react";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
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
const ExecutiveCommittee = () => {
  return (
    <>
      <div className="container-fluid bg-dark w-100 py-3 ">
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
            <Card sx={{ maxWidth: 275 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="http://www.ietechennai.in/assets/img/trainers/6.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  //     sx={{}}
                >
                  Dr.N.Venkateswaran
                </Typography>
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
        </Grid>
      </div>
    </>
  );
};

export default ExecutiveCommittee;
