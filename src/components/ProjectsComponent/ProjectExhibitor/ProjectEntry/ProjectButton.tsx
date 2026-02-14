import { Button, type Theme } from "@mui/material";
import type { ProjectButtonProps } from "../../../../typings/reactComponents";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import React from "react";


const ProjectButtonComponent = ({text, onClick, disabled}: ProjectButtonProps):React.ReactNode => {


    return(
        <Button
            onClick={onClick}
            disabled={disabled}
            sx={(theme: Theme) => ({
                backgroundColor: disabled ? theme?.palette?.primary?.dark : theme?.palette?.primary?.main,
                boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
                color: theme?.custom?.white,
                cursor: disabled ? 'default' : 'pointer',
                fontSize: theme?.typography?.body2?.fontSize,
                m: '0 auto',
                width: "auto",
            })}
        >
            {disabled && 
              <LockOutlineIcon
                sx={(theme: Theme) =>({
                  color: theme?.palette?.primary?.main,
                  height: '0.8em',
                })}
              />
            }
            {text}
            {disabled && 
              <LockOutlineIcon
                sx={(theme: Theme) =>({
                  color: theme?.palette?.primary?.main,
                  height: '0.8em',
                })}
              />
            }
        </Button>
    )
};
        
export default React.memo(ProjectButtonComponent);