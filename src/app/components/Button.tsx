export default function Button({ className, children, ...rest }) {
  return (
    <button
      className={`text-white bg-slate-700 w-full block appearance-none px-5 py-2.5 uppercase rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
