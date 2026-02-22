import { Box } from "@mui/material";
import { GetAboutLinks } from "../../helpers/About/getAboutLinks";
import type { AboutLinkInterface } from "../../typings/types";
import AboutLinkComponent from "./AboutLink";

const AboutLinksButtonsExhibitorComponent = (): React.ReactNode => {
  const aboutLinks: AboutLinkInterface[] = GetAboutLinks();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "2em auto 0",
        width: 'fit-content',
        overflow: 'hidden',
        borderRadius: '0.5em',
      }}
    >
      {aboutLinks?.map((link: AboutLinkInterface) => (
        <AboutLinkComponent link={link} key={link.text} />
      ))}
    </Box>
  );
};

export default AboutLinksButtonsExhibitorComponent;