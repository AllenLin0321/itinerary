interface Props {
  label: string;
  children?: React.ReactNode;
}

const Label: React.FC<Props> = ({ label, children }) => {
  return (
    <label className='leading-loose text-left block text-slate-600 text-sm flex flex-col'>
      {label}
      {children}
    </label>
  );
};
export default Label;
