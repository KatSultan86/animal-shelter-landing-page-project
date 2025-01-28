import heroPosts from "./data/heroPosts";
import { useState } from "react";

export default function Hero() {
  const [posts, setPosts] = useState(heroPosts);

  return posts.map((post) => {
    return (
      <div className=" container">
        <div className="d-flex justify-content-between">
          <div className="col-md-7 mt-5 ">
            <div className="font-weights">
              <h1 className="fw-bolder">
                Find Your Perfect
                <span className="text-primary d-block">Companion</span>
              </h1>
              <p className="fw-lighter text-secondary w-75">{post.pText}</p>
            </div>

            {/* button */}
            <div className="btn btn-sm ps-0">
              <div className="hstack gap-2">
                <button type="button" className="btn btn-primary rounded-pill">
                  {post.button1}
                </button>
                <button
                  type="button"
                  className="btn-hero btn btn-outline-primary rounded-pill"
                >
                  {post.button2}
                </button>
              </div>
            </div>

            <div className="d-flex gap-2 mt-4">
              <div className="text-left">
                <div className="font-weights">
                  <h5 className="mb-0 fw-bolder">{post.h5_1}</h5>
                </div>

                <h6 className="mt-0 fw-light text-secondary fs-6">
                  {post.h6_1}
                </h6>
              </div>

              <div className="text-left">
                <div className="font-weights">
                  <h5 className="mb-0 fw-bolder">{post.h5_2}</h5>
                </div>

                <h6 className="mt-0 fw-light text-secondary">{post.h6_2}</h6>
              </div>

              <div className="text-left">
                <div className="font-weights">
                  <h5 className="mb-0 fw-bolder">{post.h5_3}</h5>
                </div>

                <h6 className="mt-0 fw-light text-secondary">{post.h6_3}</h6>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="d-none d-md-block col-md-5 mt-5 d-flex flex-column justify-content-center">
            <div className="">
              <img
                className="rounded rounded-3 w-100 "
                src={post.src}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
}
