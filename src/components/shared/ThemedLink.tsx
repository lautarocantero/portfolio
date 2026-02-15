import { Box, type Theme } from "@mui/material";
import { Link } from "react-scroll";
import type { ThemedLinkInterface } from "../../typings/reactComponents";
import { useTranslation } from "react-i18next";

const ThemedLink = ({ to, children }: ThemedLinkInterface ) => {
  const { t } = useTranslation();

  return (
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
      display: 'flex',  // si algun estilo se rompe quitar esto
      alignItems: 'center',   // si algun estilo se rompe quitar esto
      userSelect: "none",
      "&:hover": {
        color: theme.custom?.white,
      },
    })}
  >
    {typeof children === "string" ? t(children) : children}
  </Box>
);
} 

export default ThemedLink;
