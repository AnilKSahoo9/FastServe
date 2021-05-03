// import axios from "axios";
// import * as India from "../../India.geojson";
// return the user data from the session storage
// export const getUser = () => {
//   const userStr = sessionStorage.getItem("email");
//   if (userStr) return JSON.parse(userStr);
//   else return null;
// };

export const getUserType = () => {
  const userType = sessionStorage.getItem("type");
  if (userType) return userType;
  else return "User";
};

// return the token from the session storage
// export const getToken = () => {
//   if (sessionStorage.getItem("token")) {
//     var started = sessionStorage.getItem("started");
//     var diff = Date.now() - started;

//     if (diff >= 1000 * 60 * 40) {
//       //     var refreshToken = sessionStorage.getItem("refreshToken");
//       //     axios.post(
//       //  `${process.env.REACT_APP_BACKEND_URL}/refreshToken`,
//       //       {
//       //         refresh: refreshToken,
//       //       },
//       //     )
//       //       .then((response) => {
//       //         //console.log(response.data.access);
//       //         sessionStorage.setItem("token", response.data.access);
//       //         sessionStorage.setItem("started", Date.now());
//       //       })
//       //       .catch((error) => {
//       //         console.log("Something went wrong. Please try again later.");
//       //       });
//       return sessionStorage.getItem("token") || null;
//     } else {
//       return sessionStorage.getItem("token") || null;
//     }
//   } else {
//     return;
//   }
// };

// remove the token and user from the session storage
export const removeUserSession = () => {
  //   sessionStorage.removeItem("token");
  sessionStorage.removeItem("type");
  //   sessionStorage.removeItem("refreshToken");
  //   sessionStorage.removeItem("started");
  //   sessionStorage.removeItem("name");
};

// set the token and user from the session storage
export const setUserSession = (type) => {
  //   sessionStorage.setItem("token", token.access);
  //   sessionStorage.setItem("refreshToken", token.refresh);
  sessionStorage.setItem("started", Date.now());
  sessionStorage.setItem("type", type);
  //   sessionStorage.setItem("name", user.name ? user.name : "User");
};
