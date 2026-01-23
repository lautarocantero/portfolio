import { Button, type Theme } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const SideBarButton = ():React.ReactNode => {
    return(
        <Button>
            <
                MenuOpenIcon 
                sx={(theme: Theme) =>({
                    margin: 0,
                    color: theme?.palette?.secondary?.main,
                })}
            />
        </Button>
    )
}

export default SideBarButton;