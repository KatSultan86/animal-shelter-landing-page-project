

export default function Hero() {
    return (

        <div className=" container-fluid d-flex justify-content-center " >

            <div className="row">

                <div className="col-9 mt-5">
                    <div className="font-weights">
                        <h1 className="fw-bolder">Find Your Perfect <span class="text-primary">Companion</span></h1>
                        <p className="fw-lighter text-secondary">Every pet in our shelter has a story and is waiting for a loving forever home. Start your jorney of a pet adoption today.</p>
                    </div>


                    {/* button */}
                    <div className="btn btn-sm ps-0">
                        <div className="hstack gap-2">
                            <button type="button" className="btn btn-primary rounded-pill">Adopt a Pet</button>
                            <button type="button" className="btn-hero btn btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>


                    <div className="d-flex gap-2 mt-4">

                        <div className="text-left">
                            <div className="font-weights">
                                <h5 className="mb-0 fw-bolder">50+</h5>
                            </div>

                            <h6 className="mt-0 fw-light text-secondary fs-6" >Pets Available</h6>
                        </div>



                        <div className="text-left">
                            <div className="font-weights">
                                <h5 className="mb-0 fw-bolder">200+</h5>
                            </div>

                            <h6 className="mt-0 fw-light text-secondary">Happy Adoptions</h6>
                        </div>

                        <div className="text-left">
                            <div className="font-weights">
                                <h5 className="mb-0 fw-bolder">15+</h5>
                            </div>

                            <h6 className="mt-0 fw-light text-secondary">Years of Service</h6>
                        </div>

                    </div>

                </div>



            </div>



            <div className="col-6 mt-5">
                {/* image */}
                <div className="">
                    <img src="src/assets/animals.jpg" alt="Image" width="100%" height="100%" />
                </div>
            </div>



        </div >



    )
}

// src/assets/animals.jpg" alt="Image" width="100%" height="100%""


{/* <div className="bg-light text-dark py-5 container text-center">
            <div className="left_side">
                <div className="text_section">
                    <h2>Find Your Perfect Companion</h2>
                    <p>Every pet in our shelter has a story and is waiting for a loving forever home.Start your jorney of a pet adoption today.</p>
                </div>
                <div className="button">
                    <button type="button" class="btn btn-primary btn-sm">Small button</button>
                    <button type="button" class="btn btn-secondary btn-sm">Small button</button>
                </div>
                <div className="text_buttom">
                    <h4>50+</h4>
                    <p>Pets Available</p>
                    <h4>200+</h4>
                    <p>Happy Adoptions</p>
                    <h4>15+</h4>
                    <p>Years of Service</p>
                </div>
            </div>
            <div className="right_side">
                <img className="image" src="src/assets/animals.jpg" alt="Image" />
            </div>


        </div> */}