function Button({ width = "", color = "", colorHover = "", text = "" }) {
  return (
    <div>
      <button
        className={`uppercase rounded-md flex py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-stone-100 ${width} ${color} ${colorHover}`}>
        {text}
      </button>
    </div>
  );
}

export { Button };
