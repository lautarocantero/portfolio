import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { getStackList } from "../../helpers/Stack/getStackList";
import type { StackSkillType } from "../../typings/types";
import StackButtonComponent from "./StackButton/StackButton";
import StackExhibitorComponent from "./StackExhibitor";

const appliedStacks: string[] = [
    'HTML5','CSS3','JavaScript','TypeScript',
    'Bootstrap', 'Sass', "Tailwind", 'C#', 'React','Redux',
    'Node.js','Firebase','MongoDB', 'PHP', 'Jest','Git',
    'GitKraken','Figma','Linux'
]

const StackTab = ():React.ReactNode => {
    const { t } = useTranslation();
    const [isDetailedList, setIsDetailedList] = useState<boolean>(false);

    const stacks : StackSkillType[]  = useMemo(() => 
    getStackList(appliedStacks)
    ,[appliedStacks]);
    

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
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1em',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        component={'h2'}
                        sx={(theme: Theme) => ({
                            color: theme?.custom?.fontColor,
                            fontSize: theme?.typography?.h2?.fontSize,
                            textAlign: 'center',
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
        
export default React.memo(StackTab);