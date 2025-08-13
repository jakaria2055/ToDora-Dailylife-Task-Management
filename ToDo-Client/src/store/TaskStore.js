import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const TaskStore = create((set) => ({
  TaskForm: {
    title: "",
    description: "",
    deadline: "",
    img: "",
  },
  TaskFormOnChange: (name, value) => {
    set((state) => ({
      TaskForm: {
        ...state.TaskForm,
        [name]: value,
      },
    }));
  },

  EditTaskForm: {
    title: "",
    description: "",
    deadline: "",
    img: "",
  },
  EditTaskFormOnChange: (name, value) => {
    set((state) => ({
      EditTaskForm: {
        ...state.EditTaskForm,
        [name]: value,
      },
    }));
  },

  TaskList: null,
  TaskListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/tasks`)
      if (res.data.status === "success") {
        set({ TaskList: res.data.data });
        set({EditTaskForm: res.data.data})
      }
    } catch (e) {
      unauthorized(e.response?.status);
    }
  },

  TaskCreateRequest: async (PostBody) => {
    try {
      set({ TaskList: null });
      let res = await axios.post(`/api/v1/tasks/create`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

TaskUpdateRequest: async (taskId, PostBody) => {
  try {
    set({ TaskList: null });
    let res = await axios.patch(`/api/v1/tasks/update/${taskId}`, PostBody);
    return res.data.status === "success";
  } catch (e) {
    unauthorized(e.response?.status);
    return false;
  }
},


  RemoveTaskRequest: async (taskId) => {
    try {
      await axios.delete(`/api/v1/tasks/delete/${taskId}`);
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default TaskStore;
