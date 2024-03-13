import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/page.login";
import HomePage from "../pages/Home/page.home";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
]);

export default router;
