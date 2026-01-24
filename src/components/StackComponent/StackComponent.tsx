import { Box, Typography } from "@mui/material";
import type { Stack } from "../../typings/types";
import type { Theme } from "@mui/material/styles";
import StackExhibitorComponent from "./StackExhibitor";
import { getStackList } from "../../helpers/Stack/getStackList";
import { Element } from "react-scroll";

const StackComponent = ():React.ReactNode => {
    const appliedStacks: string[] = [
        'HTML5','CSS3','JavaScript','TypeScript',
        'Bootstrap', 'Sass', "Tailwind", 'C#', 'React','Redux',
        'Node.js','Firebase','MongoDB', 'PHP', 'Jest','Git',
        'GitKraken','Figma',
        'Linux'
    ]
    const stacks : Stack[]  = getStackList(appliedStacks);

    return(
        <Element name="Habilidades">
            <Box
                component={'div'}
                sx={() => ({
                    borderRadius: { xs: 'none', sm: '1em' },
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                    margin: '5em auto',
                    width: { xs: '100%', sm: '95%'},
                })}
            >
                <Typography
                    component={'h2'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        textAlign: 'center',
                        fontSize: theme?.typography?.h2?.fontSize,
                    })}
                >
                    Habilidades
                </Typography>
                <StackExhibitorComponent stacks={stacks} />
            </Box>
        </Element>
    )
};
        
export default StackComponent;