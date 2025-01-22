function SplitScreen({ left = "", right = "" }) {
  return (
    <div className="flex max-w-6xl m-auto items-center justify-center">
      <div className="flex-1 pr-8">{left}</div>
      <div className="flex-1 bl-8">{right}</div>
    </div>
  );
}
export { SplitScreen };
