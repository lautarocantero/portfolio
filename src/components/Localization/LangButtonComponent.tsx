import { Box, type Theme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/context/themeContext';
import { LanguagesEnum } from '../../typings/types/enums';
import { flagsDictionary } from './helpers/flagsDictionary';
import i18n from '../../i18n';


const LangButtonComponent = (): React.ReactNode => {
  const { appTheme } = useContext(ThemeContext);
  const currentFlag = i18n.language === LanguagesEnum.Spanish ? flagsDictionary.arg : flagsDictionary.usa;

  return (
    <Box
      component="img"
      src={currentFlag.flagSrc}
      alt={currentFlag.alt}
      sx={(theme: Theme) => ({
        color: !appTheme
          ? theme?.palette?.secondary?.main
          : theme?.custom?.blackTranslucid,
        height: '0.8em',
        cursor: 'pointer',
        userSelect: "none",
      })}
    />
  );
};

export default LangButtonComponent;
