import Label from "./Label";
import { ErrorMessage } from "@hookform/error-message";

interface Props {
  label: string;
  name: string;
  register: Function;
  config: Object;
  errors: Object;
  type: string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  register,
  config,
  errors,
  type,
  ...rest
}) => {
  const error = errors && errors[name];
  return (
    <>
      <Label label={label} />

      <input
        type={type}
        className={`text-slate-600 text-sm leading-loose w-full ${
          errors[name] && "border-red-500 border-2"
        }`}
        {...rest}
        {...register(name, { ...config })}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className='errorMessage text-sm'>{message}</p>
        )}
      />
    </>
  );
};

export default Input;
