import React from 'react'

const Entry = () => {
    return (
        <div className='container-fluid vh-100'>
            <div className='row' >
                <div className="col-sm-6" style={{ paddingTop: "30vh" }}>
                    <div className="async d-flex justify-content-evenly">
                        async
                    </div>
                    <p className='tictactoe'>
                        tic tac toe
                    </p>
                </div>
                {/* </div>
            <div className='row' > */}
                <div className="col-sm-6">
                    <div className=' d-flex flex-column gap-3 Epilogue' style={{ paddingTop: "20vh" }}>
                        <div className='w-100 py-3 btn btn-warning text-light'>Login</div>
                        <div className='w-100 py-3 btn btn-primary'>Register</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry