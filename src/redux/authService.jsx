import axios from "axios";

LOGIN_URL = "https://guzzer-api.onrender.com/v1/users/login";

const login = (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = axios.post(userData, LOGIN_URL, config);
  return data;
};

export { login };
