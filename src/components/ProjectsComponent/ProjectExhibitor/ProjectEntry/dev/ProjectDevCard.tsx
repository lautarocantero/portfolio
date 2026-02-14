import React from "react";
import { Box, Paper, Typography, useTheme} from "@mui/material";
import CarouselComponent from "../../../../shared/CarouselComponent";
import { useTranslation } from "react-i18next";
import type { DevelopmentCardProps } from "../../../../../typings/reactComponents";


const DevelopmentCard = ({ development, index }: DevelopmentCardProps): React.ReactNode => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { title,desc,gallery_urls }: 
  {
    title: string;
    desc: string;
    gallery_urls: string[],
  } = development;

  return (
    <Box
      key={index}
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%" },
        display: "flex",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          backgroundColor: theme?.custom?.backgroundLigth,
          color: theme.custom.white,
          boxShadow: `5px 5px 1px ${theme.custom?.backgroundDark}`,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{p: 3, border: `1px dotted ${theme?.custom?.backgroundDark}` }}>
          {t(title)}
        </Typography>
        <Typography variant="body2" sx={{p: 3 }}>{t(desc)}</Typography>
        <Box
            sx={{
                width: "100%",
                margin: { xs: '0 auto', md: '0 auto 1em'}
            }}
        >
            <CarouselComponent gallery_urls={gallery_urls} />
        </Box>
        
      </Paper>
    </Box>
  );
};

export default React.memo(DevelopmentCard);
