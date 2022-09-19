// ========================================= Colors =========================================

interface Colors {
  primary: string;
  success: string;
  blue: string;
  lightBlack: string;
  lightWhite: string;
  gray: string;
}

export const colors: Colors = {
  primary: "rgb(239, 235, 235)",
  success: "#22c35e",
  blue: "#0552FB",
  lightBlack: "hsl(210deg, 30%, 8%)",
  lightWhite: "#FAFAFA",
  gray: "#ccc",
};

// ========================================= Theme =========================================

export interface Theme {
  body: string;
  text: string;
  blue: string;
  btntextColor: string;
  boxShadowColor: string;
}

export const lightTheme: Theme = {
  body: colors.primary,
  text: colors.lightBlack,
  blue: colors.blue,
  btntextColor: colors.primary,
  boxShadowColor: colors.lightBlack,
};

export const darkTheme: Theme = {
  body: colors.lightBlack,
  text: colors.lightWhite,
  blue: colors.blue,
  btntextColor: colors.lightBlack,
  boxShadowColor: colors.gray,
};

// ========================================= Breakpoints =========================================

export const devices = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};
