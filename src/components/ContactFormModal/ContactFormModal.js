import { Backdrop, Box, Button, Modal, TextField, Typography } from "@mui/material";
// import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { MUIStyle } from "./MUIStyle";
import { CHECK, CLOSEICON, CROSS } from "@/values/Constants/ImageConstants";
import CustomInput from "./CustomInput";
import { useRef, useState } from "react";
import { countryList } from "@/values/Constants/CountryCodes";
import { CONTACT_US } from "@/values/Constants/Urls";
import ReCAPTCHA from "react-google-recaptcha";

const CustomBackdrop = (props) => (
    <Backdrop
        {...props}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Change the backdrop color here
        }}
    />
);

export default function ContactFormModal({
    isModalOpen = false,
    setIsModalOpen,
    theme = "light",
}) {

    const recaptchaRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        countryCode: "",
        contactNumber: "",
        email: "",
        comment: "",
        companyName: '',
        city: ''
    });
    const [error, setError] = useState({
        name: '',
        country: '',
        contactNumber: '',
        email: '',
        comment: '',
        companyName: '',
        city: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Google Recaptcha v2
    const [recaptchaToken, setRecaptchaToken] = useState("");

    // const recaptchaToken= "ahfjkdshf"

    const resetFormData = () => {
        setFormData({
            name: "",
            country: "",
            countryCode: "",
            contactNumber: "",
            email: "",
            comment: "",
            companyName: '',
            city: '',
        });
    }

    const resetError = () => {
        setError({
            name: '',
            country: '',
            contactNumber: '',
            email: '',
            comment: '',
            companyName: '',
            city: '',
        });
    }

    const handleClose = () => {
        setIsModalOpen && setIsModalOpen(false);

        resetFormData();

        resetError();

        setTimeout(() => {
            setIsSuccess(false);
            setIsError(false);
        }, 500);
    }

    const handleTextChange = (key, value) => {
        // console.log(key, value);

        if (key === "country") {
            setFormData({
                ...formData,
                country: value,
                // countryCode: value.value,
            });

            resetError();

            return;
        }

        setFormData({
            ...formData,
            [key]: value,
        });

        resetError();
    }

    const handleFormSubmit = () => {

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // console.log("formData", formData);
        if (!formData.name) {
            setError({
                ...error,
                name: "Please enter your name",
            });
            return;
        } else if (!formData.country) {
            setError({
                ...error,
                country: "Please Enter your country",
            });
            return;
        } else if (!formData.email) {
            setError({
                ...error,
                email: "Please enter your email",
            });
            return;
        } else if (!emailPattern.test(formData.email)) {
            setError({
                ...error,
                email: "Please enter a valid email",
            });
            return;
        } else if (!formData.contactNumber) {
            setError({
                ...error,
                contactNumber: "Please enter your contact number",
            });
            return;
        } else if (!formData.city) {
            setError({
                ...error,
                city: "Please enter your city",
            });
            return;
        }
        else {
            console.log("Form Submitted", formData);

            submitForm();
        }

    }

    const submitForm = async () => {
        try {

            if (!recaptchaToken) {
                return;
            }

            const newFormData = new FormData();

            newFormData.append("name", formData.name);
            newFormData.append("country", formData.country);
            newFormData.append("contact_number", formData.countryCode + formData.contactNumber);
            newFormData.append("email", formData.email);
            newFormData.append("comment", formData.comment);
            newFormData.append("company_name", formData.companyName);
            newFormData.append("city", formData.city);

            const response = await fetch(CONTACT_US, {
                method: "POST",
                body: newFormData,
            });

            // console.log("response", response);            

            const data = await response.json();

            // console.log("data", data);

            if (data.success) {
                setIsSuccess(true);
            } else {
                setIsError(true);
            }

        } catch (error) {
            // console.log("error", error);
            setIsError(true);
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
        <Modal
            open={isModalOpen}
            onClose={handleClose}
            closeAfterTransition
            // slots={{ backdrop: Backdrop }}
            slots={{ backdrop: CustomBackdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isModalOpen}>
                <Box
                    id="contactFormModal"
                    sx={[MUIStyle.modalOuterBox, {
                        backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)",
                    }]}
                >
                    <Box sx={MUIStyle.modalBox}>
                        <Box
                            component={'img'}
                            src={CLOSEICON}
                            alt="close"
                            sx={MUIStyle.closeIcon}
                            onClick={handleClose}
                        />
                        <Box sx={MUIStyle.modalContent}>
                            {isSuccess ? (
                                <Box sx={MUIStyle.successMessage}>
                                    <Box
                                        component={'img'}
                                        src={CHECK}
                                        alt="check"
                                        sx={MUIStyle.successMessageIcon}
                                    />
                                    <Typography
                                        sx={MUIStyle.successMessageText}
                                    >
                                        Thank you
                                    </Typography>
                                    <Typography
                                        sx={MUIStyle.successMessageText}
                                    >
                                        Our team will contact you soon
                                    </Typography>
                                </Box>) : isError ? (<Box sx={MUIStyle.successMessage}>
                                    <Box
                                        component={'img'}
                                        src={CROSS}
                                        alt="check"
                                        sx={MUIStyle.successMessageIcon}
                                    />
                                    <Typography
                                        sx={MUIStyle.successMessageText}
                                    >
                                        Uh oh! Something went wrong
                                    </Typography>
                                    <Typography
                                        sx={MUIStyle.successMessageText}
                                    >
                                        Please try again later
                                    </Typography>
                                </Box>) : (<>
                                    <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: '2.8rem', sm: '3.2rem', md: '4rem', lg: '4rem', xl: '4rem' }, mb: 1, color: '#222' }}>
                                        Let&apos;s Connect
                                    </Typography>
                                    <Typography sx={{
                                        color: '#555', mb: 3, fontSize: {
                                            xs: '16px', md: '20px'
                                        }
                                    }}>
                                        Join us to discover sitepace and enhance your construction endeavors!
                                    </Typography>
                                    {/* <CustomInput
                                        label="Name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onTextChange={(value) => handleTextChange("name", value)}
                                        error={error?.name !== ''}
                                        helperText={error?.name || ''}
                                        labelContainerStyle={{
                                            background: 'white',
                                        }}
                                    /> */}
                                    <Box sx={MUIStyle.PricingQuoteInputContainer}>
                                        <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                            <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                Name *
                                            </Typography>
                                            <TextField
                                                id="name"
                                                placeholder="Enter your name"
                                                variant="outlined"
                                                name="name"
                                                value={formData.name}
                                                onChange={(e) => {
                                                    handleTextChange("name", e.target.value);
                                                }}
                                                error={!!error.name}
                                                helperText={error.name}
                                            />
                                        </Box>
                                        {/* <CustomInput
                                        label="Country"
                                        placeholder="Select your country"
                                        value={formData.country}
                                        onTextChange={({ label, value }) => {
                                            handleTextChange("country", { label, value });
                                        }}
                                        inputType="select"
                                        options={countryList}
                                        error={error?.country !== ''}
                                        helperText={error?.country || ''}
                                        labelContainerStyle={{
                                            background: 'white',
                                        }}
                                    /> */}
                                        <Box
                                            sx={{
                                                display: { xs: "block", md: "flex" },
                                                gap: { xs: 0, md: 2 },
                                                width: "100%",
                                            }}
                                        >
                                            <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
                                                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                                    <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                        Number *
                                                    </Typography>
                                                    <TextField
                                                        id="contactNumber"
                                                        placeholder="Enter your Number"
                                                        variant="outlined"
                                                        name="contactNumber"
                                                        type="text"
                                                        value={formData.contactNumber}
                                                        onChange={(e) => {
                                                            handleTextChange("contactNumber", e.target.value);
                                                        }}
                                                        error={!!error.contactNumber}
                                                        helperText={error.contactNumber}
                                                    />
                                                </Box>
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                                    <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                        Email *
                                                    </Typography>
                                                    <TextField
                                                        id="email"
                                                        placeholder="Enter your email"
                                                        variant="outlined"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => {
                                                            handleTextChange("email", e.target.value);
                                                        }}
                                                        error={!!error.email}
                                                        helperText={error.email}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                            <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                Company Name
                                            </Typography>
                                            <TextField
                                                id="companyName"
                                                placeholder="Enter your Company Name"
                                                variant="outlined"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={(e) => {
                                                    handleTextChange("companyName", e.target.value);
                                                }}
                                                error={!!error.companyName}
                                                helperText={error.companyName}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: { xs: "block", md: "flex" },
                                                gap: { xs: 0, md: 2 },
                                                width: "100%",
                                            }}
                                        >
                                            <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
                                                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                                    <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                        Country *
                                                    </Typography>
                                                    <TextField
                                                        id="country"
                                                        placeholder="Enter your country name"
                                                        variant="outlined"
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={(e) => {
                                                            handleTextChange("country", e.target.value);
                                                        }}
                                                        error={!!error.country}
                                                        helperText={error.country}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={MUIStyle.PricingQuoteInputItem} className="quoteFormInput">
                                                    <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                        City *
                                                    </Typography>
                                                    <TextField
                                                        id="city"
                                                        placeholder="Enter your city name"
                                                        variant="outlined"
                                                        name="city"
                                                        type="city"
                                                        value={formData.city}
                                                        onChange={(e) => {
                                                            handleTextChange("city", e.target.value);
                                                        }}
                                                        error={!!error.city}
                                                        helperText={error.city}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        {/* <CustomInput
                                        label="Please Add More"
                                        placeholder="Enter your message"
                                        multiline
                                        value={formData.message}
                                        onTextChange={(value) => handleTextChange("message", value)}
                                        error={error?.message !== ''}
                                        helperText={error?.message || ''}
                                        labelContainerStyle={{
                                            background: 'white',
                                        }}
                                    /> */}
                                        <Box sx={MUIStyle.PricingQuoteInputItemMulti} className="quoteFormInput">
                                            <Typography variant="h5" sx={MUIStyle.PricingQuoteInputLabel}>
                                                Comment
                                            </Typography>
                                            <TextField
                                                id="comment"
                                                placeholder="write your comment"
                                                variant="outlined"
                                                name="comment"
                                                multiline
                                                rows={1} // Reduced height from 4 to 2
                                                value={formData.comment}
                                                onChange={(e) => {
                                                    handleTextChange("comment", e.target.value);
                                                }}
                                                error={!!error.comment}
                                                helperText={error.comment}
                                                sx={MUIStyle.commentBox}
                                            />
                                        </Box>
                                    </Box>
                                    <ReCAPTCHA
                                        sitekey={process.env.GOOGLE_SITE_KEY || ""}
                                        ref={recaptchaRef}
                                        onChange={handleRecaptchaChange}
                                        onExpired={handleRecaptchaExpired}
                                        style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}
                                    />
                                    <Button
                                        sx={MUIStyle.letsTalkButton}
                                        disabled={!recaptchaToken}
                                        onClick={handleFormSubmit}
                                    >
                                        Let&apos;s Connect
                                    </Button>
                                </>)}
                        </Box>
                        <Box sx={MUIStyle.imageSection}>
                            <Box component="img" src="/images/site-view-ai-contact-image.png" alt="SiteView" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            {/* Add logo if needed */}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}