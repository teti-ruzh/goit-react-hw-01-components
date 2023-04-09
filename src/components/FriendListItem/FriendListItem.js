import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (<li className={css.item}>
    <span className={clsx(css.status, {[css.online]: isOnline})}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>);
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}