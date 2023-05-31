import PropTypes from 'prop-types';
import css from './Notification.module.scss';

export const Notification = ({ message }) => {
  return <p className={css.description}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
