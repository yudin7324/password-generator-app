import IconArrowRight from '../Icons/IconArrowRight';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ onClick }) {
  return (
    <button className='button' onClick={onClick} aria-label='generate button'>GENERATE <IconArrowRight /></button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
