import { createTaskService, deleteTaskService, getTaskService, getTasksService, updateTaskService } from "../services/task.service.js";

export const createTask = async (req, res) => {
  try {
    const result = await createTaskService(req.body, req.user._id)
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something went is wrong" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const result = await getTasksService(req.user?._id)
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something went is wrong" });
  }
};

export const getTask = async (req, res) => {
  try {
    const result = await getTaskService(req.params.id, req.user?._id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something went is wrong" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await updateTaskService(req.params.id, req.user._id, req.body)
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something went is wrong" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const result = await deleteTaskService(req.params.id, req.user._id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something went is wrong" });
  }
};