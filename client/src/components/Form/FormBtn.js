import React from "react";

export const FormBtn = props => (
	<button {...props} style={{float: "right", marginBottom: 10 }} className="pink darken-3 btn-large">{props.children}</button>
);
