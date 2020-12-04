import React from "react";
import "./card.css";

function Card({ Logo, Title, media, subTitle }) {
  return (
    <>
      <div className="card-main">
        <label className="title-top-description">
          <img src={Logo} alt="logo" className="logo" />
          <span className="logo-title p">{Title}</span>
        </label>
        {media && (
          <img src={media} alt="media-content" className="media-content" />
        )}

        <div className="main-card-body">
          <p className="title-label">{subTitle}</p>
          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et tortor a nisi convallis congue eu sit amet leo. Suspendisse
            varius non nunc sit amet cursus. Maecenas urna urna, mollis auctor
            ornare nec, hendrerit vitae metus. Proin rhoncus justo et arcu
            tempor condimentum.
          </p>
          <p className="btn-hooper">
            <span className="tablet subway-item">Repost</span>
            <span className="tablet margin-tab">Share</span>
          </p>
          <p className="text-input">
            <label className="input-flex-main">
              <span className="abbrev">F</span>
              <input
                type="text"
                className="search"
                placeholder="Add a comment"
              />
            </label>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
