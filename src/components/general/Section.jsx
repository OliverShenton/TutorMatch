function Section({ title = "", content = "", bgColor = "" }) {
  return (
    <section className={`${bgColor}`}>
      <div className="py-16  max-w-6xl mx-auto">
        <p className="pb-16 text-center font-bold lg:text-3xl">{title}</p>
        <div>{content}</div>
      </div>
    </section>
  );
}
export { Section };
