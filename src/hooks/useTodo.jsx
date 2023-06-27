import axios from "axios";
import { apiURL } from "./commonUrl";

const useTodo = () => {
  const fetchCreateTodo = () => {
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
  const fetchGetTodos = () => {
    axios.get(apiURL + "/todos", {
      headers: {
        Authorization: "",
      },
    });
  };
  const fetchUpdateTodo = () => {
    axios.post(
      apiURL + "/todos/:id",
      {
        todo: "",
        isCompleted: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    );
  };
  const fetchDeleteTodo = () => {
    axios.delete(
      apiURL + "/todos/:id",

      {
        headers: {
          Authorization: "",
        },
      }
    );
  };
  return {
    fetchCreateTodo,
    fetchGetTodos,
    fetchDeleteTodo,
    fetchUpdateTodo,
  };
};
export default useTodo;
