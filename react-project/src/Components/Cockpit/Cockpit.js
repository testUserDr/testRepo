import React, { useContext, useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    /*     setTimeout(() => {
      alert("Saved data in cloud");
    }, 1000);
 */
    return () => {
      console.log("[Cockpit.js] Cleanup works");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");

    return () => {
      console.log("[Cockpit.js] Cleanup 2 works");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.togglePersonsHandler}
      >
        Toggle Persons
      </button>
      {/*   <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
