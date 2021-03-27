// import React from 'react';
// import PropTypes from 'prop-types';

// import NumberUtils from './NumberUtils';

// const noop = () => {};
// const isNumericKey = (key) => /^[\d.+-]$/.test(key);
// const isNumeric = (value) =>
//   value === '' ||
//   /^0?[+-]0*$/.test(value) || // Starting with a plus/minus
//   /^[+-]?\d*\.$/.test(value); // Ending with a dot
// const removeSpecialChar = (str) => str.replace(/[,/]/gi, '');
// const toCurrency = (str) => NumberUtils.numberFormat(str, 0);

// const defaultProps = {
//   id: null,
//   name: null,
//   value: '',
//   defaultValue: '',
//   onChange: noop,
// };

// const propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   onChange: PropTypes.func,
// };

// const InputNumber = ({
//   id,
//   name,
//   value,
//   onChange,
//   defaultValue,
//   validate,
//   format,
//   ...props
// }) => {
//   const handleKeyPress = (e) => {
//     const { key } = e;
//     if (!isNumericKey(key)) {
//       e.preventDefault();
//     }
//   };

//   const handleChange = (e) => {
//     const {
//       target: { value },
//     } = e;
//     const inputValue = removeSpecialChar(value);

//     if (isNumeric(inputValue) && validate(inputValue)) {
//       onChange(
//         /^[+-]?\d*\.$/.test(inputValue)
//           ? inputValue
//           : NumberUtils.toNumber(inputValue, defaultValue),
//         e,
//       );
//     }
//   };

//   return (
//     <input
//       type="text"
//       id={id}
//       name={name || id}
//       value={format(value)}
//       onChange={handleChange}
//       onKeyPress={handleKeyPress}
//       {...props}
//     />
//   );
// };

// InputNumber.defaultProps = {
//   ...defaultProps,
//   validate: toCurrency,
//   format: (value) => value,
// };
// InputNumber.propTypes = {
//   ...propTypes,
//   validate: PropTypes.func,
//   format: PropTypes.func,
// };

// export { defaultProps, propTypes };
// export default InputNumber;
