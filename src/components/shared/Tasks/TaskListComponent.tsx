import { Grid, type Theme } from "@mui/material";
import type { TaskListProps } from "../../../typings/reactComponents";
import TaskCapsuleComponent from "./TaskCapsuleComponent";
import type { Task } from "../../../typings/types";


const TaskListComponent = ({tasks}: TaskListProps ):React.ReactNode => {
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
                tasks?.map((task: Task) => (
                    <TaskCapsuleComponent task={task}/>
                ))
            }
        </Grid>
    )
};
        
export default TaskListComponent;