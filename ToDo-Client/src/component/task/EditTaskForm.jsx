import React from "react";
import TaskStore from "../../store/TaskStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function EditTaskForm({ taskId }) {
  let navigate = useNavigate();
  const {
    EditTaskForm,
    EditTaskFormOnChange,
    TaskUpdateRequest,
    TaskListRequest,
  } = TaskStore();

  
  const save = async () => {
    const res = await TaskUpdateRequest(taskId, EditTaskForm);
    if (res) {
      toast.success("Task Updated!");
      await TaskListRequest();
      navigate(`/`);
    } else {
      toast.error("Failed to update task!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
        <legend className="fieldset-legend">Add Task Details</legend>

        <label className="label">Title</label>
        <input
          value={EditTaskForm.title}
          onChange={(e) => {
            EditTaskFormOnChange("title", e.target.value);
          }}
          type="text"
          className="input w-full"
          placeholder="Title"
        />

        <label className="label">Description</label>
        <input
          value={EditTaskForm.description}
          onChange={(e) => {
            EditTaskFormOnChange("description", e.target.value);
          }}
          type="text"
          className="input w-full"
          placeholder="Description"
        />

        <label className="label">DeadLine</label>
        <input
          value={
            EditTaskForm.deadline ? EditTaskForm.deadline.split("T")[0] : ""
          }
          onChange={(e) => {
            EditTaskFormOnChange("deadline", e.target.value);
          }}
          type="date"
          className="input w-full"
        />

        <label className="label">Image</label>
        <input
          value={EditTaskForm.img}
          onChange={(e) => {
            EditTaskFormOnChange("img", e.target.value);
          }}
          type="text"
          className="input w-full"
          placeholder="www.image.png"
        />

        <button onClick={save} className="btn btn-neutral mt-4 w-full">
          Update Task
        </button>
      </fieldset>
    </div>
  );
}

export default EditTaskForm;
