import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { tokens } from "../theme";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: 275, // Set a fixed width for the cards
  },
  cardMedia: {
    minHeight: 250, // Set a fixed height for the images
  },
}));

const ExecutiveCommittee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  const committeeMembers = [
    {
      name: "Dr. N. Venkateswaran",
      position: "Chairman",
      image: "http://www.ietechennai.in/assets/img/trainers/6.jpg",
    },

    {
      name: "Dr. Tata Sudhakar",
      position: "Immd Post Chairman",
      image: "http://ietechennai.in/assets/img/trainers/tata_sudhakar.jpeg",
    },

    {
      name: "Mr. Shakthi Murugan",
      position: "Honorary Secratary",
      image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19",
    },

    {
      name: "Mrs T J Jeyaprabha",
      position: "Honorary Treasurer",
      image: "http://ietechennai.in/assets/img/trainers/4.jpg",
    },

    {
      name: "Dr C Udayakumar",
      position: "EC Member",
      image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19",
    },

    {
      name: "Dr V Thulasibai",
      position: "EC Mmeber",
      image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19",
    },

    {
      name: "Mr D Vijendrababu",
      position: "EC Mmeber",
      image: "http://ietechennai.in/assets/img/trainers/5.jpg",
    },

    {
      name: "Shri Ganapathy Suresh",
      position: "EC Mmeber",
      image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19",
    },

    {
      name: "Shri S Arun Kumar",
      position: "EC Member",
      image: "http://ietechennai.in/assets/img/trainers/arunkumar.jpeg",
    },

    {
      name: "Shri S Madivaanan",
      position: "EC Member",
      image: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1693661191~exp=1693661791~hmac=107e29640a15817f9124452289d6bb0478bcb85edd10bbc3c786c42f287b7f19",
    },

    {
      name: "Dr Vaishali D",
      position: "Co-opted Member",
      image: "http://ietechennai.in/assets/img/trainers/dr_vaishali.jpg",
    },

    {
      name: "Mr Arun",
      position: "Co-opted Member",
      image: "http://ietechennai.in/assets/img/trainers/arun.jpeg",
    },

    {
      name: "Dr. K. Sumathi",
      position: "Co-opted Member",
      image: "http://ietechennai.in/assets/img/trainers/sumathi.jpeg",
    },
    // Add more members as needed
  ];

  return (
    <>
      <div className="container-fluid w-100 py-3">
        <Typography
          variant="h2"
          style={{
            overflowWrap: "break-word",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          Committee members
        </Typography>
      </div>
      <div className="container">
        <Grid container spacing={1} className="my-2">
          {committeeMembers.map((member, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
              className="d-flex align-items-stretch"
            >
              <Card sx={{ backgroundColor: colors.topbar[300] }} className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={member.image}
                  title={member.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    className="fs-4 d-flex justify-content-center text-align-center"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    style={{ fontWeight: "900" }}
                    className="fs-5 d-flex justify-content-center text-align-center"
                  >
                    {member.position}
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-evenly">
                  <IconButton aria-label="LinkedIn">
                    <LinkedInIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Phone">
                    <PhoneIcon className="fs-3" />
                  </IconButton>
                  <IconButton aria-label="Email">
                    <EmailIcon className="fs-3" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ExecutiveCommittee;
