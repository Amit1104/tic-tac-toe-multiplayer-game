import React from 'react'

const Newgame = () => {
    return (
        <div className='container Epilogue'>
            <div className='pt-3 px-3'>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </div>
            <div className='py-4'>
                <div >
                    Start a new Game
                </div>
                <div className='fs-1' style={{ width: "70vw" }}>
                    <b>
                        Whom do you want to play with?
                    </b>
                </div>
            </div>
            <div className='pt-2'>
                <label for="name" class="form-label">Email</label>
                <input type="text" class="form-control p-3 border-0 bg-dark bg-opacity-10" id="name" placeholder="Type Email here" />
            </div>
            <div className='py-5'>
                <div className='w-100 py-3 btn btn-warning text-light'>Start game</div>
            </div>
        </div>
    )
}

export default Newgame