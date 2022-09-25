import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  age: yup.number().min(10).max(20).required("Please enter your age"),
  website: yup.string().url().nullable().required("Please enter a URL"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <Heading title="Contact" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <input {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}

        <input {...register("website")} />
        {errors.website && <span>{errors.website.message}</span>}

        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
