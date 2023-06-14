import axios from "axios";
import { apiURL } from "./commonUrl";

const useLogin = () => {
  const SignUp = () => {
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
  const SignIn = () => {
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
};
export default useLogin;
