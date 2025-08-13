import { useEffect } from "react";
import TaskStore from "../../store/TaskStore";
import TaskSkeleton from "../../skeleton/TaskSkeleton";
import { Link } from "react-router-dom";
import CompletedIcon from "../layout/CompletedIcon";

function TaskList() {
  const { TaskList, TaskListRequest, RemoveTaskRequest, TaskUpdateRequest } =
    TaskStore();

  const remove = async (taskId) => {
    await RemoveTaskRequest(taskId);
    await TaskListRequest();
  };

  const completeTask = async (taskId) => {
    await TaskUpdateRequest(taskId, { completed: true });
    await TaskListRequest();
  };

  useEffect(() => {
    (async () => {
      await TaskListRequest();
    })();
  }, []);

  if (TaskList === null) {
    return <TaskSkeleton />;
  } else {
    return (
      <>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Check Tasks, Chase Goals.
          </li>

          {TaskList.map((task, i) => {
            return (
              <li key={i} className="list-row">
                <div>
                  <img className="size-10 rounded-box" src={task["img"]} />
                </div>
                <div>
                  <div>{task["title"]}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {task["deadline"]}
                  </div>
                </div>
                <p className="list-col-wrap text-xs">{task["description"]}</p>
               

                {!task.completed ? (
                  <button
                    onClick={() => completeTask(task._id)}
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m18 7l-1.41-1.41l-6.34 6.34l1.41 1.41zm4.24-1.41L11.66 16.17L7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41L6 19l1.41-1.41L1.83 12z"
                      />
                    </svg>
                  </button>
                ) : (
                  <>
                    <CompletedIcon />
                  </>
                )}
                <Link
                  to={`/edittask/${task["_id"]}`}
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17l-2.83-2.83l-1.41 1.41L14.93 22L22 14.93l-1.41-1.41z"
                    />
                  </svg>
                </Link>
                <button
                  onClick={async () => {
                    await remove(task["_id"]);
                  }}
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zm2-8h6v8H5zm5-6H6L5 5H2v2h12V5h-3z"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TaskList;
