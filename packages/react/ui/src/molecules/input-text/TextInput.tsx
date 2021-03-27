// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import styles from './TextInput.scss';

// const cx = classNames.bind(styles);

// const propTypes = {
//   type: PropTypes.string,
//   label: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
//   readonly: PropTypes.bool,
//   icon: PropTypes.string,
//   helperText: PropTypes.string,
//   required: PropTypes.bool,
//   onChange: PropTypes.func,
// };

// const defaultProps = {
//   type: 'text',
// };

// export default class TextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFocus: false,
//       isError: false,
//     };
//   }

//   handleChange = (event) => {
//     const { onChange } = this.props;
//     if (onChange) onChange(event, event.target.value);
//   };

//   handleFocus = () => {
//     this.setState({ isFocus: true });
//   };

//   handleBlur = (event) => {
//     const { required } = this.props;
//     this.setState({ isFocus: false });

//     if (required) {
//       this.setState({ isError: event.target.value === '' });
//     }
//   };

//   render() {
//     const {
//       type,
//       label,
//       name,
//       value,
//       placeholder,
//       disabled,
//       readonly,
//       required,
//       icon,
//       helperText,
//     } = this.props;
//     const { isFocus, isError } = this.state;

//     return (
//       <div
//         className={cx('gr-text-input', {
//           focus: isFocus,
//           'is-required': required,
//           error: isError,
//           'has-icon': icon && icon !== '',
//         })}
//       >
//         {label && <label>{label}</label>}
//         <input
//           type={type}
//           name={name}
//           value={value}
//           placeholder={placeholder}
//           disabled={disabled}
//           readOnly={readonly}
//           onFocus={this.handleFocus}
//           onBlur={this.handleBlur}
//           onChange={this.handleChange}
//         />
//         {icon && (
//           <span className="icon">
//             <i className="material-icons">{icon}</i>
//           </span>
//         )}
//         {helperText && <span className="helper-text">{helperText}</span>}
//       </div>
//     );
//   }
// }

// TextInput.propTypes = propTypes;
// TextInput.defaultProps = defaultProps;
