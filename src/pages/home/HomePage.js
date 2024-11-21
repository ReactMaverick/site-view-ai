import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Banner from "@/components/Banner/Banner";


export default function HomePage() {
    return (
        <Box className={styles.homePage}>
      <Banner />
        </Box>
    );
}
