import { Typography, type Theme } from "@mui/material"


const PresentationText = ({text, remarked, size, className, title} : PresentationTextProps):React.ReactNode => {

    return (
        <Typography
            component={title ? 'h1' : 'h2'}
            sx={(theme: Theme) => ({
                color: remarked ? theme?.palette?.secondary?.main : '',
                fontSize:
                  size === "large"
                    ? theme.typography.h4.fontSize
                    : theme.typography.body2.fontSize,
                marginBottom: '1.5em'
            })}
            className={className}
        >
            {text}
        </Typography>
    )
};

export default PresentationText;