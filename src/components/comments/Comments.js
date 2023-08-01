import "./comments.scss";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import likeSymbol from "../../assets/images/like.svg";

const baseURL = process.env.REACT_APP_BASE_URL;

const Comments = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const sortedComments = props.selectedSpot.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const { spotId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    axios
      .post(`${baseURL}/skate-spots/${spotId}/comments`, { name, comment })
      .then(() => {
        props.getSpot();
        console.log(props.getSpot());
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="comments">
      <div className="comments-container">
        <h2 className="comments-title">COMMENTS</h2>
        <form
          id="comments-form"
          onSubmit={handleSubmit}
          className="comments__form"
        >
          <div className="comments__form-container">
            <label className="comments__form-label">
              <span className="comments__form-title">WRITE A COMMENT</span>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="comments__form-input--name"
                type="text"
                name="name"
                placeholder="Add your name"
              />
            </label>

            <label className="comments__form-label">
              <input
                onChange={(event) => {
                  setComment(event.target.value);
                }}
                className="comments__form-input"
                type="text"
                name="comment"
                placeholder="Add a comment"
              />
            </label>

            <button type="submit" className="comments-button">
              COMMENT
              <div className="comments-button__horizontal"></div>
              <div className="comments-button__vertical"></div>
            </button>
          </div>
        </form>

        {sortedComments.map((comment) => {
          let time = new Date(comment.timestamp).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          });

          console.log(comment);

          return (
            <div key={comment.id} className="comments__default">
              <article className="comments__default-container">
                <div className="comments__default-sub-container">
                  <div className="comments__default-sub-sub-container">
                    <div className="comments__default-text-container">
                      <h3 className="comments__default-name">{comment.name}</h3>
                      <p className="comments__default-date">{time}</p>
                    </div>
                  </div>
                </div>
                <p className="comments__default-text">{comment.comment}</p>
                <div className="comments__default-like-container">
                  <img
                    className="comments__default-icon"
                    src={likeSymbol}
                    alt="like icon"
                  />
                  <p className="comments__default-likes">{comment.likes}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
