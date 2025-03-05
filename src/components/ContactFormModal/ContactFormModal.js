import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
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
        message: "",
    });
    const [error, setError] = useState({
        name: '',
        country: '',
        contactNumber: '',
        email: '',
        message: '',
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Google Recaptcha v2
    const [recaptchaToken, setRecaptchaToken] = useState("");


    const resetFormData = () => {
        setFormData({
            name: "",
            country: "",
            countryCode: "",
            contactNumber: "",
            email: "",
            message: "",
        });
    }

    const resetError = () => {
        setError({
            name: '',
            country: '',
            contactNumber: '',
            email: '',
            message: '',
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
                country: value.label,
                countryCode: value.value,
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

        if (!formData.name) {
            setError({
                ...error,
                name: "Please enter your name",
            });
            return;
        } else if (!formData.country) {
            setError({
                ...error,
                country: "Please select your country",
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
        } else {
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
            newFormData.append("message", formData.message);

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
                                    <CustomInput
                                        label="Name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onTextChange={(value) => handleTextChange("name", value)}
                                        error={error?.name !== ''}
                                        helperText={error?.name || ''}
                                        labelContainerStyle={{
                                            background: 'linear-gradient(#030303, #121212)',
                                        }}
                                    />
                                    <CustomInput
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
                                            background: 'linear-gradient(#040404, #121212)',
                                        }}
                                    />
                                    <CustomInput
                                        label="Contact Number"
                                        placeholder="Enter your contact number"
                                        type="number"
                                        value={formData.contactNumber}
                                        onTextChange={(value) => handleTextChange("contactNumber", value)}
                                        error={error?.contactNumber !== ''}
                                        helperText={error?.contactNumber || ''}
                                        labelContainerStyle={{
                                            background: 'linear-gradient(#030303, #121212)',
                                        }}
                                    />
                                    <CustomInput
                                        label="Email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onTextChange={(value) => handleTextChange("email", value)}
                                        error={error?.email !== ''}
                                        helperText={error?.email || ''}
                                        labelContainerStyle={{
                                            background: 'linear-gradient(#050505, #121212)',
                                        }}
                                    />
                                    <CustomInput
                                        label="Please Add More"
                                        placeholder="Enter your message"
                                        multiline
                                        value={formData.message}
                                        onTextChange={(value) => handleTextChange("message", value)}
                                        error={error?.message !== ''}
                                        helperText={error?.message || ''}
                                        labelContainerStyle={{
                                            background: 'linear-gradient(#030303, #121212)',
                                        }}
                                    />
                                    <ReCAPTCHA
                                        sitekey={process.env.GOOGLE_SITE_KEY || ""}
                                        ref={recaptchaRef}
                                        onChange={handleRecaptchaChange}
                                        onExpired={handleRecaptchaExpired}
                                        style={{ marginBottom: '10px' }}
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
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}