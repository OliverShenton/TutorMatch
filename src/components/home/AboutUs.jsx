import { SplitScreen } from "../general/SplitScreen";
import Img from "../..//assets/about-image.jpg";

function AboutUs() {
  return (
    <SplitScreen
      left={
        <div className="flex flex-col gap-8">
          <p className="text-5xl text-blue-900">Empowering Students, Connecting Educators</p>
          <p className="text-2xl">
            At TutorMatch, we believe every learner deserves personalized support to thrive. Our
            platform connects students with expert tutors in just a few clicks.
          </p>
          <ul className="text-xl flex flex-col gap-2">
            <li>
              <strong>Trustworthy Tutors</strong>: All tutors are verified professionals.
            </li>
            <li>
              <strong>Flexible Scheduling</strong>: Book sessions that fit your timetable.
            </li>
            <li>
              <strong>Secure Payments</strong>: Fast and secure transactions for peace of mind.
            </li>
          </ul>
        </div>
      }
      right={
        <div>
          <img src={Img} className="rounded-md shadow-md" />
        </div>
      }
    />
  );
}

export { AboutUs };
