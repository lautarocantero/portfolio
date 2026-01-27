import i18n from '../../../i18n';
import type { handleToggleLanguageInterface } from '../../../typings/types';

export const languageToggle = ({ lng }: handleToggleLanguageInterface) => {
  if (lng) {
    i18n.changeLanguage(lng);
  }
};
