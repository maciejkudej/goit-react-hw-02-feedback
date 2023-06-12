import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(key => {
    return (
      <button
        type="button"
        className={css.button}
        key={key}
        onClick={() => onLeaveFeedback(key)}
        name={key}
      >
        {key}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
