import { Box, Button, type Theme } from "@mui/material";
import type { ProjectButtonProps } from "../../../../typings/reactComponents";


const ProjectButtonComponent = ({text, onClick, disabled}: ProjectButtonProps):React.ReactNode => {
    return(
        <Button
            onClick={onClick}
            sx={(theme: Theme) => ({
                backgroundColor: disabled ? theme?.palette?.primary?.dark : theme?.palette?.primary?.main,
                color: theme?.custom?.white,
                width: { xs: '90%', sm: '30%'},
                fontSize: theme?.typography?.body2?.fontSize,
                m: '0 auto'
            })}
        >
            {disabled && 
            <Box
              component="img"
              src={'public/icons/lock-svgrepo-com.svg'}
              alt={'locked_icon'}
              sx={{
                height: '1.5em',
                cursor: 'pointer',
                mr: '1em'
              }}
            />
            }
            {text}
            {disabled && 
                <Box
                  component="img"
                  src={'public/icons/lock-svgrepo-com.svg'}
                  alt={'locked_icon'}
                  sx={{
                    height: '1.5em',
                    cursor: 'pointer',
                    ml: '1em'
                  }}
                />
            }
        </Button>
    )
};
        
export default ProjectButtonComponent;