import React from 'react'

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center align-items-center min-vh-100'>
                <div className='col-8 col-md-6'>
                    <div className='card shadow-sm p-2 mb-5 bg-white rounded'>
                        <div className='card-body text-center bg-dark'>
                            <img 
                                className='img-fluid mx-auto d-block '
                                src="/images/w.png" 
                                alt="logo" 
                                style={{maxWidth:'150px'}}
                            />
                            <h1 className='text-light'>Enter Room Id</h1>
                            <div className='form-group'>
                                <input type="text" 
                                className='form-control mb-2 '
                                placeholder='Room Id'
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text" 
                                className='form-control mb-2 '
                                placeholder='Username'
                                />
                            </div>
                            <button className='btn btn-success mt-2 btn-lg btn-block'>JOIN</button>
                            <p className='mt-3 text-light'>Don't have room Id? {" "}
                            <span className='text-success p-2'>New Room</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
