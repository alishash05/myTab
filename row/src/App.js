import React from 'react';
import './App.css';
import Row from './row';


var data = [
  { firstname: 'Alisha', lastname: 'Shaikh' },
  { firstname: 'Neha', lastname: 'Yadav' },
  { firstname: 'Supriya', lastname: 'Baswant' },
  { firstname: 'Hidayat', lastname: 'Shaikh' },
  { firstname: 'Alina', lastname: 'Khan' },
  { firstname: 'Riya', lastname: 'Mehara' },
  { firstname: 'Nia', lastname: 'Yadav' },
  { firstname: 'Ram', lastname: 'Shivastav' },
  { firstname: 'Ritu', lastname: 'Shastra' },
  { firstname: 'Raj', lastname: 'Mehra' }
];
console.log(data)

function App(){
var lastRow=()=>{
console.log("check last row");
}

return(

data.map((item,index)=>{

return(

<Row item={item} lastRow={lastRow}/>

);
})

);
}
export default App;



