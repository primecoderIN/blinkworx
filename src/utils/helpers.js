import jwt_decode from "jwt-decode"

export const getUserDetails = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken;
    }
  };