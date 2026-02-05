import { Box, type Theme } from "@mui/material";
import type { ProjectDescriptionItemProps } from "../../../../typings/reactComponents";

const ProjectDescriptionItemComponent = ({ text, logo }: ProjectDescriptionItemProps): React.ReactNode => {
  return (
    <Box
      sx={(theme: Theme) => ({
        position: 'relative',
        backgroundColor: theme?.custom?.white,
        borderRadius: '1em',
        textAlign: 'center',
        color: theme?.palette?.primary?.main,
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
          left: '0',
          rotate: 'z 30deg',
          width: 0,
          height: 0,
          borderLeft: '0.5em solid transparent',
          borderRight: '1.5em solid transparent',
          borderTop: `1.5em solid ${theme?.custom?.white}`,
        },
      })}
    >
      <li style={{ listStyle: 'none', display: 'flex', alignItems: 'flex-start', gap: '0.5em' }}>
        {logo && (
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
        )}
        <strong>{text}</strong>
      </li>
    </Box>
  );
};

export default ProjectDescriptionItemComponent;
