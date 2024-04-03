export default function Button({ children }) {
  return (
    <button className='text-white bg-slate-700 w-full block appearance-none px-5 py-2.5 mt-10 mb-5 uppercase rounded'>
      {children}
    </button>
  );
}
