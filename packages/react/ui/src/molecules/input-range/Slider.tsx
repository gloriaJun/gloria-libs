// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './slider.css';

// class Slider extends Component {
//   static defaultProps = {
//     min: 0,
//     max: 100,
//     value: 0,
//   };

//   static propTypes = {
//     min: PropTypes.number,
//     max: PropTypes.number,
//     steps: PropTypes.number,
//     onChange: PropTypes.func,
//     disabled: PropTypes.bool,
//   };

//   constructor(props) {
//     super(props);
//     const { percent, value } = this.calc(props.value);
//     this.state = {
//       value,
//       percent,
//     };
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.value !== prevProps.value) {
//       const { percent, value } = this.calc(this.props.value);
//       this.setState({
//         percent,
//         value,
//       });
//     }
//   }

//   calc(
//     value = this.state.value,
//     min = this.props.min,
//     max = this.props.max,
//     steps = this.props.steps,
//   ) {
//     let percent = ((value - min) / (max - min)) * 100;
//     percent = percent > 100 ? 100 : percent < 0 ? 0 : percent;

//     if (steps) {
//       const step = (steps / (max - min)) * 100;
//       const percentWithSteps = Math.round(percent / step) * step;

//       value = parseFloat(
//         ((max - min) * (percentWithSteps / 100) + min).toFixed(4),
//       );
//       return { percent: percentWithSteps, value };
//     } else {
//       return { percent, value };
//     }
//   }

//   handleTouch = (event) => {
//     event.persist();
//     const { percent, value } = this.calcEvent(event);

//     if (event.type === 'touchstart' && percent > -1) {
//       this.setState({
//         percent,
//         value,
//       });
//     } else if (event.type === 'touchmove' && percent > -1) {
//       this.setState({
//         percent,
//         value,
//         moving: true,
//       });
//     } else if (event.type === 'touchend') {
//       this.setState({
//         moving: false,
//       });
//       this.props.onChange &&
//         this.props.onChange(this.state.percent, this.state.value);
//     }
//   };

//   calcEvent(event) {
//     if (!this.rect) {
//       this.rect = event.currentTarget.getBoundingClientRect();
//     }

//     const { min, max, steps } = this.props;
//     const { touches } = event.nativeEvent;

//     if (touches.length) {
//       let percent =
//         ((touches[0].clientX - this.rect.left) / this.rect.width) * 100;
//       percent = percent > 100 ? 100 : percent < 0 ? 0 : percent;

//       let value = (max - min) * (percent / 100) + min;

//       if (steps) {
//         const step = (steps / (max - min)) * 100;
//         const percentWithSteps = Math.round(percent / step) * step;

//         value = parseFloat(
//           ((max - min) * (percentWithSteps / 100) + min).toFixed(4),
//         );
//         return { percent: percentWithSteps, value };
//       } else {
//         return { percent };
//       }
//     } else {
//       return { percent: -1 };
//     }
//   }

//   get styleGrab() {
//     return {
//       left: `${this.state.percent}%`,
//       transition: this.state.moving ? 'none' : 'left 100ms ease-in-out',
//     };
//   }

//   get styleProgress() {
//     return {
//       width: `${this.state.percent}%`,
//       transition: this.state.moving ? 'none' : 'width 100ms ease-in-out',
//     };
//   }

//   render() {
//     return (
//       <div
//         className="slider"
//         onTouchStart={this.handleTouch}
//         onTouchEnd={this.handleTouch}
//         onTouchMove={this.handleTouch}
//       >
//         <div className="slider-bar" />
//         <div className="slider-progress" style={this.styleProgress} />
//         <div className="slider-grab" style={this.styleGrab} />
//       </div>
//     );
//   }
// }

// export default Slider;
