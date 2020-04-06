import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";
import generationColor from "../helpers/generationColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.statList}>
        {stats.map((el) => (
          <li
            className={classes.item}
            style={{ background: generationColor() }}
            key={el.id}
          >
            <span className={classes.label}>{el.label}</span>
            <span className={classes.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: "",
};

export default Statistics;
