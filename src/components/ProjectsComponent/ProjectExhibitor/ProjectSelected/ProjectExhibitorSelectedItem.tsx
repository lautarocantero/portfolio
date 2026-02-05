import { Box } from "@mui/material";
import type { ProjectSelectedProps } from "../../../../typings/reactComponents";
import CarouselComponent from "../../../shared/CarouselComponent";
import ProjectDescription from "./ProjectDescription";
import ProjectFooterComponent from "./ProjectFooter";
import ProjectDescriptionTitleComponent from "./ProjectDescriptionTitle";


const ProjectExhibitorSelectedItem = ({selectedItem}: ProjectSelectedProps ):React.ReactNode => {
    const { gallery_urls, short_description, title } = selectedItem;

    return(
        <Box
            component={'div'}
            sx={() => ({
                display: 'flex',
                flexDirection: { xs: 'column'},
                width: '100%',
            })}
        >
            <CarouselComponent gallery_urls={gallery_urls} bigScreen />
            <ProjectDescriptionTitleComponent title={title}/>
            <ProjectDescription short_description={short_description} />
            <ProjectFooterComponent />
        </Box>
    )
};
        
export default ProjectExhibitorSelectedItem;