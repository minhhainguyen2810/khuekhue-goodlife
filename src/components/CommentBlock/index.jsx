const CommentBlock = ({ name, review }) => (
  <div className="d-flex flex-row mt-3">
    <div className="avatar">
      <div className="m-auto">{name[0]}</div>
    </div>
    <div className="ms-3">
      <p className="text-primary mb-0">
        {name} <span className="text-secondary">Reviewer</span>
      </p>
      <div className="d-flex justify-content-between" style={{ width: "60px" }}>
        <img src="images/star.svg" alt="" width={11} />
        <img src="images/star.svg" alt="" width={11} />
        <img src="images/star.svg" alt="" width={11} />
        <img src="images/star.svg" alt="" width={11} />
        <img src="images/star.svg" alt="" width={11} />
      </div>
      <p className="mt-3">{review}</p>
    </div>
  </div>
);

export default CommentBlock;
