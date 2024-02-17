import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile} =useContext(AuthContext);
const navigate =useNavigate();
  const onSubmit = (data) => {
  
    console.log(data)

    createUser(data.email, data.password)
    .then(result => {
      const loggedUser =result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('ur info in seved')
        reset();
        Swal.fire({
          position: 'top-end',
          title: "Sign in succesfull",
         
          showConfirmButton: false,
          timer:1500
      
        });
        navigate('/')
      })
      .catch(error => console.log(error))
    })


  };
  return (
    <>

      <Helmet>
        <title>Bistro | Sign Up</title>

      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="name" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" required />
                {errors.photoURL && <span>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                })} name="password" placeholder="password" className="input input-bordered" required />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">Password is required</p>
                )}

                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400">Password must be less 20 character</p>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">Password must be 6 character</p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">Password must be a uper case a number and a specail case</p>
                )}


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"> password required</a>

                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign up" />

              </div>
            </form>
            <p><small>Already have an account <Link to="/login"> to Login !</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;