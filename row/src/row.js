import React from 'react';
import Td from'./td';
function Row(props){

return(
<tr>
<Td  label="firstname" value={props.item.firstname}/>
<Td   label="lastname" value={props.item.lastname}/>
<button onClick={()=>props.lastRow()}>+</button>  
</tr>
);
}
export default Row