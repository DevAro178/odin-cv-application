import PropTypes from "prop-types";

export default function IconLink({
  icon = "fa fa-lorem",
  text = "lorem",
  direction = null,
}) {
  return (
    <div className={`flex gap-[10px] align-center ${direction}`}>
      <i className={`mt-auto mb-auto ${icon}`}></i>
      <span>{text}</span>
    </div>
  );
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  direction: PropTypes.string,
};
