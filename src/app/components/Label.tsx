export default function Label({ label, children }) {
  return (
    <label className='leading-loose text-left block text-slate-600 text-sm flex flex-col'>
      {label}
      {children}
    </label>
  );
}
