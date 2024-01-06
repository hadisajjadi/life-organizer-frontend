import DayView from "../components/DayView";
import HabitTracker from "../components/HabitTracker";
import MealTracker from "../components/MealTracker";
import MoodTracker from "../components/MoodTracker";
import Note from "../components/Note";
import SleepTracker from "../components/SleepTracker";
import TaskList from "../components/TaskList";

const Day = () => {
  return (
    <div>
      <div className="w-full h-[90vh] pt-6">
        <div className="grid grid-cols-12 grid-rows-12 gap-6 w-full h-full">
          <div className="col-span-3 row-span-full">
            <TaskList />
          </div>
          <div className="col-span-3 row-span-3">
            <MoodTracker />
          </div>
          <div className="col-span-3 row-span-3">
            <SleepTracker />
          </div>
          <div className="col-span-3 row-span-5">
            <HabitTracker />
          </div>
          <div className="col-span-3 row-span-4">
            <MealTracker />
          </div>
          <div className="col-span-3 row-span-5">
            <Note />
          </div>
          <div className="col-span-3 col-start-10 row-span-full">
            <DayView />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Day;

