import { createTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';


const font =  "'Space Mono', monospace";

const lightTheme = createTheme({
    
    palette: createPalette({
        primary: {
            main: '#00494d',
            dark: '#26c0ab',
          },
          secondary: {
            main: "#26c0ab",
            dark: "#c5e4e7"
          },
        }),

    typography: {
        fontFamily: font,
        fontSize: 24,
        fontWeight: 700
    },
 
    overrides: {
        MuiButton: {
            contained:{
                "&:hover": {
                    backgroundColor: "#26c0ab",
                    color: "#00494d"
                  },
                  '&$disabled': {
                    backgroundColor: 'rgba(38, 192, 171, 0.5)',
                  },
                  "&.active": {
                    color:'black',
                  },
             button: {
                    "&.active": {
                      background:'black',
                    },
                  },
            }
        },
      MuiPaper: {
          root: {
              color:'#898980',
              padding: '10px',
              marginBottom: '10px',
          },
      },
      MuiInputBase: {
          root:{
            color: "#00494d",
            '&$error': {
              border:'2px solid red'
            },
            "&:hover": {
              border: "2px solid",
              borderColor: "#26c0ab"
            },
            fontSize: '15px',
            fontWeight: 'bold',
            backgroundColor: '#f4fafa',
            borderRadius: "5px",
            "&:hover:not($disabled):not($focused):not($error)": {
              border: "2px solid",
              borderColor: "#26c0ab"
            },
            "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none"
         },
          },
        input: {
          '-webkit-autofill:focus': {
            color: '#f4fafa',
          },
          height: '28px'
      },
  },
     MuiToggleButton: {
      root:{
        backgroundColor: '#00494d',
        color: 'white',
        '&.MuiToggleButton-root.Mui-selected': {
          backgroundColor: "#26C0AB",
          borderRadius: "5px",
          color: "#00494d"
      },
      '&.MuiToggleButton-root:hover':{
        backgroundColor: "#C5E4E7",
        color: '#00494d'
      },
      '&.MuiToggleButton-root.Mui-selected:hover':{
        backgroundColor: "#26C0AB",
      },
          border: null,
          padding: '0', 
        },
      label:{
          backgroundColor: 'transparent',
          color: 'white',
          '&.MuiToggleButton-root.Mui-selected': {
            backgroundColor: "#26C0AB",
            borderRadius: "5px",
            color: "#00494d"
          },
        },
  },

  MuiToggleButtonGroup:{
      root:{
          flexWrap: 'wrap',
          '.Mui-selected': {
            backgroundColor: '#C5E4E7'
        },
      }
  }
    },
  });

  export default lightTheme