import css from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.loadMoreBtn}>
      LOAD MORE{" "}
    </button>
  );
};
