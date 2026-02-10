import React from "react";
import { Box, Paper, Typography, useTheme, type Theme } from "@mui/material";
import type { BenefitCardProps } from "../../../../../typings/reactComponents";
import { useTranslation } from "react-i18next";


const ProjectSelectedBenefitCard = ({ benefit }: BenefitCardProps): React.ReactNode => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
        display: "flex",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          flexGrow: 1,
          backgroundColor: theme.palette.primary.main,
          boxShadow: `5px 5px 1px ${theme.palette.secondary.main}`,
          color: theme.custom.white,
        }}
      >
        <Box
            sx={(theme: Theme) => ({
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                pt: 1,
            })}
        >
            <Box
                component={'img'}
                src={benefit?.logo}
                sx={(theme: Theme) => ({
                    width: 'auto',
                    height: '3em',
                    p: 0.1,
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    border: 'none',
                    overflow: 'hidden',
                })}
            >

            </Box>
        </Box>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mt: 2 }}>
          {t(benefit.title)}
        </Typography>
        <Typography variant="body2" sx={(theme: Theme) => ({ textAlign: 'center', borderBottom: `0.1em dotted ${theme?.custom?.white}` })}>{t(benefit.desc)}</Typography>
      </Paper>
    </Box>
  );
};

export default ProjectSelectedBenefitCard;
