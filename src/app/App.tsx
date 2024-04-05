"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Label from "./components/Label";
import Button from "./components/Button";
import Input from "./components/Input";
import ERROR_MESSAGES from "@/app/constants/errorMessages";
import { getItineraryApi } from "@/app/apis/index";
import CheckCircleIcon from "@/app/icons/CheckCircleIcon";

export default function App() {
  const [itinerary, setItinerary] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      airport: "桃園國際機場 第一航廈",
    },
  });

  const onSubmit = async ({ flight }) => {
    const airlineID = flight.substr(0, 2);
    const flightNumber = flight.substr(2);

    const { data: itineraryData } = await getItineraryApi({
      airlineID,
      flightNumber,
    });
    setItinerary(itineraryData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col'>
      <div className='flex gap-8 sm:flex-row flex-col'>
        <div>
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
            name='flight'
            config={{
              required: ERROR_MESSAGES.REQUIRED,
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: ERROR_MESSAGES.ONLY_ALPHABET_AND_NUMBER,
              },

              onChange: (e) => {
                return setValue("flight", e.target.value.toUpperCase());
              },
            }}
            errors={errors}
          />
        </div>
        <div>
          <h2 className='text-slate-600 my-2'>旅客資訊</h2>
          <Input
            label='姓名'
            type='text'
            register={register}
            name='name'
            config={{
              required: ERROR_MESSAGES.REQUIRED,
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: ERROR_MESSAGES.ONLY_ALPHABET_AND_SPACE,
              },
            }}
            errors={errors}
          />
          <Input
            label='電話'
            type='text'
            register={register}
            name='phone'
            config={{
              required: ERROR_MESSAGES.REQUIRED,
              pattern: {
                value: /^[0-9]+$/,
                message: ERROR_MESSAGES.ONLY_NUMBER,
              },
            }}
            errors={errors}
          />
          <Input
            label='身分證字號/護照編號'
            type='text'
            register={register}
            name='id'
            config={{
              required: ERROR_MESSAGES.REQUIRED,
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: ERROR_MESSAGES.ONLY_ALPHABET_AND_NUMBER,
              },
              onChange: (e) => {
                return setValue("id", e.target.value.toUpperCase());
              },
            }}
            errors={errors}
          />
          <Label label='乘車備註'>
            <textarea {...register("note", {})} />
          </Label>
        </div>
      </div>

      <Button className='mt-10 mb-5'>下一步</Button>
      {Array.isArray(itinerary) && itinerary?.length > 0 && (
        <div className='flex gap-2'>
          <CheckCircleIcon />
          <span className='text-slate-600'>完成送機行程</span>
        </div>
      )}
      {Array.isArray(itinerary) && itinerary?.length === 0 && (
        <div className='flex flex-col'>
          <h2>查不到「{getValues("flight")}」航班資訊</h2>
          <p>
            請確認航班資訊、起飛時間等。你也可以直接填寫此航班作為機場接送資訊
          </p>
          <Button className='my-2 '>確認航班資訊，並送出</Button>
          <Button className='my-2 '>重新填寫</Button>
        </div>
      )}
    </form>
  );
}
