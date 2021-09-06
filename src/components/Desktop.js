import React, {useState, useEffect} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import '../App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import lightTheme from '../themes/primary';
import {ReactComponent as Dollar} from '../icon-dollar.svg';
import {ReactComponent as Person} from '../icon-person.svg';
import NumberFormat from 'react-number-format';

//Desktop provides desktop layout for tip calculator

function Desktop() {

  var [bill, setBill] = useState(); //Used for bill text field
  var [tip, setTip] = useState(); //Used for custom Tip
  var [tipAmount, setTipAmount] = useState(); //calculated state for total tip
  var [people, setPeople] = useState(); //used for people text field
  var [total, setTotal] = useState(); //calculated for total cost
  var [resetState, setResetState] = useState(true); //flag for reseting all variables
  var [resetter, setResetter] = useState(); //flag for resetting custom tip field
  var [errorState, setErrorState] = useState(false); //error handler for view
  var [errorText, setErrorText] = useState(""); //creates error text

  var [alignment, setAlignment] = useState(''); //toggle selector for buttons



  //reset function clears all states on reset click
  const reset = () => {
    setBill()
    setTip()
    setTipAmount()
    setPeople()
    setTotal()
    setResetter('')
    setAlignment('')
  }

//Toggles between buttons
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

//used for setting state of tip based on button press. Function also prevents tip from populating in custom tip field
  const tipHandler = (tip) => {
    setTip(tip)
    setResetter('')

  };

 
//Calculates tip amount per person

  useEffect(() => {
    var x = ((bill * tip)/people)
    setTipAmount(x)
  }, [tip, bill, people])
 
  //calculates total amount
  useEffect(() => {
    let value = ((bill/people)+tipAmount)
    setTotal(value)
  }, [tipAmount, bill, people])


  useEffect(() => {
    if(!people){
      setResetState(true) 
    }else{
      setResetState(false)
    }
  }, [people])

//Checks error handlers for number of people
  useEffect(() => {
    if(bill > 0 && tip > 0 && !people){
      setErrorText("Can't be zero")
      setErrorState(true)
    }
    else{
      setErrorText("")
      setErrorState(false)
    }
  }, [tip, people, bill])
  
    return (
  
    <div style={{
      display: "flex",
      backgroundColor: "#c5e4e7",
      height: '100vh',
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
    <ThemeProvider theme={lightTheme}>

         <img alt='App Logo' src={logo} style={{padding: "3%"}}/>

        <div style={{
          backgroundColor : 'white',
          width:'70%',
          height: '450px',
          marginBottom: "50px",
          display: "flex",
          flexShrink: '1',
          borderRadius: "15px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: 'space-around'
        }}>

            <div style = {{ 
              width: "350px",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              padding: "3%"
              }}>
                
              <div style={{color : '#7f9c9f'}}>Bill</div>
              

              <TextField  
               InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" style={{paddingLeft: '15px'}}>
                    <Dollar />
                  </InputAdornment>
                ),
              }}
              inputProps={{ style: {
                textAlign: 'right', 
                paddingRight: '10px', 
               } }}
              placeholder="0" 
              type="number"
              onChange={(e) => {setBill(e.target.value)}}
               value={bill || false}
              />

              
            <div style={{color : '#7f9c9f', paddingTop: '40px', paddingBottom: '10px'}}>Select Tip %</div>

      <div style ={{
           display: "flex",
           flexWrap: "wrap",
            }}>

              <ToggleButtonGroup
              value={alignment}
              exclusive
              color="primary"
              onChange={handleAlignment}
              aria-label="text alignment"
              style={{
                maxWidth:"400px"
              }}
          
              >


        <ToggleButton 
        value="five"
        onClick={() => tipHandler(.05)}
        variant="contained" 
        color="secondary"
        style={{
          marginRight: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          width: "20%",
          height: "40px",
          minWidth: "100px",
          fontSize: "20px",
          fontWeight: "700",
          borderRadius: '5px'
        }}
        >    
                  5%
        </ToggleButton>

        <ToggleButton 
        value="ten"
        onClick={() => tipHandler(.10)}
        variant="contained" 
        color="primary"
        style={{
          marginRight: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          width: "20%",
          height: "40px",
          minWidth: "100px",
          fontSize: "20px",
          fontWeight: "700",
          borderRadius: '5px',
        }}
        >    
                  10%
        </ToggleButton>

        <ToggleButton 
        value="fifteen"
        onClick={() => tipHandler(.15)}
        variant="contained" 
        color="primary"
        style={{
          marginRight: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          width: "20%",
          height: "40px",
          minWidth: "100px",
          fontSize: "20px",
          fontWeight: "700",
          borderRadius: '5px',
        }}
        >    
                  15%
        </ToggleButton>

        <ToggleButton 
        value="twentyFive"
        onClick={() => tipHandler(.25)}
        variant="contained" 
        color="primary"
        style={{
          marginRight: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          width: "20%",
          height: "40px",
          minWidth: "100px",
          fontSize: "20px",
          fontWeight: "700",
          borderRadius: '5px',
        }}
        >    
                  25%
        </ToggleButton>

        <ToggleButton 
        value="fifty"
        onClick={() => tipHandler(.50)}
        variant="contained" 
        color="primary"
        style={{
          marginRight: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          width: "20%",
          height: "40px",
          minWidth: "100px",
          fontSize: "20px",
          fontWeight: "700",
          borderRadius: '5px',
        }}
        >    
                  50%
        </ToggleButton >
          <ToggleButton 
          style={{
            backgroundColor: 'transparent'
          }}
          value={''}
          >
              <TextField 
                placeholder="Custom" 
                size="medium"
                InputProps={{
                  disableUnderline: true,
                }}
                value={resetter}
                inputProps={{ style: {textAlign: 'center', paddingRight: '10px'} }}
                type="number"
                style={{
                  marginLeft: '0px',
                  marginRight: '5px',
                  marginTop: '5px',
                  marginBottom: '5px',
                  width: "100px",
                  fontSize: '7',
                }}
                onChange={(value) => {setResetter(setTip(value.target.value/100))}}
                />
            </ToggleButton>
          </ToggleButtonGroup>


              </div>
    
                <div style={{
                   display: "flex",
                   flexDirection: "row",
                   justifyContent: "space-between"
                }}>
              <div style={{color : '#7f9c9f', paddingTop: '30px'}}>Number of People</div>
              <div style={{color : 'Red', paddingTop: '40px'}}>{errorText}</div>
              </div>

              <TextField
                  id="input-with-icon-textfield"
                  placeholder="0" 
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start" style={{paddingLeft: '15px'}}>
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  type="number"
                  inputProps={{ style: {textAlign: 'right', paddingRight: '10px'} }}
                  onChange={(event) => setPeople(event.target.value)
                }
                  value={people || false}
                  error={errorState}
                />
             </div>



            <div style={{
                backgroundColor : "#00494d",
                width: "450px",
                height: '600px',
                flexShrink: '1',
                maxHeight: '45vh',
                borderRadius: "15px",
                 display: "flex",
                 margin: "3%",
                 marginBottom: '20px',
                 flexDirection: "column"
                }}>

                  <div style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between"
                  }}>
                    
                    <div>
                      <div style={{
                        color: 'white',
                        marginLeft: '20px',
                        marginRight: "-20px",
                        marginTop: "40px",
                        fontWeight: '700',
                        fontSize: '14px'

                      }}>
                      Tip Amount
                      </div>
                      <div
                        style={{
                          marginLeft: '20%',
                          marginRight: "-20%",
                          fontWeight: '700',
                          fontSize: '10px',
                          color: '#C5E4E7',

                        }}>
                        / person
                      </div>
                    </div>

                    <div 
                    style={{
                      color: '#26c0ab',
                      marginRight: "10%",
                      marginTop: "30px",
                      fontWeight: '700',
                      fontSize: '42px'
                    }}>
                    
                    {isNaN(tipAmount) ? "$0.00" : <div><NumberFormat
                                                      value={tipAmount}
                                                      displayType={'text'}
                                                      thousandSeparator={true}
                                                      fixedDecimalScale={true}
                                                      decimalScale={2}
                                                      prefix={'$'}
                                                      renderText={(value, props) => <div {...props}>{value}</div>}
                                                    /></div>}                    
                  </div>
                </div>

                <div style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between"
                  }}>  


  
                    <div >
                      <div style={{
                        color: 'white',
                        marginLeft: '20px',
                        marginRight: "-20px",
                        marginTop: "40px",
                        fontWeight: '700',
                        fontSize: '14px'

                      }}>
                        Total
                      </div>
                      <div  style={{
                        marginLeft: '20px',
                        marginRight: "-20px",
                        fontWeight: '700',
                        color: '#C5E4E7',
                        fontSize: '10px'
                        }}>
                        / person
                      </div>
                    </div>

                    <div style={{
                        color: '#26c0ab',
                        marginRight: "10%",
                        marginTop: "30px",
                        fontWeight: '700',
                        fontSize: '42px',
                        display: "flex",


                      }}>
                        {isNaN(total) ? "$0.00": <NumberFormat
                                                      value={total}
                                                      displayType={'text'}
                                                      thousandSeparator={true}
                                                      fixedDecimalScale={true}
                                                      decimalScale={2}
                                                      prefix={'$'}
                                                      renderText={(value, props) => <div {...props}>{value}</div>}
                                                    />}
                    </div>

                  </div>

 
                    <Button 
                    style={{
                      marginTop: "15%",
                      marginBottom: "10%",
                      marginLeft: "8%",
                      marginRight: "8%",
                      height: "15%",
                      fontWeight: '700',
                      fontSize: "20px"
                    }}
                    disabled={resetState}
                    variant="contained" 
                    color="secondary"
                    onClick={() => reset()} >
                      Reset
                    </Button>

              </div>
   
        </div>
      </ThemeProvider>

    </div>
   );
  }


export default Desktop;
