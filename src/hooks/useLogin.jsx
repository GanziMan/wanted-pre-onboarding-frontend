import axios from "axios";
import { apiURL } from "./commonUrl";

const useLogin = () => {
  const Login = () => {
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
};
export default useLogin;
