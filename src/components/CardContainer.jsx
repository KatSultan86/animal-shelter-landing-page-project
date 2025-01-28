import Card from "./Card";

export default function CardContainer({ posts }) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row mt-5 g-3">
        {posts.map((post) => (
          <Card
            src={post.src}
            title={post.title}
            titleText={post.titleText}
            text={post.text}
          />
        ))}
      </div>
    </div>
  );
}
