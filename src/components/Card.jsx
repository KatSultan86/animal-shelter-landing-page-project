
import PropTypes from 'prop-types';

function Card({ src, titleName, text }) {
    return (

        <div className="col-4 mb-2">

            <div className="card">
                <img
                    className="card-image-center"
                    src="src/assets/cat-1.jpg"
                    alt="Image"
                />
                <div className="card-body" >
                    <h5 className="card-title">Luna</h5>
                    <h7 className="font-weights fw-bolder ">A curious kitty who loves to explore and snuggle.</h7>
                    <div class="border-top w-85 mx-auto my-3"></div>
                    <p className="card-text mt-3">
                        Luna arrived at our shelter on a rainy night after being found perched on a park bench. Despite her initial shyness, she quickly
                        warmed up to volunteers with her gentle purrs and playfull swats at dangling toys. She dreams of a forever home where she can watch
                        the world from a sunny window.
                    </p>
                </div>
                <div className="card-footer">
                    <div className='container d-flex justify-content-center'>
                        <button className="btn btn-primary btn-sm">Adopt</button>
                    </div>
                </div>


            </div>


        </div>
    );
}



// Card.propTypes = {
//   titleName: PropTypes.string
// }


export default Card;