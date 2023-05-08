import { useEffect, useState } from "react";
// import css from "./Home.module.css";
import { getTweetUsers } from "services/api";

import CardsList from "components/CardsList/CardsList";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTweetUsers()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <ul>{<CardsList users={users} />}</ul>
    </div>
  );
};

export default Home;
