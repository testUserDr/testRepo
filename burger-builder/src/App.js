import React from "react";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./containers/Layouts/Layout";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
