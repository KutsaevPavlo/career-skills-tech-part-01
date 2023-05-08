// import { Wrapper, Avatar, Logo, Info, Box, Thumb } from "./Card.styled";

const Card = ({ item }) => {
  const { user, tweets, followers, avatar } = item;
  return (
    <div>
      <img src={avatar} alt={user} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <button>FOLLOW</button>
    </div>
  );
};
export default Card;
