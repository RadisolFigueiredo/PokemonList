import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./AppContext/Provider";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </GlobalContext>
  );
};

export default App;
