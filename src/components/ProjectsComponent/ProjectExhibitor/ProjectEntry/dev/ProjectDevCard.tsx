import React from "react";
import { Box, Paper, Typography, useTheme} from "@mui/material";
import type { RoadmapStepType } from "../../../../../typings/types";
import CarouselComponent from "../../../../shared/CarouselComponent";
import { useTranslation } from "react-i18next";

interface DevelopmentCardProps {
  development: RoadmapStepType;
  index: number;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ development, index }) => {
  const theme = useTheme();
  const { t } = useTranslation();

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
          {t(development.title)}
        </Typography>
        <Typography variant="body2" sx={{p: 3 }}>{t(development.desc)}</Typography>
        <Box
            sx={{
                width: "100%",
                margin: { xs: '0 auto', md: '0 auto 1em'}
            }}
        >
            <CarouselComponent gallery_urls={development?.gallery_urls} />
        </Box>
        
      </Paper>
    </Box>
  );
};

export default DevelopmentCard;
