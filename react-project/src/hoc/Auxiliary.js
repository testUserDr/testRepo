import React from "react";

// Aux is basically higher order component that wraps children without using div
// Aux component for react is React.Fragment or <> </>
const Aux = (props) => props.children;

export default Aux;
