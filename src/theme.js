import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import * as data from "./colors";

export const tokens = (mode) => {
  if (mode === "light") {
    return {
      ...data.LightMode,
    };
  } else {
    return {
      ...data.DarkMode,
    };
  }
};

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  let palette = {
    mode: mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#333A62",
          },
          secondary: {
            main: "#333A62",
          },
          neutral: {
            dark: "#333A62",
            main: "#333A62",
            light: "#333A62",
          },
          background: {
            default: "#333A62",
          },
        }
      : {
          primary: {
            main: "#333A62",
          },
          secondary: {
            main: "#333A62",
          },
          neutral: {
            dark: "#333A62",
            main: "#333A62",
            light: "#333A62",
          },
          // background: {
          //default: colors.primarylight[900],
          // },
        }),
  };

  return {
    palette,
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const useMode = () => {
  const mode = useSelector((state) => state.mode.currentMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, mode];
};
