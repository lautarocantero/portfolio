import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { getStackList } from "../../helpers/Stack/getStackList";
import StackExhibitorComponent from "./StackExhibitor";
import type { StackSkillType } from "../../typings/types";
import StackButtonComponent from "./StackButton/StackButton";
import { useState } from "react";

const appliedStacks: string[] = [
    'HTML5','CSS3','JavaScript','TypeScript',
    'Bootstrap', 'Sass', "Tailwind", 'C#', 'React','Redux',
    'Node.js','Firebase','MongoDB', 'PHP', 'Jest','Git',
    'GitKraken','Figma',
    'Linux'
]

const StackTab = ():React.ReactNode => {
    const { t } = useTranslation();
    const stacks : StackSkillType[]  = getStackList(appliedStacks);
    const [isDetailedList, setIsDetailedList] = useState<boolean>(false);

    return(
        <Element name={t("nav.skills")}>
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1em',
                    }}
                >
                    <Typography
                        component={'h2'}
                        sx={(theme: Theme) => ({
                            color: theme?.custom?.fontColor,
                            textAlign: 'center',
                            fontSize: theme?.typography?.h2?.fontSize,
                        })}
                    >
                        {t("skills.title")}
                    </Typography>
                    <StackButtonComponent setIsDetailedList={setIsDetailedList} isDetailedList={isDetailedList}/>
                </Box>
                <StackExhibitorComponent stacks={stacks} isDetailedList={isDetailedList}/>
            </Box>
        </Element>
    )
};
        
export default StackTab;