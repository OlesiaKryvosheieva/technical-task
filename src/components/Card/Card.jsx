import React, { useState } from "react";
import css from "./Card.module.css";

export const Card = ({ tweets, followers }) => {
  const [newfollowers, setNewFollowers] = useState(followers);
  const [follow, setFollowing] = useState(false);

  const followersWithComma = newfollowers.toLocaleString("en-IN");

  function addFollower() {
    setNewFollowers((prevState) => prevState + 1);
  }
  function removeFollower() {
    setNewFollowers((prevState) => prevState - 1);
  }

  function toggleFollowing() {
    setFollowing(!follow);

    if (follow) {
      return removeFollower();
    } else {
      return addFollower();
    }
  }

  return (
    <div className={css.cardContainer}>
      <img
        src="././images/logo.png"
        alt="Logo"
        width="76px"
        height="22px"
        className={css.logo}
      />
      <img
        src="././images/picture.png"
        alt="Card"
        width="308px"
        height="168px"
        className={css.picture}
      />
      <img
        src="././images/rectangle.png"
        alt="Line"
        width="380px"
        height="8px"
        className={css.line}
      />
      <img
        src="././images/boy.png"
        alt="Avatar"
        width="80px"
        height="80px"
        className={css.avatar}
      />
      <p className={css.tweets}> {tweets} TWEETS</p>
      <p className={css.followers}>{followersWithComma} FOLLOWERS</p>
      {!follow ? (
        <button
          type="button"
          className={css.followBtn}
          onClick={toggleFollowing}
        >
          FOLLOW
        </button>
      ) : (
        <button
          type="button"
          className={css.followingBtn}
          onClick={toggleFollowing}
        >
          FOLLOWING
        </button>
      )}
    </div>
  );
};
