import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../utils/input-validators";
import { login } from "../services/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email: string | null;
    password: string | null;
  }>({ email: null, password: null });
  const [loading, setLoading] = useState(false);
  const { login: localLogin } = useAuth();
  const naviagate = useNavigate();

  function setError(field: string, message: string | null) {
    setErrors((prev) => {
      return { ...prev, [field]: message };
    });
  }

  function validateEmail(email: string) {
    const checkEmail = isValidEmail(email);

    if (!checkEmail) {
      setError("email", "Please enter a valid email");
    } else {
      setError("email", null);
    }
  }

  function validatePassword(password: string) {
    const checkPassword = isValidPassword(password);
    if (!checkPassword) {
      setError(
        "password",
        "Password must contain 8 characters including an uppercase character, a number and a special character"
      );
    } else {
      setError("password", null);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const checkEmail = isValidEmail(formData.email);
    const checkPassword = isValidPassword(formData.password);

    if (!checkEmail || !checkPassword) return;

    try {
      setLoading(true);

      const token = await login(formData);
      localLogin(token as string);

      naviagate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-linear-to-b from-teal-500 to-teal-800 w-[90%] max-w-3xl py-8 px-8 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-heading font-semibold text-white">
          Welcome Back!
        </h2>
        <p className="text-white">Please login to your account to continue</p>

        <div className="mt-4">
          <label htmlFor="email" className="text-lg text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData((data) => {
                return { ...data, email: e.target.value };
              });
              validateEmail(e.target.value);
            }}
            type="email"
            required
            id="email"
            className="block w-full bg-white mt-1 rounded-md py-3 px-4 focus:outline-none font-heading"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 ms-1 text-sm text-red-700 italic">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-lg text-white">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => {
              setFormData((data) => {
                return { ...data, password: e.target.value };
              });
              validatePassword(e.target.value);
            }}
            id="password"
            className="block w-full bg-white mt-1 rounded-md py-3 px-4 focus:outline-none font-heading"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 ms-1 text-sm text-red-700 italic">
              {errors.password}
            </p>
          )}
        </div>
        <div className="mt-12">
          <button
            className="w-full bg-white rounded-md py-3 flex items-center justify-center gap-3 text-lg cursor-pointer font-heading hover:bg-gray-200 font-medium transition-all hover:scale-95 text-teal-700 disabled:cursor-not-allowed disabled:scale-100"
            disabled={
              !formData.email ||
              !formData.password ||
              !!errors.email ||
              !!errors.password ||
              loading
            }
          >
            {loading ? (
              <div className="size-4 animate-spin border-2 border-t-0 rounded-full" />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className="mt-4">
          <p className="font-heading text-center text-white">
            Don't have an account? Please{" "}
            <Link to="/login" className="underline italic">
              Click here
            </Link>{" "}
            to apply for one
          </p>
        </div>
      </form>
    </section>
  );
}
