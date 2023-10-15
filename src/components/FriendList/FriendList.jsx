import {
  FriendsList
} from 'components/FriendList/FriendList.styled';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList class="friend-list">
      {friends.map(({avatar, name, isOnline, id} )=> (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};

