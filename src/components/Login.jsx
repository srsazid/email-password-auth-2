import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

  const { signInUser } = useContext(AuthContext)


  const handelLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInUser(email,password)
      .then(output=>{
        console.log(output.user)
      })
      .catch(error=>{
        console.error(error)
      })
  }

  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold text-center py-10">Login Now!</h2>
      </div>
      <div className="card w-4/12 mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handelLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <button className="btn btn-primary w-full">Login</button>
          </form>
          <p className="m-auto"> <Link className="underline" to="/register">Register</Link> Your Account</p>

        </div>
      </div>
    </div >
  );
};

export default Login;