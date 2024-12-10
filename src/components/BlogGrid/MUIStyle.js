import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { CONTAINSBLOG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  SingleBlogMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "132px 0",
      lg: "132px 0",
      xl: "132px 0",
    },
    background: `url(${CONTAINSBLOG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    
  },

  SingleBlogGrid : {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      lg: "1fr 1fr 1fr",
      xl: "1fr 1fr 1fr",
    },
    justifyContent:{
      xs: "center",
      sm: "center",
      md: "flex-start",
      lg: "flex-start",
      xl: "flex-start",
    },
    gap: "24px",
    width: "100%",
  },


 
};
