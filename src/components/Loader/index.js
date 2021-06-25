import React from 'react';
import './style.css';

function Loader() {
	return (
		<center>
			<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</center>
	);
}

export default Loader;
