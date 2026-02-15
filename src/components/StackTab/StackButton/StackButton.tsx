import { Button, type Theme } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import type { StackButtonProps } from "../../../typings/reactComponents";


const StackButtonComponent = ({setIsDetailedList, isDetailedList} : StackButtonProps):React.ReactNode => {


    return(
        <Button
            onClick={ () => setIsDetailedList((prev: boolean) => !prev)}
            sx={(theme: Theme) => ({
                width: '1%',
                backgroundColor: theme?.custom?.backgroundDark,
                borderRadius: '1em',
            })}
        >
            {
                isDetailedList ? 
                <AppsIcon 
                    sx={(theme: Theme) => ({
                        color: theme?.palette?.primary?.main,
                    })}
                /> 
                : 
                <FormatListBulletedIcon
                    sx={(theme: Theme) => ({
                        color: theme?.palette?.primary?.main,
                    })}
                />
            }
        </Button>
    )
};
        
export default StackButtonComponent;