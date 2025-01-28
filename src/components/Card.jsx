function Card({ src, title, titleText, text }) {
  return (
    <div className="col-12 col-md-4 mb-2">
      <div className="card h-100">
        <img className="card-img-top " src={src} alt="Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h7 className="font-weights fw-bolder ">{titleText}</h7>
          <div class="border-top w-85 mx-auto my-3"></div>
          <p className="card-text mt-3">{text}</p>
        </div>
        <div className="card-footer">
          <div className=" d-flex justify-content-center">
            <button className="btn btn-primary btn-sm">Adopt</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: "Default Title",
  titleText: "Default title text",
  text: "Default text",
  src: "src/assets/cat-1.jpg",
};

export default Card;
