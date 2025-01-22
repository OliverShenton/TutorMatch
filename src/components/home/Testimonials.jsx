import { TESTIMONIALS } from "../../data/testimonial";

function Testimonials() {
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap gap-4">
        {TESTIMONIALS.map((item, index) => (
          <article
            key={index}
            className="flex flex-col rounded-lg p-4 bg-stone-100 border-2 border-stone-800 w-1/4 gap-2">
            <q>{item.text}</q>
            <p>-- {item.author}</p>
            <p className="text-stone-500">{item.type}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export { Testimonials };
