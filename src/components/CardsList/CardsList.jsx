import PropTypes from "prop-types";
// import css from '../../Pages/Home/Home.module.css  ';
// import { Link, useLocation } from 'react-router-dom';

import Card from "components/Card/Card";
const CardsList = ({ users }) => {
  // const { id, user, tweets, followers, avatar } = users;
  //   const location = useLocation();
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <Card item={user} />
        </li>
      ))}
    </div>
  );
};
export default CardsList;

CardsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
