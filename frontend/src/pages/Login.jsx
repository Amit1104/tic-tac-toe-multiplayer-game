import React from 'react'

const Login = () => {
    return (
        <>
            <div className='container Epilogue'>
                <div className='pt-3 px-3'>
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </div>
                <div className='py-4'>
                    <div >
                        Login
                    </div>
                    <div className='fs-1' style={{ width: "70vw" }}>
                        <b>
                            Please enter your details
                        </b>
                    </div>
                </div>
                <div>
                    <div className='pt-2'>
                        <label for="name" class="form-label">Username</label>
                        <input type="text" class="form-control p-3 border-0 bg-dark bg-opacity-10" id="name" placeholder="Type Username here" />
                    </div>
                    <div className='pt-2'>
                        <label for="name" class="form-label">Password</label>
                        <input type="text" class="form-control p-3 border-0 bg-dark bg-opacity-10" id="name" placeholder="Type Password here" />
                    </div>
                </div>
                <div className='py-5'>
                    <div className='w-100 py-3 btn btn-warning text-light'>Login</div>
                </div>
            </div>
        </>
    )
}

export default Login