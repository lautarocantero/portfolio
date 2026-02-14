import { Box } from "@mui/material";
import React, { useMemo } from "react";
import type { ProjectLongDescriptionDevProps } from "../../../../../typings/reactComponents";
import DevelopmentCard from "./ProjectDevCard";


const ProjectRoadMap = ({ long_description }: ProjectLongDescriptionDevProps ) : React.ReactNode => {

  const roadmapMap = useMemo( () => 
    long_description.roadmap?.map((development, index) => (
      <DevelopmentCard development={development} index={index}/>
    ))
  ,[long_description])
  
  return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {roadmapMap}
      </Box>
  );
};

export default React.memo(ProjectRoadMap);
