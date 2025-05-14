"use client";
import { Box, MenuItem, Select, Container, TextField, Typography, Button } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useEffect, useRef, useState } from "react";
import styles from "./PricingQuote.module.css";
import { SITECONT } from "@/values/Constants/ImageConstants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import { countryList } from "@/values/Constants/CountryCodes";
import { commonColor } from "@/values/Colors/CommonColor";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { PRICING_QUOTATION } from "@/values/Constants/Urls";

export default function PricingQuote() {

  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectName: "",
    country: "",
    countryCode: "+91",
    city: "",
    floors: "",
    area: "",
    file: null,
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    mobile: "",
    projectName: "",
    country: "",
    countryCode: "",
    city: "",
    floors: "",
    area: "",
    file: "",
    message: "",
  });

  // Google Recaptcha v2
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        file: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        file: null,
      }));
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "mobile") {
      const regex = /^[0-9]*$/;
      if (!(regex.test(value))) {
        return;
      }

      if (value.length > 13) {
        value = value.slice(0, 13);
      }
    }

    if (name === "message") {
      if (value.length >= 1000) {
        value = value.slice(0, 1000);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    resetError();
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      projectName: "",
      country: "",
      countryCode: "+91",
      city: "",
      floors: "",
      area: "",
      file: null,
      message: "",
    });

    resetError();
  };

  const resetError = () => {
    setError({
      name: "",
      email: "",
      mobile: "",
      projectName: "",
      country: "",
      countryCode: "",
      city: "",
      floors: "",
      area: "",
      file: "",
      message: "",
    });

  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.name) {
      setError((prevError) => ({
        ...prevError,
        name: "Name is required",
      }));
      isValid = false;
    } else if (!formData.email) {
      setError((prevError) => ({
        ...prevError,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Email is invalid",
      }));
      isValid = false;
    } else if (!formData.mobile) {
      setError((prevError) => ({
        ...prevError,
        mobile: "Mobile number is required",
      }));
      isValid = false;
    } else if (formData.mobile.length < 5 || formData.mobile.length > 17) {
      setError((prevError) => ({
        ...prevError,
        mobile: "Mobile number must be between 5 and 17 digits",
      }));
      isValid = false;
    } else if (!formData.projectName) {
      setError((prevError) => ({
        ...prevError,
        projectName: "Project name is required",
      }));
      isValid = false;
    } else if (!formData.country) {
      setError((prevError) => ({
        ...prevError,
        country: "Country is required",
      }));
      isValid = false;
    } else if (!formData.city) {
      setError((prevError) => ({
        ...prevError,
        city: "City is required",
      }));
      isValid = false;
    } else if (!formData.floors) {
      setError((prevError) => ({
        ...prevError,
        floors: "Number of floors is required",
      }));
      isValid = false;
    } else if (!formData.area) {
      setError((prevError) => ({
        ...prevError,
        area: "Area of the floor plan is required",
      }));
      isValid = false;
    } else {
      resetError();

      isValid = true;
    }

    return isValid;
  };

  const handleSubmit = async () => {

    const isFormValidated = validateForm();

    if (!isFormValidated) {
      return;
    }

    // Uncomment in production
    if (!recaptchaToken) {
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("work_email", formData.email);
    formDataToSubmit.append("country_code", formData.countryCode);
    formDataToSubmit.append("mobile_number", formData.mobile);
    formDataToSubmit.append("project_name", formData.projectName);
    formDataToSubmit.append("country", formData.country);
    formDataToSubmit.append("city_or_location", formData.city);
    formDataToSubmit.append("floor_to_monitor", formData.floors);
    formDataToSubmit.append("floor_area", formData.area);
    formData.file && formDataToSubmit.append("attach_floorplan", formData.file);
    formData.message && formDataToSubmit.append("message", formData.message);

    const response = await fetch(PRICING_QUOTATION, {
      method: "POST",
      body: formDataToSubmit,
    });

    // console.log("response", response);            

    const data = await response.json();

    // console.log("data", data);

    if (data.success) {
      Swal.fire({
        title: "Quote Request",
        text: "Your quote request has been submitted successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });

      resetFormData();
      recaptchaRef.current.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: 'Something went wrong. Please try again later.',
        icon: "error",
        showConfirmButton: true,
      });
    }

  }

  const handleRecaptchaChange = (token) => {

    if (token) {
      setRecaptchaToken(token);
    }
  };

  const handleRecaptchaExpired = () => {

    setRecaptchaToken("");
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
        <Box sx={MUIStyle.PricingQuoteFormGrid} id="quoteForm">
          <Box sx={MUIStyle.PricingQuoteFormCol}>
            <Box sx={MUIStyle.PricingQuoteFormOuter}>
              <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Your Name <span>*</span>
                </Typography>
                <TextField
                  id="name"
                  placeholder="Enter your name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!error.name}
                  helperText={error.name}
                />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Work Email <span>*</span>
                </Typography>
                <TextField
                  id="work-email"
                  placeholder="Enter work email"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!error.email}
                  helperText={error.email}
                />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Mobile Number <span>*</span>
                </Typography>
                <Box sx={MUIStyle.PricingQuoteInputFlex}>
                  {/* country code dropdown with flag */}
                  <Select
                    className={styles.selectCountry}
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    sx={MUIStyle.CountryCodeDropdown}
                    displayEmpty
                    renderValue={(selected) => {
                      const selectedCountry = countryList.find((country) => country.value === selected);
                      return (
                        <Box
                          component="img"
                          src={selectedCountry ? selectedCountry.flagIcon : ""}
                          alt={selectedCountry ? selectedCountry.label : ""}
                          sx={{ width: 25, height: 15, }}
                        />
                      );
                    }}
                    IconComponent={ExpandMoreIcon} // Use a custom arrow icon
                  >
                    {countryList.map((country, index) => (
                      <MenuItem key={index} value={country.value}>
                        <Box
                          component="img"
                          src={country.flagIcon}
                          alt={country.label}
                          sx={{ width: 25, height: 15, }}
                        />
                        <Typography variant="body1" sx={MUIStyle.CountryCodeText}>
                          {country.value}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>

                  <TextField
                    id="mobile-number"
                    placeholder="Enter mobile number"
                    variant="outlined"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    error={!!error.mobile}
                    helperText={error.mobile}
                  />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Project Name <span>*</span>
                </Typography>
                <TextField
                  id="project-name"
                  placeholder="Enter project name"
                  variant="outlined"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  error={!!error.projectName}
                  helperText={error.projectName}
                />
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItemRow}>
                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Country <span>*</span>
                  </Typography>
                  <TextField
                    id="country"
                    placeholder="Enter country name "
                    variant="outlined"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    error={!!error.country}
                    helperText={error.country}
                  />
                </Box>
                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    City / Location <span>*</span>
                  </Typography>
                  <TextField
                    id="city"
                    placeholder="Enter city name"
                    variant="outlined"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={!!error.city}
                    helperText={error.city}
                  />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItemRow}>
                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Number of Floors to Monitor <span>*</span>
                  </Typography>
                  <TextField
                    id="floors"
                    placeholder="Enter number of floors"
                    variant="outlined"
                    name="floors"
                    value={formData.floors}
                    onChange={handleChange}
                    error={!!error.floors}
                    helperText={error.floors}
                  />
                </Box>
                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                  <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                    Area of the Floorplan <span>*</span>
                  </Typography>
                  <TextField
                    id="area"
                    placeholder="Enter area of the floorplan"
                    variant="outlined"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    error={!!error.area}
                    helperText={error.area}
                  />
                </Box>
              </Box>
              <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Attach Typical Floorplan
                </Typography>
                <Box sx={MUIStyle.PricingQuoteInputFile}>
                  <input type="file"
                    onChange={handleFileChange}
                    id="floorplan"
                    accept=".jpg, .jpeg, .pdf"
                  />
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
                  {formData.file && (
                    <Icon
                      icon="solar:check-circle-bold"
                      style={{
                        color: commonColor.green,
                        fontSize: "30px",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                  {/* <Typography variant="body1" sx={MUIStyle.PricingQuoteInputFileName}>
                    {fileName || ""}
                  </Typography> */}
                </Box>
                <Typography variant="body1" sx={MUIStyle.FormShortText}>
                  * Attach the Typical Floorplan to Get Accurate Pricing. Allowed JPG, JPEG or PDF file only.
                </Typography>
              </Box>

              <Box sx={MUIStyle.PricingQuoteInputItemMulti} className="quoteFormInput">
                <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                  Message
                </Typography>
                <TextField
                  id="message"
                  placeholder="Please provide any additional information or requirements you have for your project."
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!error.message}
                  helperText={error.message}
                  multiline
                  rows={2}
                />
              </Box>

              <ReCAPTCHA
                sitekey={process.env.GOOGLE_SITE_KEY || ""}
                ref={recaptchaRef}
                onChange={handleRecaptchaChange}
                onExpired={handleRecaptchaExpired}
                style={{ marginBottom: '10px' }}
              />

              {/* button  */}
              <Button
                variant="contained"
                sx={[MUIStyle.PricingQuoteInputBtn, {
                  border: recaptchaToken ? "2px solid" : "none",
                }]}
                disabled={!recaptchaToken}
                onClick={handleSubmit}
              >
                Get My Quote
              </Button>


            </Box>
          </Box>
          <Box sx={MUIStyle.PricingQuoteCol}>
            <Box component={"img"} src={SITECONT} alt="Quote" sx={MUIStyle.PricingQuoteFormImage} />
          </Box>

          <Box sx={MUIStyle.BannerSVGContainer}>
            <SiteViewSVG
              fillOpacity={1}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
