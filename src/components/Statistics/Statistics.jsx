import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const randomColor = () => "#" + Math.random().toString(16).substr(2, 6);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>.docx</span>
            <span className={css.percentage}>4%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProp = {
  title: " ",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
