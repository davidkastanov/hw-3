import { FriendListStyled } from "../styles/Main.styled";
import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => {
    return (
        <FriendListStyled className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />)}
        </FriendListStyled>
    );
};

export default FriendList;