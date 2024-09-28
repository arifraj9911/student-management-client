import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
        toast.success("User create successfully");
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSubmit = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        toast.success("user login successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="w-1/4 mx-auto border rounded-md flex flex-col  justify-center items-center py-10  mt-20">
      <h2 className="text-3xl mb-6 ">Register</h2>
      <form onSubmit={handleRegister} className="w-full px-6 space-y-4">
        <div className="flex flex-col w-full gap-2">
          <label className="" htmlFor="Name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="py-2 px-3 w-full border rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="" htmlFor="Email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="py-2 px-3 w-full border rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="py-2 px-3 w-full border rounded-md outline-none"
          />
        </div>
        <div className="flex justify-start">
          <input
            type="submit"
            value="Register"
            className="py-3 w-full rounded-md  px-4 bg-blue-500 text-white "
          />
        </div>
      </form>
      <p className="my-4 "> Or</p>
      <div>
        <button onClick={handleGoogleSubmit} className=" py-2 px-4 ">
          <FcGoogle className="text-5xl" />
        </button>
      </div>

      <p className="mt-4">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
