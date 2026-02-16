import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button, Tooltip, type Theme } from "@mui/material";
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { StackButtonProps } from "../../../typings/reactComponents";


const StackButtonComponent = ({setIsDetailedList, isDetailedList} : StackButtonProps):React.ReactNode => {
    const { t } = useTranslation();

    const listToShow = useMemo(() => 
        isDetailedList ? 
    (
        <AppsIcon 
            sx={(theme: Theme) => ({
                color: theme?.palette?.primary?.main,
            })}
        /> 
    ) : (
         <FormatListBulletedIcon
            sx={(theme: Theme) => ({
                color: theme?.palette?.primary?.main,
            })}
        />
    )
    ,[isDetailedList])

    return(
        <Tooltip title={isDetailedList ? t("skills.button.grid") : t("skills.button.list")}>
            <Button
                onClick={ () => setIsDetailedList((prev: boolean) => !prev)}
                aria-label={isDetailedList ? t("skills.button.grid") : t("skills.button.list")}

                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.backgroundDark,
                    borderRadius: '1em',
                })}
            >
                {listToShow}
            </Button>
        </Tooltip>
    )
};
        
export default React.memo(StackButtonComponent);