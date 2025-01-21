import { Backdrop, Box, Button, Modal } from "@mui/material";
// import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { MUIStyle } from "./MUIStyle";
import { CLOSEICON } from "@/values/Constants/ImageConstants";
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
    }

    const handleTextChange = (key, value) => {
        // console.log(key, value);
        
        setFormData({
            ...formData,
            [key]: value,
        });
    }

    const handleFormSubmit = () => {
        console.log("Form Data: ", formData);
    }

    useEffect(() => {
        console.log("Form Data: ", formData);
    }, [formData]);
        


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
                                onTextChange={({label, value}) => {
                                    handleTextChange("country", label);
                                    handleTextChange("countryCode", value);
                                }}
                                inputType="select"
                                options={countryList}
                            />
                            <CustomInput
                                label="Contact Number"
                                placeholder="Enter your contact number"
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
                                Let's Connect
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}