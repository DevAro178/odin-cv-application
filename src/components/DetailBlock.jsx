import PropTypes from "prop-types";
export default function DetailBlock({ item = [] }) {
  return (
    <>
      {item && (
        <div className="flex flex-col gap-[10px] my-[15px] border-l-8 border-black pl-[15px]">
          <h3 className="text-lg font-semibold">
            {item.Title} - {item.institution}
          </h3>
          <p>{item.description}</p>
          <p className="text-sm font-semibold">
            {item.skills &&
              item.skills.map((e, i) => (
                <>
                  {i > 0 && (
                    <span key={i} className="mx-[5px]">
                      -
                    </span>
                  )}
                  <span key={i}>{e}</span>
                </>
              ))}
          </p>
        </div>
      )}
    </>
  );
}

DetailBlock.propTypes = {
  item: PropTypes.array.isRequired,
};
