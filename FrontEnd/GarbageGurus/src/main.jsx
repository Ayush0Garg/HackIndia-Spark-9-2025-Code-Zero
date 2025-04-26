import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import {Provider} from "react-redux";
import "./index.css";

//imprting components
import App from "./App.jsx";
import AuthPage from "./Pages/AuthPage/AuthPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage/SignupPage.jsx";
import Homepage from "./Pages/HomePage/Homepage.jsx";
import ComplaintsPage from "./Pages/ComplaintsPage/ComplaintsPage.jsx"
import AssignForm_container from "./components/AssignForm/AssignForm_container.jsx";
import AssignedJobsPage from "./Pages/AssignedJobsPage/AssignedJobsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, 
    children:[
      {path:"/", element: <Homepage />},
      {path:"/complaints", element: <ComplaintsPage />},
      {path:"/assign/:id", element: <AssignForm_container />},
      {path:"/assigned-jobs", element: <AssignedJobsPage />}
    ]
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "/auth/sign-up", element: <SignupPage /> },
      { path: "/auth/log-in", element: <LoginPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
