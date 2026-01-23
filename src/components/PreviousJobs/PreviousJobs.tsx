import { Box, Typography, type Theme } from "@mui/material";
import PreviousJobsExhibitorComponent from "./PreviousJobsExhibitor";
import React from "react";


const PreviousJobs = ():React.ReactNode => {
    return(
        <Box
            sx={(theme: Theme) => ({
              backgroundColor: theme?.custom?.backgroundLigth,
              borderRadius: "25px",
              height: { xs: "auto" },
              margin: "1em auto 0",
              width: { xs: "95%", sm: "60%"},
              display: "flex",
              flexDirection: "column",
              position: "relative",
            })}
        >
            <Typography
                component={'h3'}
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    textAlign: 'center',
                    fontSize: { 
                        xs: theme?.typography?.body2?.fontSize, 
                        sm: theme?.typography?.h6?.fontSize,
                        md: theme?.typography?.h4?.fontSize,
                    },
                    mt: '1em',
                })}
            >
                Empresas para las que he 
                <Typography 
                    component={'span'} 
                    sx={(theme: Theme) => ({ 
                        color: theme?.palette?.primary?.main,
                        fontSize: { 
                            xs: theme?.typography?.body2?.fontSize, 
                            sm: theme?.typography?.h6?.fontSize,
                            md: theme?.typography?.h4?.fontSize,
                        },
                        ml: '0.3em'
                    })}> 
                    trabajado
                </Typography>
            </Typography>     
            <PreviousJobsExhibitorComponent />
        </Box>
    )
};
        
export default React.memo(PreviousJobs);