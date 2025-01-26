

import cardPosts from './data/cardPosts'
import { useState } from 'react'


function Card() {

    const [posts, setPosts] = useState(cardPosts);

    return (
        posts.map(post => {
            return (

                < div className="col-4 mb-2" >

                    <div className="card">
                        <img
                            className="card-image-center"
                            src={post.src}
                            alt="Image"
                        />
                        <div className="card-body" >
                            <h5 className="card-title">{post.title}</h5>
                            <h7 className="font-weights fw-bolder ">{post.titleText}</h7>
                            <div class="border-top w-85 mx-auto my-3"></div>
                            <p className="card-text mt-3">
                                {post.text}
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className='container d-flex justify-content-center'>
                                <button className="btn btn-primary btn-sm">Adopt</button>
                            </div>
                        </div>


                    </div>


                </div >




            )
        })




    );
}


Card.defaultProps = {
    title: 'Default Title',
    titleText: 'Default title text',
    text: 'Default text',
    src: 'src/assets/cat-1.jpg'
}

export default Card;