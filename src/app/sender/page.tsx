"use client";
import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import { BiImageAdd } from "react-icons/bi";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import FormData from "form-data";

const fileTypes = ["JPG", "PNG"];

type Inputs = {
  fullName: string;
  accountNumber: string;
  image: File;
};

export default function page() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getFieldState,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<Inputs>();

  const router = useRouter();

  const handleChange = (file: File | undefined) => {
    if (!file) return;
    setValue("image", file);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("accountNumber", data.accountNumber);
    formData.append("image", data.image);

    return await fetch("/api/sender", {
      method: "POST",
      // @ts-ignore
      body: formData,
    }).then((res) => {
      if (res.status === 200) return router.push(`/success`);
      notifications.show({
        title: "There was a problem submitting your form",
        message: "Sorry for the inconvenience! 🤥",
        color: "red",
      });
    });
  };

  return (
    <div className=" pb-56 min-h-screen -mx-5 md:-mx-12 px-5 relative md:px-12 bg-[#DCDCDC]">
      <div className="max-w-[1440px] mx-auto relative pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-5xl md:text-6xl pt-16 text-center text-black"
        >
          Sender
        </motion.h2>
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="4"
          viewBox="0 0 125 4"
          fill="none"
          className="mx-auto mt-4"
        >
          <path
            d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z"
            fill="#000000"
          />
        </motion.svg>
        <Image
          src={"/method.png"}
          alt="method"
          width={137}
          height={71}
          className="mx-auto mt-16"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-2 max-w-[600px] mx-auto mt-6"
        >
          <input
            required
            placeholder="Full Name"
            type="text"
            {...register("fullName")}
            className={`border-0 ring-1 ring-inset ${
              errors.fullName
                ? "ring-red-600 focus:ring-red-600"
                : "ring-[#6d6d6d] focus:ring-[#8d8d8d]"
            } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent`}
          />
          <input
            required
            placeholder="Account Number"
            type="text"
            {...register("accountNumber")}
            className={`border-0 ring-1 ring-inset ${
              errors.accountNumber
                ? "ring-red-600 focus:ring-red-600"
                : "ring-[#6d6d6d] focus:ring-[#8d8d8d]"
            } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent`}
          />
          <FileUploader
            className="w-full"
            required
            handleChange={handleChange}
            types={fileTypes}
          >
            {watch("image") ? (
              <img src={URL.createObjectURL(watch("image"))}></img>
            ) : (
              <div className="flex flex-col justify-center items-center py-24  border border-[#6D6D6D]">
                <BiImageAdd color="#6D6D6D" size={72} />
                <span className="text-4xl font-light text-center text-[#6d6d6d]">
                  Upload Your Payment
                </span>
              </div>
            )}
          </FileUploader>
          <button
            disabled={isSubmitting}
            type="submit"
            className=" font bold text-2xl py-6 bg-[#6d6d6d]"
          >
            {isSubmitting ? "Confirming..." : "Confirm"}
          </button>
        </form>
        <img src="/s.png" className="absolute left-0 bottom-0 w-full" />
      </div>
      <TopBrackets color="black" />
      <BottomDecoration color="black" />
    </div>
  );
}
