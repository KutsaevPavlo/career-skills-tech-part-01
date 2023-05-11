// import { Wrapper, Avatar, Logo, Info, Box, Thumb } from "./Card.styled";
import css from "./Card.module.css";

const Card = ({ item }) => {
  const { user, tweets, followers, avatar } = item;
  return (
    <div className={css.Wrapper}>
      <img className={css.Logo} src={avatar} alt={user} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <button className={css.BtnWrapper}>FOLLOW</button>
    </div>
  );
};
export default Card;
