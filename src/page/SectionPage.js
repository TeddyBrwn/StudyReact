function Section({ title, children }) {
  return (
    <div>
      <h1 className="text-blue-600 font-semibold">{title}</h1>
      {children}
      <span className="flex border-[1px] border-solid border-neutral-300 mb-4"></span>
    </div>
  );
}
export default Section;
