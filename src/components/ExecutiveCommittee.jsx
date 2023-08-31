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
