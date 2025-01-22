import { FaHouse, FaGear } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { FaCalendarAlt, FaClock, FaDollarSign, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-64 fixed bg-gradient-to-b from-[#004D61] to-[#003a4f] py-8 px-4 text-white">
      <div className="text-5xl">Welcome 'NAME HERE'</div>
      <ul className="flex-grow space-y-4 mt-4 px-4">
        <li>
          <div className="flex items-center gap-4">
            <FaHouse />
            <Link to="/">Dashboard Home</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <MdGroup />
            <Link to="/view-tutors">View Tutors</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <FaCalendarAlt />
            <Link to="/book-session">Book a Session</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <FaClock />
            <Link to="/my-sessions">My Sessions</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <FaDollarSign />
            <Link to="/payment-history">Payment History</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <FaGear />
            <Link to="/settings">Settings</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <FaPowerOff />
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export { Sidebar };
