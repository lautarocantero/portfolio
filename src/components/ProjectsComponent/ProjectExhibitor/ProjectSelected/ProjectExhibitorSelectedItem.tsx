import { Box } from "@mui/material";
import type { ProjectSelectedProps } from "../../../../typings/reactComponents";
import CarouselComponent from "../../../shared/CarouselComponent";
import ProjectDescription from "./ProjectDescription";


const ProjectExhibitorSelectedItem = ({selectedItem}: ProjectSelectedProps ):React.ReactNode => {
    const { gallery_urls, short_description,long_description, stack } = selectedItem;

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
            <ProjectDescription short_description={short_description} long_description={long_description} stack={stack}/>
        </Box>
    )
};
        
export default ProjectExhibitorSelectedItem;