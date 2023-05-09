import { ListOfCards } from "components/ListOfCards/ListOfCards";
import { Link, useLocation } from "react-router-dom";
import css from "./Tweets.module.css";

const Tweets = () => {
  const location = useLocation();
  return (
    <>
      <div className={css.linkContainer}>
        
        <Link to={location.state?.from ?? "/"} className={css.returnLink}>
          Go back
        </Link>
      </div>

      <ListOfCards />
    </>
  );
};

export default Tweets;
