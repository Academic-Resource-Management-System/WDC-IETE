import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  useTheme,
  CardMedia,
} from "@mui/material";
import { tokens } from "../theme";
import Carousel from "react-bootstrap/Carousel";
import AnimatedNumber from "./AnimatedNumber";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Grow, Zoom } from "@mui/material";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is below a certain threshold to trigger the fade-in effect
      if (window.scrollY > 100) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const carouselItems = [
    {
      title: "College",
      imgSrc:
        "https://i0.wp.com/www.ietechandigarh.org/Slider/images/slides/new1.jpg", // Replace with your image URL
    },
    {
      title: "ISF inauguration meeting",
      imgSrc:
        "https://scontent-maa2-2.xx.fbcdn.net/v/t1.6435-9/37014512_409961682843011_3974733593812402176_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VLtwclb7kT8AX8GfABX&_nc_ht=scontent-maa2-2.xx&oh=00_AfCthCbihC1RSQ8AjHwu-EYFr2y47AB0RIRV4Du-LPjAjQ&oe=6519291A", // Replace with your image URL
    },
    // Add more items as needed
  ];

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
          About Us
        </Typography>
      </div>
      <div className="container  w-100 py-3 ">
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
            <Grow in={true}>
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
                Information Technology & other related disciplines; to
                contribute in Nation's Human Resource & Infrastructure
                Development through our Engineers & Scientists. The Government
                of India, Ministry of Science and Technology, Department of
                Scientific & Industrial Research has recognized IETE as a
                Scientific and Industrial Research Organization (SIRO). The
                Institution has also been notified as an Educational Institution
                of National Eminence by the Government of India. IETE is
                governed by its elected Governing Council headed by an elected
                President. It has on its roll the Secretary General – the head
                of IETE Secretariat as Chief Executive. The Institution is
                managed through various Committees and Boards nominated by the
                Governing Council. The 63 Centers are spread all over India 02
                abroad and are managed by respective Executive Committees. To
                keep pace with technological development and achieve the
                mission, it organizes conferences, conventions, symposia,
                seminars, workshops, publications and brain storming sessions
                for continued knowledge upgradation of its members.
              </Typography>
            </Grow>
          </Grid>

          <Grow in={true} timeout={1000}>
            <Grid item xs={12} md={6}>
              <Carousel className="h-100 pt-4">
                {carouselItems.map((item, index) => (
                  <Carousel.Item key={index} className="h-100">
                    <div
                      className="h-100"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <h3>{item.title}</h3>
                      </div>
                      <CardMedia
                        component="img"
                        height={300}
                        image={item.imgSrc} // Provide the image URL here
                        alt={item.title}
                        style={{ objectFit: "cover" }} // Add this line
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Grid>
          </Grow>
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
          <Grow in={true} timeout={2000}>
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
                training to the aspirants including corporate training. The
                Centre assigns top priority to the basic need for ‘education
                transformation’ in keeping pace with time, and aims at to
                develop the highest quality of manpower to cater to the needs &
                expectations of industry, R&D and educational institutions, with
                higher degree of employability for today and tomorrow.
              </Typography>
            </Grid>
          </Grow>
          <Grow in={true} timeout={3000}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" style={{ overflowWrap: "break-word" }}>
                Goals
              </Typography>
              <Typography
                variant="h5"
                className="mt-2"
                style={{ overflowWrap: "break-word", textAlign: "justify" }}
              >
                <VerifiedIcon className="text-success me-1" />
                Vision: Reaching the un-reached and empowering the youth through
                Technical Education and Skill Development.
              </Typography>
              <Typography
                variant="h5"
                className="mt-1"
                style={{ overflowWrap: "break-word", textAlign: "justify" }}
              >
                <VerifiedIcon className="text-success me-1" />
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
                <VerifiedIcon className="text-success me-1" />
                Motives: IETE is helping it's students to learn and grow in the
                emerging field of Electronics and Telecommunication. One of the
                missions of IETE is to provide the best mode of studying a Btech
                degree programme.
              </Typography>
            </Grid>
          </Grow>
        </Grid>
      </div>
      <div className="container-fluid w-100 py-3 ">
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
              <AnimatedNumber targetNumber={12060} duration={5000} />
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
              <AnimatedNumber targetNumber={13592} duration={6000} />
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
              <AnimatedNumber targetNumber={42} duration={3000} />
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
              <AnimatedNumber targetNumber={15} duration={3000} />
            </Typography>
            <Typography variant="h3" style={{ overflowWrap: "break-word" }}>
              Colleges
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="container mb-5 pb-5">
        <Zoom in={checked}>
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Sri Venkateswara College of Engineering, Sriperambadur"
                  src="https://th.bing.com/th/id/OIP.WT5izKZbPj2CMvjho8JqHAAAAA?w=146&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Panimalar Institute of Technology"
                  src="https://th.bing.com/th/id/OIP.3dK96mtkrDxLR36TmokzOwAAAA?w=141&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Easwari Engineering College"
                  src="https://th.bing.com/th/id/OIP.7SoD977qkXqXbHuJ_5IkFwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Veltech Multi Engineering College"
                  src="https://th.bing.com/th/id/OIP.VBXeeRXiAtyJNxfDGiEPGgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="SRM Institute of Science and Technology"
                  src="https://th.bing.com/th/id/OIP.FP-z3Ta4KmKo_PYN7P8uWAAAAA?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Jeppiar Institute of Technology"
                  src="https://th.bing.com/th/id/OIP.xMPypJOCgcVBaVNibLVOOgAAAA?w=136&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="RMK College of Engineering and Technology"
                  src="https://th.bing.com/th/id/R.15c98c07201242a7c26f72bdbc66b6a4?rik=0OegWvCzvMiuRg&riu=http%3a%2f%2frmkec.ac.in%2fgrp%2fimg%2frmkcetlogo_03.jpg&ehk=nUlYV9EkjqjP04Sp4cKxTLB8l9Ul%2fCZrwsoqLc%2fnk94%3d&risl=&pid=ImgRaw&r=0"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Velammal Engineering College"
                  src="https://www.collegesignal.com/images/colleges/cz_57f257a311227160339/logo/Velammal%20Engineering%20College%20logo-m9005-original.png"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="KCG College of Technology"
                  src="https://th.bing.com/th/id/OIP.uLDE8K_XKOEH8mzHXwCPGgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Dr Rangarajan Dr Sakunthala Engg College"
                  src="https://th.bing.com/th/id/OIP.dgrel_9JYsTsX9KgZlg0UgAAAA?w=141&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Saveetha Engineering College"
                  src="https://th.bing.com/th/id/OIP.5RvGjgir5-ud0FFYAfS4mAHaHZ?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Dr. M G R Educational & Research Institute"
                  src="https://th.bing.com/th/id/OIP.ONq-5LRXgXGs7_Z-I6cnEgAAAA?w=166&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://th.bing.com/th/id/OIP.ONq-5LRXgXGs7_Z-I6cnEgAAAA?w=166&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="DMI College of Engineering"
                  src="https://th.bing.com/th/id/OIP.wmfVvNhnjhtAvpUYMnQNeAD6D6?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE"
                  src="https://th.bing.com/th/id/OIP.qwHe5EUHhVchXIi4YOfjRgAAAA?w=136&h=132&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
        </Zoom>
      </div>
    </>
  );
};

export default AboutUs;
