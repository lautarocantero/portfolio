import { Box } from "@mui/material";
import type { ProjectBenefitsProps } from "../../../../../typings/reactComponents";
import ProjectSelectedBenefitCard from "./ProjectSelectedBenefitCard";
import React, { useMemo } from "react";


const ProjectBenefitsComponent = ({benefits}: ProjectBenefitsProps ):React.ReactNode => {

    const benefitCards = useMemo(() => 
      benefits.map((benefit, index) => (
        <ProjectSelectedBenefitCard key={index} benefit={benefit} />
      ))
    ,[benefits]);

    return(
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {benefitCards}
      </Box>
    )
};
        
export default React.memo(ProjectBenefitsComponent);