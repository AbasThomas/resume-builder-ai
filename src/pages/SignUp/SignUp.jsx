import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { registerUser } from "../../api/authService.js";
import { userSchema } from "../../schemas/userSchema.js";
import toast from "react-hot-toast";
import InputField from '../../components/InputField/InputField.jsx';
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Assuming you have a CSS file for styling
const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { message, user } = await registerUser(data);
      toast.success(message || "Registered successfully!");
      localStorage.setItem("user", JSON.stringify(user));
      reset();
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message || "Registration failed";
      if (errorMessage.includes("Email already in use")) {
        toast.error("This email is already registered.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <InputField
          name="fullName"
          control={control}
          label="Full Name"
          error={errors.fullName?.message}
        />
        <InputField
          name="email"
          control={control}
          label="Email"
          error={errors.email?.message}
        />
        <InputField
          name="password"
          control={control}
          label="Password"
          type="password"
          error={errors.password?.message}
        />
        <button
          type="submit"
          className="registration-button"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        
      </form>
    </div>
  );
};

export default UserRegistrationForm;
