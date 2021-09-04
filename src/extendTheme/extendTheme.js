import { extendTheme } from "@chakra-ui/react"

const colors = {
  brandPurple: "#673FB4",
  darkPurple:'#1d1b40',
  pink:'#f84071',
  purple: '#724cc5',
  soft:'#f4efff',
  dark:'#141414',
  rose:{
    50:'#FC91AD',
    100:'#FA81A1',
    200:'#F87497',
    300:'#F9648C',
    400:'#F84C7A',
    500:'#f84071',
    600:'#F63569',
    700:'#F8275F',
    800:'#F90647',
    900:'#8E0126',
  }
}

const typography = {
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    //mono: "Fira Code, monospace",
  },
}

const theme = {
  colors,
  typography,
}

export default extendTheme(theme)
/*
const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
  },
  colors: {
    ...theme.colors,
  },
  fonts: {
    body: "Inter var, sans-serif",
    heading: "Inter var, sans-serif",
    mono: "Fira Code, monospace",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  lineHeights: {
    tiny: "0.8",
    normal: "normal",
    base: "1",
    shorter: "1.2",
    short: "1.4",
    tall: "1.6",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
  space: {
    "0": "0",
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.5rem",
    "4": "1rem",
    "5": "1.5rem",
    "6": "2rem",
    "8": "2.5em",
    "10": "3rem",
    "11": "3.5rem",
    "12": "4rem",
    "16": "6rem",
    "20": "8rem",
    "24": "11rem",
    "32": "16rem",
  },
}
*/