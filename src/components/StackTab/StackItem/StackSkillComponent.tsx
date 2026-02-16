import { Box, Tooltip, type Theme } from "@mui/material";
import React, { useContext } from "react";
import type { StackSkillProps } from "../../../typings/reactComponents";
import { StackContext } from "../context/StackContext";
import StackContentComponent from "./StackContent";
import MorphingBlobComponent from "./StackMorphingBlob";

const StackSkillComponent = ({stack}: StackSkillProps ): React.ReactNode => {
    const { text, icon, iconGif }: 
    {
        text: string, 
        icon: string, 
        iconGif: string
    } = stack;
    const { filteredStacks, setFilteredStacks } = useContext(StackContext)!;

    return(
        <Tooltip title={text}>
            <Box
                component={'div'}
                onClick={() =>
                  setFilteredStacks((prev: string[]) =>
                    prev.includes(stack.text)
                      ? prev.filter(s => s !== stack.text)
                      : [...prev, stack.text]
                  )
                }
                sx={(theme: Theme) => ({
                    alignItems: 'center',
                    aspectRatio: '1',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: '2em',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                    width: '100%',
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
                <MorphingBlobComponent isSelected={filteredStacks?.includes(text)}/>
                {/* Content */}
                <StackContentComponent icon={icon} iconGif={iconGif} text={text} />
            </Box>    
        </Tooltip>
    )
};
    
export default React.memo(StackSkillComponent);
