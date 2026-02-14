import { Box, Tooltip, type Theme } from "@mui/material";
import type { StackSkillProps } from "../../typings/reactComponents";
import MorphingBlobComponent from "./StackMorphingBlob";
import StackContentComponent from "./StackContent";

const StackSkillComponent = ({stack}: StackSkillProps ): React.ReactNode => {
    const { text, icon, iconGif }: {text: string, icon: string, iconGif: string} = stack;

    return(
        <Tooltip title={text}>
            <Box
                component={'div'}
                sx={(theme: Theme) => ({
                    width: '100%',
                    aspectRatio: '1',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    mt: '2em',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        '& .blob-shape': {
                            animationPlayState: 'paused',
                            boxShadow: `0 25px 80px ${theme?.palette?.primary?.main}CC`,
                        }
                    }
                })}
            >
                {/* Morphing Blob Background */}
                <MorphingBlobComponent />
                {/* Content */}
                <StackContentComponent icon={icon} iconGif={iconGif} text={text} />
            </Box>    
        </Tooltip>
    )
};
    
export default StackSkillComponent;
