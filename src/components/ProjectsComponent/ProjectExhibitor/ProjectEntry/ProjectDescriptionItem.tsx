import { Box, type Theme } from "@mui/material";
import type { ProjectDescriptionItemProps } from "../../../../typings/reactComponents";
import { ProjectEntryTypeEnum } from "../../../../typings/types/enums";

const ProjectDescriptionItemComponent = ({ text, logo, type }: ProjectDescriptionItemProps): React.ReactNode => {
  return (
    <Box
      sx={(theme: Theme) => ({
        position: 'relative',
        backgroundColor: type === ProjectEntryTypeEnum?.feature ? theme?.custom?.white : theme?.palette?.primary?.main, 
        borderRadius: '1em',
        textAlign: 'center',
        color: type !== ProjectEntryTypeEnum?.feature ? theme?.custom?.white : theme?.palette?.primary?.main,
        fontSize: '0.8em',
        p: '1em',
        m: '1em auto',
        width: { xs: '100%', sm: '100%' },
        display: 'flex',            
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-0.8em',
          left: type === ProjectEntryTypeEnum?.feature && 0,
          right: type === ProjectEntryTypeEnum?.benefit && 0,
          rotate: `z ${type === ProjectEntryTypeEnum?.feature ? '30deg' : '60deg' }`,
          width: 0,
          height: 0,
          borderLeft: '0.5em solid transparent',
          borderRight: '1.5em solid transparent',
          borderTop: `1.5em solid ${type === ProjectEntryTypeEnum?.feature ? theme?.custom?.white : theme?.palette?.primary?.main}`,
        },
      })}
    >
      <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5em' }}>
        {logo && (
          type === ProjectEntryTypeEnum?.benefit ? (
            <Box
              sx={(theme: Theme) => ({
                width: '2em',
                height: '2em',
                backgroundColor: theme?.custom?.white,
                mask: `url(${logo}) no-repeat center / contain`,
                WebkitMask: `url(${logo}) no-repeat center / contain`,
              })}
            />
          ) : (
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: '2em',
                height: '2em',
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />
          )
        )}
        <strong>{text}</strong>
      </li>
    </Box>
  );
};

export default ProjectDescriptionItemComponent;
