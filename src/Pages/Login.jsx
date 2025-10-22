import React from 'react';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        console.log('click login', email, password)
    }
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto  mt-20 max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] font-semibold text-center mt-5'>Login Now</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            {/* Email */}
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" name='email' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                            {/* password */}
                            <label className="label text-black font-semibold">Password</label>
                            <input type="password" name='password' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />
                            {/* forgot password */}
                            <div className='mt-3'><a className="link link-hover">Forgot password?</a></div>
                            {/* button  */}
                            <button className="btn btn-neutral font-semibold border-none bg-[#02A53B] hover:bg-[#15803D] mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;