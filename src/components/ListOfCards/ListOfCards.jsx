import { Card } from "components/Card/Card";
import { getUsers } from "operations/UsersApi";
import { useEffect, useState } from "react";
import React from "react";
import css from "./ListOfCards.module.css";
import { LoadMore } from "components/LoadMore/LoadMore";

export const ListOfCards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      const newUsers = await getUsers(page);
      setUsers(() => {
        if (page === 1) {
          return newUsers;
        } else {
          return [...(users || []), ...newUsers];
        }
      });
    }

    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function onLoadMoreClick() {
    const newPage = page + 1;
    setPage(newPage);
  }

  return (
    <>
      <div className={css.listOfCards}>
        {users?.map((user) => {
          return (
            <Card
              key={user.id}
              tweets={user.tweets}
              followers={user.followers}
            />
          );
        })}
      </div>
      {users.length < 15 && <LoadMore onClick={onLoadMoreClick} />}
    </>
  );
};
