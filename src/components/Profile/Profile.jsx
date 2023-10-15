import {
  ProfileCard, DescriptionCard, UserAvatar, UserName, UserTag, UserLocation, UserStats, UserStatsList, UserStatsListName, UserStatsListQuantity

} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileCard class="profile">
  <DescriptionCard class="description">
    <UserAvatar
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <UserName class="name">{username}</UserName>
    <UserTag class="tag">@{tag}</UserTag>
    <UserLocation class="location">{location}</UserLocation>
  </DescriptionCard>

  <UserStats class="stats">
    <UserStatsList>
      <UserStatsListName class="label">Followers</UserStatsListName>
      <UserStatsListQuantity class="quantity">{stats.followers}</UserStatsListQuantity>
    </UserStatsList>
    <UserStatsList>
      <UserStatsListName class="label">Views</UserStatsListName>
      <UserStatsListQuantity class="quantity">{stats.views}</UserStatsListQuantity>
    </UserStatsList>
    <UserStatsList>
      <UserStatsListName class="label">Likes</UserStatsListName>
      <UserStatsListQuantity class="quantity">{stats.likes}</UserStatsListQuantity>
    </UserStatsList>
  </UserStats>
</ProfileCard>
}