import PropTypes from "prop-types";
import IconLink from "./IconLink";

export default function List({ items = [] }) {
  return (
    <div>
      {items.length > 0 &&
        items.map((item, index) => (
          <IconLink
            key={index}
            icon={item.icon}
            text={item.text}
            direction={item.direction}
          />
        ))}
    </div>
  );
}
List.propTypes = {
  items: PropTypes.array.isRequired,
};
