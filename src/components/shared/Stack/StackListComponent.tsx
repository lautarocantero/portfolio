import { Grid, type Theme } from "@mui/material";
import type { StackListComponentProps } from "../../../typings/reactComponents";
import type { Stack } from "../../../typings/types";
import StackCapsuleComponent from "./StackCapsuleComponent";

const StackListComponent = ({stacks}: StackListComponentProps ):React.ReactNode => {

    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'row'}
            sx={(theme: Theme) => ({
                alignItems: "start",
                backgroundColor: theme?.custom?.backgroundDark,
                borderRadius: '1em',
                gap: { xs: '0.1em 0.2em'},
                height: 'auto',
                justifyContent: 'center',
                marginTop: { xs: '2em', sm: "1em" },
                overflowY: 'auto',
                padding: '0.5em',
                scrollbarWidth: "thin",
            })}
        >
            {
                stacks?.map((stk: Stack) => (
                    <StackCapsuleComponent stack={stk}/>
                ))
            }
        </Grid>
    )
};
        
export default StackListComponent;