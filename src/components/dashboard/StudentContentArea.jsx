import { Routes, Route } from "react-router-dom";
import { ViewTutors } from "./ViewTutors";
import { DashboardHome } from "./DashboardHome";

function StudentContentArea() {
  return (
    <div className="ml-72 p-4">
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/view-tutors" element={<ViewTutors />} />
        <Route path="/book-session" element={<h1>Book a Session</h1>} />
        <Route path="/my-sessions" element={<h1>My Sessions</h1>} />
        <Route path="/payment-history" element={<h1>Payment History</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
      </Routes>
    </div>
  );
}

export { StudentContentArea };
