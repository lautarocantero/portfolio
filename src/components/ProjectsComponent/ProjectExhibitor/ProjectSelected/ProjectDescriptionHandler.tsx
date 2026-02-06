import { useCallback, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProjectDescriptionClientComponent from "./ProjectDescriptionClient";
import ProjectDescriptionDevComponent from "./dev/ProjectDescriptionDev";
import { handleNext, handlePrev } from "../../../../helpers/Experience/handleExperienceNavigation";
import { Box, IconButton } from "@mui/material";
import type { ProjectDescriptionHandlerProps } from "../../../../typings/reactComponents";


const ProjectDescriptionHandlerComponent = ({stack}: ProjectDescriptionHandlerProps ):React.ReactNode => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const components: React.ReactNode[] = [
        <ProjectDescriptionClientComponent/>,
        <ProjectDescriptionDevComponent stack={stack} />,
    ]

    const memoizedHandlePrev = useCallback( 
      () => handlePrev({ setCurrentIndex, components }
    )
    ,[setCurrentIndex, components]); 
  
    const memoizedHandleNext = useCallback( 
        () => handleNext({ setCurrentIndex, components })
    ,[setCurrentIndex, components]);

    return (
        <Box
            sx={{
              alignItems: "center",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 auto",
              position: "relative",
            }}
        >
            {components[currentIndex]}
             <IconButton
               onClick={memoizedHandlePrev}
               sx={() => ({
                 color: "white",
                 display: currentIndex === 0 ? "none" : "block",
                 left: { xs: "-0.3em", sm: "1em", md: '2em' },
                 position: "absolute",
                 top: "1.2em",
                 transform: "translateY(-50%)",
               })}
             >
               <ArrowBackIosNewIcon />
             </IconButton>
             <IconButton
               onClick={memoizedHandleNext}
               sx={() => ({
                 color: "white",
                 display: currentIndex === 0 ? "block" : "none",
                 position: "absolute",
                 right: { xs: "-0.3em", sm: "1em", md: '2em' },
                 top: "1.2em",
                 transform: "translateY(-50%)",
               })}
             >
               <ArrowForwardIosIcon />
             </IconButton>
           </Box>
    )
};
        
export default ProjectDescriptionHandlerComponent;