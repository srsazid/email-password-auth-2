import { Link } from "react-router-dom";

const Register = () => {
    const handelRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        console.log(email, password,name,age);
    }



    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-center py-10">Registration Now!</h2>
            </div>
            <div className="card w-4/12 mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handelRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Type Your Full Name" name="name" className="input input-bordered" required/>
                          
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="date" placeholder="Type Your Age" name="age" className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type Your Email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Create a Password" name="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <button className="btn btn-primary w-full">Register</button>

                    </form>
                    <p className="m-auto"> <Link className="underline" to="/login">Login</Link> Your Account</p>

                </div>
            </div>
        </div >
    );
};

export default Register;