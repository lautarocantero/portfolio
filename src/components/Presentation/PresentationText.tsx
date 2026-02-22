import { Typography, type Theme } from "@mui/material";
import type { PresentationTextProps } from "../../typings/reactComponents";
import { TitleSizeEnum } from "../../typings/types/enums";

const PresentationText = ({ text, remarked, size, className, title }: PresentationTextProps): React.ReactNode => {
  return (
    <Typography
      component={title ? 'h1' : 'h2'}
      aria-label={title ? text : undefined}
      sx={(theme: Theme) => ({
        color: remarked ? theme?.palette?.secondary?.main : undefined,
        fontSize:
          size === TitleSizeEnum.large
            ? theme.typography.h4.fontSize
            : theme.typography.body2.fontSize,
        marginBottom: '1.5em',
        textDecoration: remarked ? 'underline' : undefined,
      })}
      className={className}
    >
      {text}
    </Typography>
  );
};

export default PresentationText;
