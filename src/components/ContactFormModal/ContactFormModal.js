import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
// import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { MUIStyle } from "./MUIStyle";
import { CHECK, CLOSEICON } from "@/values/Constants/ImageConstants";
import CustomInput from "./CustomInput";
import { useEffect, useState } from "react";
import { countryList, countryNames } from "@/values/Constants/CountryCodes";

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

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        countryCode: "",
        contactNumber: "",
        email: "",
        message: "",
    });
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleClose = () => {
        setIsModalOpen && setIsModalOpen(false);

        resetFormData();

        setTimeout(() => {
            setIsSuccess(false);
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
            return;
        }

        setFormData({
            ...formData,
            [key]: value,
        });
    }

    const handleFormSubmit = () => {
        console.log("Form Data: ", formData);

        setIsSuccess(true);
    }


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
                                        Our team will get contact you soon
                                    </Typography>
                                </Box>) :
                                (<>
                                    <CustomInput
                                        label="Name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onTextChange={(value) => handleTextChange("name", value)}
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
                                    />
                                    <CustomInput
                                        label="Contact Number"
                                        placeholder="Enter your contact number"
                                        type="number"
                                        value={formData.contactNumber}
                                        onTextChange={(value) => handleTextChange("contactNumber", value)}
                                    />
                                    <CustomInput
                                        label="Email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onTextChange={(value) => handleTextChange("email", value)}
                                    />
                                    <CustomInput
                                        label="Please Add More"
                                        placeholder="Enter your message"
                                        multiline
                                        value={formData.message}
                                        onTextChange={(value) => handleTextChange("message", value)}
                                    />
                                    <Button
                                        sx={MUIStyle.letsTalkButton}
                                        onClick={handleFormSubmit}
                                    >
                                        Let`&apos;`s Connect
                                    </Button>
                                </>)}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}