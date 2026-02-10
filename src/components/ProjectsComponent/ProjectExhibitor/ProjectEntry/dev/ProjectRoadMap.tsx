import { Box } from "@mui/material";
import React from "react";
import type { ProjectLongDescriptionDevProps } from "../../../../../typings/reactComponents";
import DevelopmentCard from "./ProjectDevCard";


const ProjectRoadMap = ({ long_description }: ProjectLongDescriptionDevProps ) : React.ReactNode => {

  
  return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {long_description.roadmap?.map((development, index) => (
          <DevelopmentCard development={development} index={index}/>
        ))}
      </Box>
  );
};

export default ProjectRoadMap;
