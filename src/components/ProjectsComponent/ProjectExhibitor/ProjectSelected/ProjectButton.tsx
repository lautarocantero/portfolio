import { Box, Button, type Theme } from "@mui/material";
import type { ProjectButtonProps } from "../../../../typings/reactComponents";


const ProjectButtonComponent = ({text, onClick, disabled}: ProjectButtonProps):React.ReactNode => {
    return(
        <Button
            onClick={onClick}
            sx={(theme: Theme) => ({
                backgroundColor: disabled ? theme?.palette?.primary?.dark : theme?.palette?.primary?.main,
                color: theme?.custom?.white,
                width: "auto",
                fontSize: theme?.typography?.body2?.fontSize,
                cursor: disabled ? 'default' : 'pointer',
                m: '0 auto',
                boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
            })}
        >
            {disabled && 
            <Box
              component="img"
              src={'public/icons/lock-svgrepo-com.svg'}
              alt={'locked_icon'}
              sx={{
                height: '1.5em',
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
                    ml: '1em'
                  }}
                />
            }
        </Button>
    )
};
        
export default ProjectButtonComponent;