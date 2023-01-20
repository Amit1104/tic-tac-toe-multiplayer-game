import React from 'react'

const Game = () => {
    return (
        <div className='container'>
            <div className='pt-3 px-3'>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </div>
            <div className='py-4'>

                <div className='fs-1' style={{ width: "70vw" }}>
                    <b>
                        Game with Tanmay
                    </b>
                </div>
                <div >
                    Your piece
                </div>
            </div>
            <div className='text-center bg-warning-subtle p-3' >
                Your move
            </div>
            <div className='game d-flex flex-column gap-3 bg-warning-subtle'>
                <div className="row d-flex gap-1  justify-content-around">
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                </div>

                <div className="row d-flex gap-1 justify-content-around">
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                </div>

                <div className="row d-flex gap-1 justify-content-around">
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                    <div className='bg-white' style={{ height: '30vw', width: '30%' }}></div>
                </div>
            </div>
            <div className='py-5'>
                <div className='w-100 py-3 btn btn-warning text-light'>Submit!</div>
            </div>
        </div>
    )
}

export default Game