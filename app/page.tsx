import TaskList from "./_components/TaskList";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[90vh] pt-6">
        <div className="max-w-md h-full">
          <TaskList />
        </div>

      </div>
    </div>
  )
}
