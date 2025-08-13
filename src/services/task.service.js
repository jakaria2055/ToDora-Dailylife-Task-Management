import TaskModel from "../model/task.model.js";

export const createTaskService = async (body, userId) => {
  const task = TaskModel({
    ...body,
    owner: userId,
  });

  await task.save();

  return {
    status: "success",
    data: task,
    message: "Task Created successfully!):",
  };
};

export const getTasksService = async (userId) => {
  const tasks = await TaskModel.find({ owner: userId });

  return {
    status: "success",
    data: tasks,
    message: "Successfully findall data for the user.",
  };
};

export const getTaskService = async (taskId, userId) => {
  const taskById = await TaskModel.findOne({ owner: userId, _id: taskId });

  return {
    status: "success",
    data: taskById,
    message: "Successfully findall data for the user.",
  };
};

export const updateTaskService = async (taskId, userId, body) => {
  const allowedUpdate = [
    "title",
    "description",
    "deadline",
    "img",
    "completed",
  ];

  // Filter only allowed keys from body
  const filteredBody = Object.fromEntries(
    Object.entries(body).filter(([key]) => allowedUpdate.includes(key))
  );

  const isValidOperation = Object.keys(filteredBody).length > 0;

  if (!isValidOperation) {
    const error = new Error("Invalid Update Operation!");
    error.statusCode = 400;
    throw error;
  }

  const task = await TaskModel.findOne({ _id: taskId, owner: userId });

  if (!task) {
    const error = new Error("Task Not found!");
    error.statusCode = 400;
    throw error;
  }

  Object.keys(filteredBody).forEach((item) => {
    task[item] = filteredBody[item];
  });

  await task.save();

  return { status: "success", message: "Updated Task Successfully." };
};

export const deleteTaskService = async (taskId, userId) => {
  const taskById = await TaskModel.findOneAndDelete({
    owner: userId,
    _id: taskId,
  });

  if (!taskById) {
    const error = new Error("Invalid Delete Operation!");
    error.statusCode = 400;
    throw error;
  }

  return { message: "Task Deleted successfully!):" };
};
