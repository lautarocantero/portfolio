import { Grid, type Theme } from "@mui/material";
import type { StackListComponentProps } from "../../typings/reactComponents";
import type { Stack } from "../../typings/types";
import ExperienceItemStackCapsuleComponent from "./ExperienceItemStackCapsule";


const StackListComponent = ({stack}: StackListComponentProps ):React.ReactNode => {
    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'row'}
            sx={(theme: Theme) => ({
                gap: { xs: '0.1em 0.2em'},
                height: 'auto',
                overflowY: 'auto',
                scrollbarWidth: "thin",
                justifyContent: 'center',
                alignItems: "start",
                marginTop: { xs: '2em', sm: "1em" },
                backgroundColor: theme?.custom?.backgroundDark,
                padding: '0.5em',
                borderRadius: '1em',
            })}
        >
            {
                stack?.map((stk: Stack) => (
                    <ExperienceItemStackCapsuleComponent stack={stk}/>
                ))
            }
        </Grid>
    )
};
        
export default StackListComponent;