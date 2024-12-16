import { createRoot } from "react-dom/client";

document.body.innerHTML = "<div id='root'></div>";

const root = createRoot(document.getElementById("app"));
root.render(<h1>Hello World</h1>);
