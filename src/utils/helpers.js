import jwt_decode from "jwt-decode";

export const getUserDetails = () => {
  const token = localStorage.getItem("Token");
  if (token) {
    const decodedToken = jwt_decode(token);
    return decodedToken;
  }
};

export const getLocalDateTime = (timestamp) => {
  let d = new Date(timestamp),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  return `${day}/${month}/${year}`;
};
