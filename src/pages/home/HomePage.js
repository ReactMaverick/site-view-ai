import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import Project from "@/components/Project/Project";
import Workflow from "@/components/Workflow/Workflow";
import VideoSec from "@/components/VideoSec/VideoSec";


export default function HomePage() {
    return (
        <Box className={styles.homePage}>
      <Banner />
      <About />
      <Partners/>
      <Project/>
      <Workflow/>
      <VideoSec/>
        </Box>
    );
}
