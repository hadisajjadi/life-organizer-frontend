import DayView from "../components/DayView";
import HabitTracker from "../components/HabitTracker";
import MoodTracker from "../components/MoodTracker";
import TaskList from "../components/TaskList";

const Day = () => {
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
          <div className="col-span-2 row-span-3">
            <HabitTracker />
          </div>
          <div className="col-span-4 col-start-9 row-span-full">
            <DayView />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Day;

