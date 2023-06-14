import axios from "axios";
import { apiURL } from "./commonUrl";

const useLogin = () => {
  const createTodo = () => {
    axios.post(
      apiURL + "/todos",
      {
        todo: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    );
  };
  const getTodos = () => {
    axios.get(apiURL + "/todos", {
      headers: {
        Authorization: "",
      },
    });
  };
  const updateTodo = () => {
    axios.post(
      apiURL + "/todos/:id",
      {
        todo: "",
        isCompleted: ture,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    );
  };
  const deleteTodo = () => {
    axios.delete(
      apiURL + "/todos/:id",

      {
        headers: {
          Authorization: "",
        },
      }
    );
  };
};
export default useLogin;
