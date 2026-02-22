import { Box, keyframes, Tooltip, Typography, type Theme } from "@mui/material";
import type { AboutLinkProps } from "../../typings/reactComponents";
import handleAboutLinkAction from "../../helpers/About/handleButtonsAction";
import { useContext } from "react";
import { SimpleDialogContext } from "../SimpleDialog/SimpleDialogContext";

const floatBubble = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-50%) scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: translateY(-100%) scale(1);
    opacity: 0;
  }
`;

const AboutLinkComponent = ({ link }: AboutLinkProps): React.ReactNode => {
    const { text, icon, url, action }: { text: string, icon: string, url?: string, action: string } = link;
    const { setShowModal } = useContext(SimpleDialogContext)!;

    const bubbles = Array.from({ length: 6 }, (_, i) => ({
        left: `${10 + Math.random() * 80}%`,
        size: `${6 + Math.random() * 10}px`,
        delay: `${i * 1.2}s`,
        duration: `${4 + Math.random() * 3}s`,
    }));

    return (
        <Tooltip title={text}>
            <Box
                onClick={() => handleAboutLinkAction({ action, url: url ?? '', setShowModal })}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    height: '2em',
                    backgroundColor: link.bgColor,
                    cursor: 'pointer',
                    p: 1,
                    gap: 1,
                    overflow: 'hidden',
                    transition: 'filter 0.2s ease, transform 0.2s ease',
                    userSelect: "none",
                    '&:hover': {
                        filter: 'brightness(1.25)',
                        transform: 'scaleY(1.06)',
                    },
                }}
            >
                {/* Burbujas */}
                {bubbles.map((bubble, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: bubble.left,
                            width: bubble.size,
                            height: bubble.size,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            animation: `${floatBubble} ${bubble.duration} linear infinite`,
                            animationDelay: bubble.delay,
                            zIndex: 0,
                            pointerEvents: 'none',
                        }}
                    />
                ))}

                {/* Ícono */}
                <Box
                    component={'img'}
                    src={icon}
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        width: '2em',
                        height: '1.5em',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)',
                    }}
                />

                {/* Texto */}
                <Typography
                    sx={(theme: Theme) => ({
                        position: 'relative',
                        zIndex: 1,
                        color: theme?.custom?.white,
                        textTransform: 'Capitalize',
                    })}
                >
                    {text}
                </Typography>
            </Box>
        </Tooltip>
    )
};

export default AboutLinkComponent;