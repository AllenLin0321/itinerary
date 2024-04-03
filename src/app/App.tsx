"use client";
import { useForm } from "react-hook-form";
import Label from "./components/Label";
import Button from "./components/Button";
import Input from "./components/Input";
import ERROR_MESSAGES from "@/app/constants/errorMessages";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      airport: "桃園國際機場 第一航廈",
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log("errors: ", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <h2 className='text-slate-600 my-2'>送機計畫</h2>
      <Input
        label='下車機場'
        type='text'
        register={register}
        name='airport'
        config={{ disabled: true }}
        errors={errors}
      />
      <Input
        label='航班編號'
        type='text'
        register={register}
        name='flightNumber'
        config={{ required: ERROR_MESSAGES.REQUIRED }}
        errors={errors}
      />

      <h2 className='text-slate-600 my-2'>旅客資訊</h2>
      <Input
        label='姓名'
        type='text'
        register={register}
        name='name'
        config={{ required: ERROR_MESSAGES.REQUIRED }}
        errors={errors}
      />
      <Input
        label='電話'
        type='text'
        register={register}
        name='phone'
        config={{
          required: ERROR_MESSAGES.REQUIRED,
          minLength: 10,
          maxLength: 10,
        }}
        errors={errors}
      />
      <Input
        label='身分證字號/護照編號'
        type='text'
        register={register}
        name='id'
        config={{ required: ERROR_MESSAGES.REQUIRED }}
        errors={errors}
      />
      <Label label='乘車備註'>
        <textarea {...register("note", {})} />
      </Label>
      <Button>下一步</Button>
    </form>
  );
}
