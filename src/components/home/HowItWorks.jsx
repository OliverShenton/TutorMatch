import { GUIDE } from "../../data/visual-guide";

function HowItWorks() {
  const borderColors = ["border-blue-200", "border-green-200", "border-yellow-200"];
  const bgColors = ["bg-blue-200", "bg-green-200", "bg-yellow-200"];
  return (
    <>
      <div>
        <p className="mb-12 text-2xl text-center">
          Follow these three easy steps to connect with your perfect tutor today.
        </p>
        <div className="flex items-center justify-evenly">
          {GUIDE.map((item, index) => (
            <article
              key={index}
              className={`flex flex-col rounded-lg min-h-[250px] px-4 py-8 border-2 w-1/6 gap-4 text-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xltransition-transform ${borderColors[index]} ${bgColors[index]}`}>
              <p>{item.step}</p>
              <div className="flex items-center justify-center">
                <item.image className="size-10" />
              </div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export { HowItWorks };
