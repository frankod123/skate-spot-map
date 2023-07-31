import "./comments.scss";

const Comments = (props) => {
  return (
    <section className="comments">
      <div className="comments-container">
        <h2 className="comments-title">Comments</h2>
        <form id="comments-form" className="comments__form">
          <div className="comments__form-container">
            <div className="comments__form-sub-container">
              <label className="comments__form-label">
                <span className="comments__form-title">WRITE A COMMENT</span>
                <input
                  className="comments__form-input"
                  type="text"
                  name="newComment"
                  placeholder="Comment here"
                />
              </label>
            </div>
            <button type="submit" className="comments__form-button">
              COMMENT
            </button>
          </div>
        </form>

        {props.selectedSpot.comments.map((comment) => {
          let time = new Date(comment.timestamp).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <div key={comment.id} className="comments__default">
              <article className="comments__default-container">
                <div className="comments__default-sub-container">
                  <div className="comments__default-sub-sub-container">
                    <h3 className="comments__default-name">{comment.name}</h3>
                    <p className="comments__default-date">{time}</p>
                    <p className="comments__default-date">{comment.likes}</p>
                  </div>
                </div>
                <p className="comments__default-text">{comment.comment}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
