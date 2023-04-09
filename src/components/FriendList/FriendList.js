import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (<ul className={css["friend-list"]}>
    {friends.map(friend => <FriendListItem key={friend.id} {...friend}/>)}
  </ul>);
};

export default FriendList;

FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    })) 
}