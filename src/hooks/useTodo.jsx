import axios from "axios";
import { apiURL } from "./commonUrl";

const useTodo = () => {
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
  return {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo,
  };
};
export default useTodo;
