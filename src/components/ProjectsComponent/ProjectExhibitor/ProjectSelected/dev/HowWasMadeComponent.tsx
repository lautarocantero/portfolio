import { Box, Typography, type Theme } from "@mui/material";
import type { HowWasMadeProps } from "../../../../../typings/reactComponents";
import StackCapsuleComponent from "../../../../shared/stack/StackCapsuleComponent";

const HowWasMadeComponent = ({ title, stack }: HowWasMadeProps): React.ReactNode => {
  return (
    <Box
        sx={(theme: Theme) => ({
            width: 'fit-content',
            minWidth: { xs: '14em'},
            margin: { xs: '0 auto', sm: '0'},
        })}
    >
        <Box
            sx={(theme: Theme) => ({
                backgroundColor: theme?.palette?.primary?.main,
                mt: '1em',
            })}
        >
            <Typography
                sx={(theme: Theme) => ({
                    fontSize: theme?.typography?.body1?.fontSize,
                    color: theme?.custom?.fontColor,
                    p: '0.3em',
                    textAlign: 'center',
                })}
            >
                {title}
            </Typography>
        </Box>
        <Box
          sx={(theme: Theme) => ({
            backgroundColor: theme?.custom?.backgroundDark,
            height: 'fit-content',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row'},
            justifyContent: 'center',
            alignItems: 'center',
            p: '0.5em 0',
            "& > .MuiBox-root": { 
                backgroundColor: theme?.custom?.backgroundDark, 
                border: `1px dotted ${theme?.palette?.primary.main}`,
                mt: '0.1em',
            }
          })}
        >
          {stack.stack.map((stk) => (
            <StackCapsuleComponent stack={stk} key={stk.text} flat/>
          ))}
        </Box>

    </Box>
  );
};

export default HowWasMadeComponent;
