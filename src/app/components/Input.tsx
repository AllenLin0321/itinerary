import Label from "./Label";
import { ErrorMessage } from "@hookform/error-message";

export default function Input({
  label,
  name,
  register,
  config,
  errors,
  ...rest
}) {
  return (
    <>
      <Label label={label} />
      <input
        className='text-slate-600 text-sm leading-loose w-full'
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
}
