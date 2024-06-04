import "./App.css";
import Main from "./Component/Main";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Job from "./layouts/Job";
import Vehicle from "./layouts/Vehicle";
import Login from "./auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/vehicle" element={<Vehicle />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
