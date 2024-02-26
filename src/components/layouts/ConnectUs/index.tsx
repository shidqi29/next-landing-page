import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/atoms";

type FormFields = {
  email: string;
  subject: string;
  message: string;
};

export const ConnectUs = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Something went wrong" });
    }
  };

  return (
    <article className="grid grid-cols-1 place-items-center gap-24 py-12 lg:grid-cols-2">
      <figure>
        <Image src="/pana.svg" alt="pana" width={300} height={300} />
      </figure>
      <section className="w-full">
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="px-4">
              Email:
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              id="email"
              type="email"
              placeholder="me@email.com"
              className="border-b border-black/70 px-4 py-2"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="subject" className="px-4">
              Subject:
            </label>
            <input
              {...register("subject", { required: "Subject is required" })}
              id="subject"
              type="text"
              placeholder="Subject Email"
              className="border-b border-black/70 px-4 py-2"
            />
            <p className="text-red-500">{errors.subject?.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="message" className="px-4">
              Message:
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              placeholder="Write your message here"
              className="resize-none rounded-md border border-black/70 px-4 py-2"
              rows={5}
            />
            <p className="text-red-500">{errors.message?.message}</p>
          </div>
          <p className="text-red-500">{errors.root?.message}</p>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="rounded-lg px-12 disabled:opacity-50"
          >
            {isSubmitting ? "Loading..." : "Send"}
          </Button>
        </form>
      </section>
    </article>
  );
};
