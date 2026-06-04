import { FriendListItemAvatarStyled, FriendListItemNameStyled, FriendListItemStatusStyled, FriendListItemStyled } from "../styles/Main.styled";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <FriendListItemStyled className="item" key={id} style={{position: "relative"}}>
            <FriendListItemStatusStyled className="status" isOnline={isOnline ? "green" : "red"} ></FriendListItemStatusStyled>
            <FriendListItemAvatarStyled className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendListItemNameStyled className="name">{name}</FriendListItemNameStyled>
        </FriendListItemStyled>
    );
};

export default FriendListItem;