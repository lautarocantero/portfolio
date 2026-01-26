import { Grid, type Theme } from "@mui/material";
import type { StackListComponentProps } from "../../../typings/reactComponents";
import StackCapsuleComponent from "./StackCapsuleComponent";
import type { StackInterface } from "../../../typings/types";

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
                stacks?.map((stk: StackInterface) => (
                    <StackCapsuleComponent stack={stk} key={stk.text}/>
                ))
            }
        </Grid>
    )
};
        
export default StackListComponent;