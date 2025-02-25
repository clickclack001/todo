import TaskInput from "@/components/task-input";
import TaskFilter from "@/components/task-filter";
import TaskList from "@/components/task-list";


function App() {


  return (
    <>
      <div className="p-4 max-w-2xl mt-3 mx-auto border-[1px] border-gray-400 rounded-md">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
          </div>
        </div>
        <div>
          <TaskInput/>
        </div>
        <div>
          <TaskFilter/>
        </div>
        <div>
          <TaskList/>
        </div>
      </div>
    </>
  )
}

export default App
