import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";

type TeacherFormInputs = {
  firstName: string;
  lastName: string;
};

const TeacherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherFormInputs>();

  const onSubmit = (data: TeacherFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <InputField<TeacherFormInputs>
        label="First Name"
        name="firstName"
        register={register}
        error={errors.firstName}
      />
      <InputField<TeacherFormInputs>
        label="Last Name"
        name="lastName"
        register={register}
        error={errors.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TeacherForm;
