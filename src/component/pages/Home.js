import React from 'react'
import testSvg from '../../asets/girl.webp'
const Home = () => {
    return (
        <>

            <div className="col-lg-6 mx-auto">
                <img src={testSvg} style={{ height: "350px" }} />
                <h1 className='display-5 fw-bold px-9 gap-9 lead mb-9'>hello people</h1>
                <p className="lead mb-4 px-4 gap-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis id ex error magni, similique repellendus numquam tempora voluptatum illum. Expedita consequuntur, doloribus explicabo neque sunt iusto vitae. Voluptas, voluptatibus.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-conetent-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Getting info</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3">Getting info</button>

                </div>
            </div>
        </>
    )
}

export default Home
