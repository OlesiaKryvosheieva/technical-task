import React, { useEffect, useState } from "react";
import css from "./Card.module.css";

export const Card = ({ id, url, tweets, followers }) => {
  const [newfollowers, setNewFollowers] = useState(followers);
  const [follow, setFollowing] = useState(false);

  const followersWithComma = newfollowers.toLocaleString("en-US");

  useEffect(() => {
    const newFollow = localStorage.getItem(`btn-${id}`);
    const parsedState = JSON.parse(newFollow);

    if (parsedState && parsedState.follow === true) {
      setFollowing(parsedState.follow);
      setNewFollowers(parsedState.updatefollowers);
    }
    if (parsedState && parsedState.follow === false) {
      setFollowing(parsedState.follow);
      setNewFollowers(parsedState.updatefollowers);
    }
  }, [id]);

  function addFollower() {
    const updatefollowers = followers + 1;
    setNewFollowers(updatefollowers);
    localStorage.setItem(
      `btn-${id}`,
      JSON.stringify({ updatefollowers, follow: true })
    );
  }
  function removeFollower() {
    const updatefollowers = newfollowers - 1;
    setNewFollowers(updatefollowers);
    localStorage.setItem(
      `btn-${id}`,
      JSON.stringify({ updatefollowers, follow: false })
    );
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
        src="././images/ellipse.png"
        alt="Ellipse"
        width="80px"
        height="80px"
        className={css.ellipse}
      />
      <img
        src={url}
        alt="Avatar"
        width="60px"
        height="60px"
        className={css.avatar}
      />
      <p className={css.tweets}> {tweets} TWEETS</p>
      <p className={css.followers}>{followersWithComma} FOLLOWERS</p>

      <button
        type="button"
        className={!follow ? css.followBtn : css.followingBtn}
        onClick={toggleFollowing}
      >
        {!follow ? "FOLLOW" : "FOLLOWING"}
      </button>
    </div>
  );
};
