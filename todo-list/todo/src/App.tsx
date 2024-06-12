import Main from "./lib/pages/main/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;