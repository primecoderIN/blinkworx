import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
