import axios from "axios";
import { apiURL } from "./commonUrl";

const useLogin = () => {
  const fetchSignUp = () => {
    axios.post(
      apiURL + "/auth/signup",
      {
        email: "test",
        password: "testpassword",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const fetchSignIn = () => {
    axios.post(
      apiURL + "/auth/signin",
      {
        email: "test",
        password: "testpassword",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return {
    fetchSignIn,
    fetchSignUp,
  };
};
export default useLogin;
