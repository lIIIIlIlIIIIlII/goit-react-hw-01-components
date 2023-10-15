import { FcOk, FcCancel } from "react-icons/fc";
import {
  FrienfsListItem, FriendsStatus, FriendsAvatar, FriendsName
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
     <FrienfsListItem class="item">
              <FriendsStatus class="status">{isOnline?<FcOk />  : <FcCancel />  }</FriendsStatus>
              <FriendsAvatar class="avatar" src={avatar} alt="User avatar" width="48" />
              <FriendsName class="name">{ name }</FriendsName>
      </FrienfsListItem>
    </>
  );
};

