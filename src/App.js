// 1) { useState } from "react";: Imports the useState hook from the React library. 
// The useState hook allows you to add state to functional components.
// 2) const [num1, setNum1] = useState(0);: Declares a state variable named num1 and a corresponding function 
// setNum1 to update its value. The initial value of num1 is set to 0. The useState hook returns an array with two elements: 
//the current state value (num1) and the state update function (setNum1).
// 3) <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />: This input element 
//represents a text field where users can enter a number for num1. The value attribute is set to the current value
// of num1,and the onChange event handler is set to update num1 with the new value entered by the user.
// 4) <button onClick={() => setNum3(parseInt(num1) + parseInt(num2))}>ADD</button>: This button triggers 
// the addition operation when clicked. It adds num1 and num2 together after 
// parsing them as integers using parseInt(). The result is stored in num3 using the setNum3 function.
import './App.css';
import Header from './Header';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add'
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

 return (
  <div className="App">
    <Header />
    <div className='main'>
    <TextField id="outlined-basic" label="Number1" variant="outlined" 
      value = {num1}
      onChange={(e) => setNum1(e.target.value)} />
      <TextField id="outlined-basic" label="Number2" variant="outlined" 
      value = {num2}
      onChange={(e) => setNum2(e.target.value)} />
      {/* <input 
      type = "text"
      value = {num1}
      onChange={(e) => setNum1(e.target.value)} // basically aap value change kskte ho input mein jake vrna freeze rhega input
      labelFor = "Enter num1"
      />
      <input  
      type = "text"
      value = {num2}
      onChange={(e) => setNum2(e.target.value)}
      labelFor = "Enter num2"
      />  */}
      {/* parseInt islye to convert string -> integer vrna res = 1+4 = 14 not 5*/}
      <button onClick = {() => setNum3(parseInt(num1) + parseInt(num2))}> 
        <AddIcon />
      </button>
      <button onClick = {() => setNum3(parseInt(num1) - parseInt(num2))}> 
        SUBTRACT
      </button>
      <button onClick = {() => setNum3(parseInt(num1) * parseInt(num2))}> 
        MULTIPLY
      </button>
      <button onClick = {() => setNum3(parseInt(num1) / parseInt(num2))}> 
        DIVIDE
      </button>
      <button onClick = {() => setNum3(parseInt(num1) % parseInt(num2))}> 
        MODULO
      </button>
      <p> RESULT : {num3}</p>
    </div>
    </div>
  ); }

export default App;

