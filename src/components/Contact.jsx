import React from "react";
import { Grid, Paper, Typography, Avatar, TextField } from "@mui/material";
const Contact = () => {
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
          Get In Touch With Us
        </Typography>
      </div>
      <div className="container  ">
        <Grid container spacing={2} className="my-2">
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Paper
              className="px-2 py-3 my-2"
              style={{
                width: "75%",
                display: "flex",
                alignItems: "center", // Center vertically
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
                Location: IETE Chennai centre, No: 37, Conran Smith Road
                Entrance Peters Road, Gopalapuram,Chennai, Tamil Nadu 600086
              </Typography>
            </Paper>
            <Paper
              className="px-2 py-3 my-2"
              style={{
                width: "75%",
                display: "flex",
                alignItems: "center", // Center vertically
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
                Email: ietechennai@gmail.com
              </Typography>
            </Paper>
            <Paper
              className="px-2 py-3 my-2"
              style={{
                width: "75%",
                display: "flex",
                alignItems: "center", // Center vertically
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
                Call: 044 2835 0773
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="Name"
              label="Your Name"
              className=" w-100"
              variant="filled"
            />
            <div className="d-md-flex">
              <TextField
                id="email"
                className="mt-2 me-md-1 w-100"
                label="Your email address"
                variant="filled"
              />

              <TextField
                id="phone"
                className="mt-2 ms-md-1 w-100"
                label="Your Phone No"
                variant="filled"
              />
            </div>
            <TextField
              id="subject"
              className="mt-2  w-100"
              label="Your Subject"
              variant="filled"
            />

            <TextField
              label="Write Your message..."
              className="mt-2 w-100"
              multiline
              rows={5}
              fullWidth
              variant="filled"
            />
          </Grid>
        </Grid>
      </div>
      <div className="container mt-4 ">MAP</div>
    </>
  );
};

export default Contact;
