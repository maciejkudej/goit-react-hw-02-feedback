import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, addOne }) => {
  const keys = Object.keys(options);
  return keys.map(key => {
    return (
      <button className={css.button} key={key} onClick={addOne} name={key}>
        {key}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  addOne: PropTypes.func.isRequired,
};
