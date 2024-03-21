import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/page.login";
import HomePage from "../pages/Home/page.home";
import LayoutDashBoard from "../layout/dashboard/layout.dashboard";
import LayoutUser from "../layout/users/layout.user";
import LayOutCompanies from "../layout/companies/layout.companies";
import LayoutJob from "../layout/jobs/layout.job";
import ProtectedRoutes from "./PrivateRoute/route.private";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <HomePage />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <LayoutDashBoard />,
      },
      {
        path: "/users",
        element: <LayoutUser />,
      },
      {
        path: "/companies",
        element: <LayOutCompanies />,
      },
      {
        path: "/jobs",
        element: <LayoutJob />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
