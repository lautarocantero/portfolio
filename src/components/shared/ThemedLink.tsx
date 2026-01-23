import { Box, type Theme } from "@mui/material";
import { Link } from "react-scroll";
import type { ThemedLinkInterface } from "../../typings/reactComponents";

const ThemedLink = ({ to, children }: ThemedLinkInterface ) => (
  <Box
    component={Link}
    to={to}
    smooth={true}
    duration={500}
    sx={(theme: Theme) => ({
      color: theme.palette.primary.main,
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: 100,
      transition: "color 0.3s ease",
      "&:hover": {
        color: theme.custom?.white,
      },
    })}
  >
    {children}
  </Box>
);

export default ThemedLink;
