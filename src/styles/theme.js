import { createTheme } from "@mui/material";

export const theme = createTheme({
  layout: {
    alignment: {
      display: "flex",
      justifyContent: "center",
      marginTop: 50,
    },
    paper: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginBottom: "50px",
      height: 300,
      paddingTop: 50,
      textAlign: "center",
      width: 300,
    },
  },
  bookInput: {
    marginBottom: "20px",
  },
});
