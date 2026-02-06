
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      white: string;
      whiteTranslucid: string;
      black: string;
      blackTranslucid: string;
      lightMain: string;
      darkSecondary: string;
      fontColor: string;
      fontColorTransparent: string;
      fontColorDark: string,
      fontColorDarkTransparent: string,
      backgroundLigth: string;
      background: string;
      aboutBackground: string
      backgroundTranslucid: string;
      backgroundDark: string;
      errorLight: string;
      errorDark: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      white?: string;
      whiteTranslucid?: string;
      black?: string;
      blackTranslucid?: string;
      lightMain?: string;
      darkSecondary?: string;
      fontColor?: string;
      fontColorTransparent?: string;
      fontColorDark?: string,
      fontColorDarkTransparent?: string,
      backgroundLigth?: string;
      background?: string;
      aboutBackground?: string;
      backgroundTranslucid?: string;
      backgroundDark?: string;
      errorLight: string;
      errorDark: string;
    };
    unstable_grid?: {
      cssGrid?: boolean;
    };
    unstable_sx?: boolean;
  }
}

export const darkTheme = createTheme({
  unstable_sx: true,
  unstable_grid: {
    cssGrid: true, // ✅ activa Grid v3
  },
  palette: {
    primary: {
      main: '#773CFF',
    },
    secondary: {
      main: '#6222f7ff',
    },
    error: {
      main: '#842325',
  },
  },
  custom: {
    //────────────── white ──────────────────//
    white: '#eff0f8',
    whiteTranslucid: '#eff0f865',

    //────────────── black ──────────────────//
    black: '#333333',
    blackTranslucid: '#09090966',

    //────────────── main ──────────────────//
    lightMain: '#8c60f1ff',

    //────────────── secondary ──────────────────//
    darkSecondary: 'rgb(16, 1, 49)',

    //────────────── font ──────────────────//
    fontColor: '#eff0f8',
    fontColorTransparent: '#eff0f842',
    fontColorDark: '#333333',
    fontColorDarkTransparent: '#09090966',

    //────────────── background ──────────────────//
    backgroundLigth: '#2b292a',
    background: '#1D1B1C',
    aboutBackground: '#aeaeaf',
    backgroundTranslucid: '#1D1B1C91',
    backgroundDark: '#131316d2',

    //────────────── error ──────────────────//
    errorLight: "#6b100a6c",
    errorDark: "#310704ff",
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
});

export const lightTheme = createTheme({
  unstable_sx: true,
  unstable_grid: {
    cssGrid: true, // ✅ activa Grid v3
  },
  palette: {
    primary: {
      main: '#026873',
    },
    secondary: {
      main: '#069aaa',
    },
    error: {
      main: '#842325',
  },
  },
  custom: {
    //────────────── white ──────────────────//
    white: '#eff0f8',
    whiteTranslucid: '#eff0f826',

    //────────────── black ──────────────────//
    black: '#333333',
    blackTranslucid: '#09090966',

    //────────────── main ──────────────────//
    lightMain: '#f1d474ff',

    //────────────── font ──────────────────//
    fontColor: '#333333',
    fontColorTransparent: '#3333333d',

    //────────────── secondary ──────────────────//
    darkSecondary: '#4a00f8ff',

    //────────────── background ──────────────────//
    // backgroundLigth: '#FCA4A7',
    backgroundLigth: '#bbbbbbff',
    background: '#e4e0e2ff',
    backgroundTranslucid: '#e4e0e28a',
    backgroundDark: '#e3e3e399',

    //────────────── error ──────────────────//
    errorLight:"#6b100a6c",
    errorDark:"#310704ff",
  },
  typography: {
    fontFamily: `'Montserat', sans-serif`,
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
});
