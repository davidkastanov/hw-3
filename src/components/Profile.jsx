import { ProfileDescriptionImgStyled, ProfileDescriptionLocationStyled, ProfileDescriptionNameStyled, ProfileDescriptionStyled, ProfileDescriptionTagStyled, ProfileLabelStyled, ProfileQuantityStyled, ProfileStatsStyled, ProfileStatStyled, ProfileStyled } from "../styles/Main.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileStyled className="profile">
            <ProfileDescriptionStyled className="description">
                <ProfileDescriptionImgStyled
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <ProfileDescriptionNameStyled className="name">{username}</ProfileDescriptionNameStyled>
                <ProfileDescriptionTagStyled className="tag">@{tag}</ProfileDescriptionTagStyled>
                <ProfileDescriptionLocationStyled className="location">{location}</ProfileDescriptionLocationStyled>
            </ProfileDescriptionStyled>

            <ProfileStatsStyled className="stats">
                <ProfileStatStyled>
                    <ProfileLabelStyled className="label">Followers</ProfileLabelStyled>
                    <ProfileQuantityStyled className="quantity">{stats.followers}</ProfileQuantityStyled>
                </ProfileStatStyled>
                <ProfileStatStyled>
                    <ProfileLabelStyled className="label">Views</ProfileLabelStyled>
                    <ProfileQuantityStyled className="quantity">{stats.views}</ProfileQuantityStyled>
                </ProfileStatStyled>
                <ProfileStatStyled>
                    <ProfileLabelStyled className="label">Likes</ProfileLabelStyled>
                    <ProfileQuantityStyled className="quantity">{stats.likes}</ProfileQuantityStyled>
                </ProfileStatStyled>
            </ProfileStatsStyled>
        </ProfileStyled>
    );
};

export default Profile;