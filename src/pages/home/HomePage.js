import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";


export default function HomePage() {
    return (
        <Box className={styles.homePage}>
      <Banner />
      <About />
        </Box>
    );
}
