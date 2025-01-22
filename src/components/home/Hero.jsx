import { Button } from "../general/Button";
import { SearchBar } from "../general/SearchBar";

function Hero() {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-4 bg-stone-100 border-[16px] rounded-xl border-indigo-400">
        <p className="text-center lg:text-6xl mb-8">Unlock Your Potential with the Right Tutor</p>
        <p className="text-center lg:text-3xl mb-8">
          Browse hundreds of skilled tutors, book lessons, and achieve your academic goals - all in
          one place.
        </p>
        <SearchBar />
        <div className="flex items-center justify-center gap-8 text-xl">
          <Button color="bg-blue-500" colorHover="hover:bg-blue-600" text="Find a Tutor" />
          <Button color="bg-green-500" colorHover="hover:bg-green-600" text="Become a Tutor" />
        </div>
        {/* <SearchBar /> */}
      </div>
    </div>
  );
}

export { Hero };
