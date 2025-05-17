import { useState } from "react";
import AddTasks from "./assets/components/AddTasks";
import Tasks from "./assets/components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um Desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Matemática",
      description: "Estudar Matemática para se tornar um Matemático.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Inglês",
      description: "Estudar Inglês para morar em outro país.",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de tarefas
      </h1>
      <Tasks tasks={tasks} />
      <AddTasks />
    </div>
  );
}

export default App;
