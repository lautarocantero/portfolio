import { Box } from "@mui/material";
import type { ProjectBenefitsProps } from "../../../../../typings/reactComponents";
import ProjectSelectedBenefitCard from "./ProjectSelectedBenefitCard";


const ProjectBenefitsComponent = ({benefits}: ProjectBenefitsProps ):React.ReactNode => {


    return(
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {benefits.map((benefit, index) => (
          <ProjectSelectedBenefitCard key={index} benefit={benefit} />
        ))}
      </Box>
    )
};
        
export default ProjectBenefitsComponent;