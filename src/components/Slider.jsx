import React from "react";

const RangeSlider = ({ min, max, value, step, onChange }) => {
  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = e => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = e => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = (minValue - min) / (max - min) * 100;
  const maxPos = (maxValue - min) / (max - min) * 100;

  return /*#__PURE__*/(
    React.createElement("div", { class: "wrapper" }, /*#__PURE__*/
    React.createElement("div", { class: "input-wrapper" }, /*#__PURE__*/
    React.createElement("input", {
      class: "input",
      type: "range",
      value: minValue,
      min: min,
      max: max,
      step: step,
      onChange: handleMinChange }), /*#__PURE__*/

    React.createElement("input", {
      class: "input",
      type: "range",
      value: maxValue,
      min: min,
      max: max,
      step: step,
      onChange: handleMaxChange })), /*#__PURE__*/



    React.createElement("div", { class: "control-wrapper" }, /*#__PURE__*/
    React.createElement("div", { class: "control", style: { left: `${minPos}%` } }), /*#__PURE__*/
    React.createElement("div", { class: "rail" }, /*#__PURE__*/
    React.createElement("div", {
      class: "inner-rail",
      style: { left: `${minPos}%`, right: `${100 - maxPos}%` } })), /*#__PURE__*/


    React.createElement("div", { class: "control", style: { left: `${maxPos}%` } }))));



};

export default RangeSlider