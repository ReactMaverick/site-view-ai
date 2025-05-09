"use client";
import { Box, MenuItem, Select, Container, TextField, Typography, Button } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState } from "react";
import styles from "./PricingQuote.module.css";
import { SITECONT } from "@/values/Constants/ImageConstants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";

const countries = [
  { label: "United States", value: "us", code: "+1" },
  { label: "United Kingdom", value: "gb", code: "+44" },
  { label: "India", value: "in", code: "+91" },
  { label: "Canada", value: "ca", code: "+1" },
  { label: "Australia", value: "au", code: "+61" },
  // Add more countries as needed
];

export default function PricingQuote() {
  const [selectedCountry, setSelectedCountry] = useState("us");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const [fileName, setFileName] = useState(""); // State to store the file name

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setFileName(file.name); // Update the state with the file name
    } else {
      setFileName(""); // Reset if no file is selected
    }
  };
  return (
    <Box sx={MUIStyle.PricingQuoteSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PricingQuoteHeadingBoxOuter}>
          <Box sx={MUIStyle.PricingQuoteHeadingBoxInner}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Get Your Pricing in 24 Hours
            </Typography>
            <Typography variant="body1" sx={MUIStyle.Bodytext}>
              Tell us about your project to receive your quote.
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.PricingQuoteFormGrid}>
          <Box sx={MUIStyle.PricingQuoteFormCol}>
            <Box sx={MUIStyle.PricingQuoteFormOuter}>
              <Box sx={MUIStyle.PricingQuoteInputItem}>
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Your Name
                </Typography>
                <TextField id="name" placeholder="Enter your name" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem}>
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Work Email <span>*</span>
                </Typography>
                <TextField id="work-email" placeholder="Enter work email" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem}>
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Mobile Number
                </Typography>
                <Box sx={MUIStyle.PricingQuoteInputFlex}>
                  {/* country code dropdown with flag */}
                  <Select
                    className={styles.selectCountry}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    sx={MUIStyle.CountryCodeDropdown}
                    displayEmpty
                    IconComponent={ExpandMoreIcon} // Use a custom arrow icon
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        <Box
                          component="img"
                          src={`https://flagcdn.com/w40/${country.value.toLowerCase()}.png`}
                          alt={country.label}
                          sx={{ width: 25, height: 15, }}
                        />
                      </MenuItem>
                    ))}
                  </Select>

                  <TextField id="mobile-number" placeholder="Enter mobile number" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem}>
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Project Name
                </Typography>
                <TextField id="project-name" placeholder="enter project name" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItemRow}>
                <Box sx={MUIStyle.PricingQuoteInputItem}>
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Country <span>*</span>
                  </Typography>
                  <TextField id="country" placeholder="enter country name " variant="outlined" sx={MUIStyle.PricingQuoteInput} />
                </Box>
                <Box sx={MUIStyle.PricingQuoteInputItem}>
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    City / Location
                  </Typography>
                  <TextField id="city" placeholder="enter city name" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItemRow}>
                <Box sx={MUIStyle.PricingQuoteInputItem}>
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Number of Floors to Monitor
                  </Typography>
                  <TextField id="floors" placeholder="enter number of floors" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
                </Box>
                <Box sx={MUIStyle.PricingQuoteInputItem}>
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Area of the Floorplan <span>*</span>
                  </Typography>
                  <TextField id="area" placeholder="enter area of the floorplan" variant="outlined" sx={MUIStyle.PricingQuoteInput} />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem}>
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Attach Typical Floorplan
                </Typography>
                <Box sx={MUIStyle.PricingQuoteInputFile}>
                  <input type="file"
                    onChange={handleFileChange}
                    id="floorplan" />
                  <Box
                    sx={MUIStyle.PricingQuoteInputFileBtn}
                    onClick={() => document.getElementById("floorplan").click()}
                  >
                    <Box component={"span"} sx={MUIStyle.PricingQuoteInputFileIcon}>
                      <Icon icon="solar:upload-outline" />
                    </Box>

                    <Typography variant="body1" sx={MUIStyle.PricingQuoteInputFileText}>
                      Upload File
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={MUIStyle.PricingQuoteInputFileName}>
                    {fileName || ""}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={MUIStyle.FormShortText}>
                  * Attach the Typical Floorplan to Get Accurate Pricing. Allowed JPG, JPEG or PDF file only.
                </Typography>
              </Box>
              {/* button  */}
              <Button
                variant="contained"
                sx={MUIStyle.PricingQuoteInputBtn}
                onClick={() => alert("Quote submitted successfully!")}
              >
                Get My Quote
              </Button>


            </Box>
          </Box>
          <Box sx={MUIStyle.PricingQuoteCol}>
            <Box component={"img"} src={SITECONT} alt="Quote" sx={MUIStyle.PricingQuoteFormImage} />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
