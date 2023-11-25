import Card from "./_components/Card";
import CardTitle from "./_components/CardTitle";
import MoodTracker from "./_components/MoodTracker";
import TaskList from "./_components/TaskList";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[90vh] pt-6">
        <div className="grid grid-cols-12 grid-rows-6 gap-6 w-full h-full">
          <div className="col-span-3 row-span-full">
            <TaskList />
          </div>
          <div className="col-span-3 row-span-3">
            <MoodTracker />
          </div>
        </div>

      </div>
    </div>
  )
}
