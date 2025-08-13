import React from "react";
import TaskStore from "../../store/TaskStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddTaskForm() {
  let navigate = useNavigate();
  const { TaskForm, TaskFormOnChange, TaskCreateRequest } = TaskStore();

  const save = async () => {
    let res = await TaskCreateRequest(TaskForm);
    if (res) {
      toast.success("Task Created Successfully.");
      navigate(`/`);
    }else{
        toast.error("Something Went wrong.")
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend">Add Task Details</legend>

          <label className="label">Title</label>
          <input
            value={TaskForm.title}
            onChange={(e) => {
              TaskFormOnChange("title", e.target.value);
            }}
            type="text"
            className="input w-full"
            placeholder="Title"
          />

          <label className="label">Description</label>
          <input
            value={TaskForm.description}
            onChange={(e) => {
              TaskFormOnChange("description", e.target.value);
            }}
            type="text"
            className="input w-full"
            placeholder="Description"
          />

          <label className="label">DeadLine</label>
          <input
            value={TaskForm.deadline}
            onChange={(e) => {
              TaskFormOnChange("deadline", e.target.value);
            }}
            type="date"
            className="input w-full"
          />

          <label className="label">Image</label>
          <input
            value={TaskForm.img}
            onChange={(e) => {
              TaskFormOnChange("img", e.target.value);
            }}
            type="text"
            className="input w-full"
            placeholder="www.image.png"
          />

          <button onClick={save} className="btn btn-neutral mt-4 w-full">
            Add Task
          </button>
        </fieldset>
      </div>
    </>
  );
}

export default AddTaskForm;
