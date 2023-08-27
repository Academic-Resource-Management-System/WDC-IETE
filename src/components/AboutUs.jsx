import React from "react";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
const AboutUs = () => {
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
          About Us
        </Typography>
      </div>
      <div className="container bg-dark w-100 py-3 ">
        <Grid
          container
          spacing={2}
          className="my-2"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              IETE
            </Typography>
            <Typography
              variant="h5"
              className="mt-2"
              style={{ overflowWrap: "break-word", textAlign: "justify" }}
            >
              Founded in 1953, the Institution of Electronics and
              Telecommunication Engineers (IETE) is a leading professional
              society. Its vision is to reach the unreached and empower the
              youth through Technical Education and Skill development with a
              Mission for Advancement of Electronics, Telecommunication,
              Information Technology & other related disciplines; to contribute
              in Nation's Human Resource & Infrastructure Development through
              our Engineers & Scientists. The Government of India, Ministry of
              Science and Technology, Department of Scientific & Industrial
              Research has recognized IETE as a Scientific and Industrial
              Research Organization (SIRO). The Institution has also been
              notified as an Educational Institution of National Eminence by the
              Government of India. IETE is governed by its elected Governing
              Council headed by an elected President. It has on its roll the
              Secretary General – the head of IETE Secretariat as Chief
              Executive. The Institution is managed through various Committees
              and Boards nominated by the Governing Council. The 63 Centers are
              spread all over India 02 abroad and are managed by respective
              Executive Committees. To keep pace with technological development
              and achieve the mission, it organizes conferences, conventions,
              symposia, seminars, workshops, publications and brain storming
              sessions for continued knowledge upgradation of its members.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center horizontally
              //    backgroundColor: "red",
              padding: "1rem", // Add some padding for spacing
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className="my-4"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              Chennai Center
            </Typography>
            <Typography
              variant="h5"
              className="mt-2"
              style={{ overflowWrap: "break-word", textAlign: "justify" }}
            >
              Chennai Centre of IETE is committed to attain commanding heights
              and achieve the status of “Centre of Excellence” in Technical,
              Engineering & Management education by harnessing the best
              practices in educational innovation and through its concerted
              endeavors like quality teaching, industrial consultancy and
              training to the aspirants including corporate training. The Centre
              assigns top priority to the basic need for ‘education
              transformation’ in keeping pace with time, and aims at to develop
              the highest quality of manpower to cater to the needs &
              expectations of industry, R&D and educational institutions, with
              higher degree of employability for today and tomorrow.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              Goals
            </Typography>
            <Typography
              variant="h5"
              className="mt-2"
              style={{ overflowWrap: "break-word", textAlign: "justify" }}
            >
              Vision: Reaching the un-reached and empowering the youth through
              Technical Education and Skill Development.
            </Typography>
            <Typography
              variant="h5"
              className="mt-1"
              style={{ overflowWrap: "break-word", textAlign: "justify" }}
            >
              Mission: Advancement of Electronics, Telecommunication,
              Information Technology & other related disciplines to contribute
              in Nation’s Human Resource & Infrastructure Development through
              our Engineers.
            </Typography>{" "}
            <Typography
              variant="h5"
              className="mt-2"
              style={{ overflowWrap: "break-word", textAlign: "justify" }}
            >
              Motives: IETE is helping it's students to learn and grow in the
              emerging field of Electronics and Telecommunication. One of the
              missions of IETE is to provide the best mode of studying a Btech
              degree programme.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="container-fluid bg-dark w-100 py-3 ">
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid
            item
            xs={12}
            md={3}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center horizontally
              //      backgroundColor: "red",
              padding: "1rem", // Add some padding for spacing
            }}
          >
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              12060
            </Typography>
            <Typography variant="h3" style={{ overflowWrap: "break-word" }}>
              Students
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center horizontally
              //   backgroundColor: "red",
              padding: "1rem", // Add some padding for spacing
            }}
          >
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              13592
            </Typography>
            <Typography variant="h3" style={{ overflowWrap: "break-word" }}>
              Staff
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center horizontally
              //    backgroundColor: "red",
              padding: "1rem", // Add some padding for spacing
            }}
          >
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              42
            </Typography>
            <Typography variant="h3" style={{ overflowWrap: "break-word" }}>
              Events
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center horizontally
              // backgroundColor: "red",
              padding: "1rem", // Add some padding for spacing
            }}
          >
            <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
              15
            </Typography>
            <Typography variant="h3" style={{ overflowWrap: "break-word" }}>
              Colleges
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="container bg-dark">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              className="px-3"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red",
                padding: "1rem",
              }}
            >
              List of Colleges
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Sri Venkateswara College of Engineering, Sriperambadur
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Panimalar Institute of Technology
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Easwari Engineering College
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Veltech Multi Engineering College
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                SRM Institute of Science and Technology
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Jeppiar Institute of Technology
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                RMK College of Engineering and Technology
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Velammal Engineering College
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                KCG College of Technology
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Dr Rangarajan Dr Sakunthala Engg College
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Saveetha Engineering College
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Dr. M G R Educational & Research Institute
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                Dr. M G R Educational & Research Institute
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                style={{
                  flex: 1,
                  overflowWrap: "break-word",
                }}
              >
                DMI College of Engineering
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="px-2 py-3 "
              style={{
                width: "100%",
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
                MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AboutUs;
