import React from "react";
import { Global, css } from "frontity";
import kelsonBoldWOFF from "../../fonts/KelsonSans-Bold.woff";
import kelsonBoldTTF from "../../fonts/KelsonSans-Bold.ttf";
// Marc's Added Font Families :D 
import openSansRegular from "../../fonts/OpenSans-Regular.ttf";
import openSansItalic from "../../fonts/OpenSans-Italic.ttf";
import openSansBold from "../../fonts/OpenSans-Bold.ttf";
import EnzosTitle from "../../fonts/Gaegu-Bold.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "EnzosWorld";
        src: 
          url(${EnzosTitle}) format("woff"),
          url(${EnzosTitle}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }

      @font-face {
        font-family: "EnzosBodyText";
        src: 
          url(${openSansRegular}) format("woff"),
          url(${openSansRegular}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }

      @font-face {
        font-family: "EnzosBoldBodyText";
        src: 
          url(${openSansBold}) format("woff"),
          url(${openSansBold}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
