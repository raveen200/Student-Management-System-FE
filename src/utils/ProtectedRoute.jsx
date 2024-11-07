import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"
import { useDispatch } from "react-redux";
import { setLoginEmail_Role } from "../redux/Slice";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  // update redux state with user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const decodedToken = jwtDecode(token);
        if(decodedToken){
          delete decodedToken.exp;
          delete decodedToken.iat;
          dispatch(setLoginEmail_Role(decodedToken));
        }
      } catch (error) {
        console.error("User fetch error:", error);
      }
    };
    if(token){
      fetchUser();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;