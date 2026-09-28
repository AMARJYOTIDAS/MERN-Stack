import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Layout";
import Medicines from "./Common/Medicine";
import Appointment from "./DoctorComponent/Appointment";
import OurServices from "./Components/OurService";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "appointment",
          element: <Appointment />,
        },
        {
          path: "medicine",
          element: <Medicines />,
        },
        {
          path: "about",
          element: <OurServices />,
        },
      ],
    },
  ]);
  return (
    <div className="wrap-anywhere bg-blue-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
