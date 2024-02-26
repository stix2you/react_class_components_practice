import { createRoot } from "react-dom/client";
import { Hello } from "./components/hello/hello";
import "./index.scss";

const App = () => {
  return <Hello name="React" />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);