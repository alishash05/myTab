import React from 'react';

function Td(props){
return(
	<td>
	<label>{props.label}</label><input value={props.value} />
	</td>
      );

}
export default Td