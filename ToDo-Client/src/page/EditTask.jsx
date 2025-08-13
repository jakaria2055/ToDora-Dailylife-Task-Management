import React, { useEffect } from "react";
import Layout from "../component/layout/Layout";
import { useParams } from "react-router-dom";
import TaskStore from "../store/TaskStore";
import EditTaskForm from "../component/task/EditTaskForm";

function EditTask() {
  const { id } = useParams();

  const { TaskList, TaskListRequest, EditTaskFormOnChange } =
    TaskStore();

    useEffect(() => {
    (async () => {
      await TaskListRequest();
    })();
  }, []);

  useEffect(() => {
    if (TaskList) {
      const selected = TaskList.find((item) => item._id === id);
      if (selected) {
        Object.entries(selected).forEach(([key, value]) => {
          EditTaskFormOnChange(key, value);
        });
      }
    }
  }, [TaskList, id]);

  return (
    <Layout>
      <EditTaskForm taskId={id}/>
    </Layout>
  );
}

export default EditTask;
