import { alpha, Box, Tooltip, Typography, type Theme } from "@mui/material";
import type { StackSkillProps } from "../../typings/reactComponents";

const StackSkillComponent = ({stack}: StackSkillProps ):React.ReactNode => {
    const { text, icon, iconGif }: {text: string, icon: string, iconGif: string} = stack;
    return(
        <Tooltip title={text}>
            <Box
                component={'div'}
                sx={(theme: Theme) => ({
                    width: '100%',
                    height: '100%',
                    backgroundColor: alpha(theme.palette.secondary.main, 0.3),
                    backdropFilter: 'blur(50px)',
                    boxShadow: `0 0 20px 5px ${alpha(theme.palette.secondary.main, 0.3)}`,
                    borderRadius: '0.4em',
                    p: '0.2em',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto'
                })}
            >
                <Box
                    component={'img'}
                    src={iconGif !== "" ? iconGif : icon}
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
                <Typography
                    sx={(theme: Theme) => ({
                        textAlign: 'center',
                        color: theme?.custom?.fontColor,
                        fontSize: '0.5em',
                        pt: '0.2em'
                    })}
                >
                    {text}
                </Typography>
            </Box>
        </Tooltip>
    )
};
    
export default StackSkillComponent;