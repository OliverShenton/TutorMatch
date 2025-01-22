import { Sidebar } from "../components/dashboard/Sidebar";
import { StudentContentArea } from "../components/dashboard/StudentContentArea";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <StudentContentArea />
    </div>
  );
}

export { Dashboard };
