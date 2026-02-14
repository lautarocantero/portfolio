import { Box, type Theme } from "@mui/material";


const MorphingBlobComponent = ():React.ReactNode => {
    return(
        <Box
            className="blob-shape"
            sx={(theme: Theme) => ({
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${theme?.palette?.primary?.main} 0%, ${theme?.palette?.primary?.light || theme?.palette?.primary?.main} 100%)`,
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                boxShadow: `0 20px 60px ${theme?.palette?.primary?.main}80`,
                transition: 'all 0.3s ease',
                animation: 'morph 8s ease-in-out infinite',
                '@keyframes morph': {
                    '0%, 100%': {
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    },
                    '25%': {
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    },
                    '50%': {
                        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
                    },
                    '75%': {
                        borderRadius: '70% 30% 50% 50% / 30% 50% 70% 50%',
                    }
                }
            })}
        />
    )
};
        
export default MorphingBlobComponent;