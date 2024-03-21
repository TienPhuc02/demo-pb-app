import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
interface IProp {
  children: ReactElement;
}
const ProtectedRoutes = (props: IProp) => {
  const { children } = props;
  const access_token = localStorage.getItem("access_token");
  console.log("🚀 ~ ProtectedRoutes ~ access_token:", access_token);
  if (access_token === "" || access_token === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoutes;
