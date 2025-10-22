import React from 'react';

const SignupPage = () => {

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const image = event.target.image.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log('click to the ', name, image, email, password)
    }
    return (
        <div className=''>
            <div className=" card bg-base-100 w-full mx-auto  mt-20 max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] font-semibold text-center mt-5'>Register Now</h1>
                <div className="card-body">
                    <form onSubmit={handleSignup}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-black font-semibold">Name</label>
                            <input type="text" name='name' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Name" />
                            {/* image url */}

                            <label className="label text-black font-semibold">URL</label>
                            <input type="url" name='image' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Image Url" />
                            {/* Email */}
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" name='email' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                            {/* password */}
                            <label className="label text-black font-semibold">Password</label>
                            <input type="password" name='password' required className="input outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />
                            {/* button  */}
                            <button className="btn btn-neutral font-semibold border-none bg-[#02A53B] hover:bg-[#15803D] mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;