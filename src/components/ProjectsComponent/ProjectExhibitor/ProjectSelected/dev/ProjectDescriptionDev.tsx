import { Box, Typography, type Theme } from "@mui/material";
import HowWasMadeComponent from "./HowWasMadeComponent";
import type { ProjectDescriptionDevProps } from "../../../../../typings/reactComponents";

const ProjectDescriptionDevComponent = ({ stack }: ProjectDescriptionDevProps): React.ReactNode => {
  return (
    <>
      <Typography
        component={"h3"}
        sx={(theme: Theme) => ({
          color: theme?.custom?.white,
          backgroundColor: theme?.custom?.backgroundDark,
          fontSize: theme?.typography?.h4?.fontSize,
          textAlign: "center",
          width: "100%",
          p: "0.5em 0",
        })}
      >
        ¿Cómo se hizo?
      </Typography>
        <Box
            sx={{
                width: '100%',
                padding: { xs: '1em', },
            }}
        >
            {stack.map((step) => (
              <HowWasMadeComponent 
                key={step.step} 
                title={step.step} 
                stack={step} 
              />
            ))}
        </Box>
    </>
  );
};

export default ProjectDescriptionDevComponent;
