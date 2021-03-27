// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { boolean } from '@storybook/addon-knobs';

// import { GrTextInput } from '../index';

// storiesOf('Form:TextInput', module)
//   .add('default', () => (
//     <div>
//       <GrTextInput
//         label="Text"
//         onChange={action('onChange')}
//       />
//       <GrTextInput
//         type="email"
//         label="E-mail"
//       />
//       <GrTextInput
//         type="url"
//         label="URL"
//       />
//     </div>
//   ))
//   .add('disabled', () => {
//     const disabled = boolean('disabled', true);

//     return (
//       <div>
//         <GrTextInput
//           placeholder={disabled ? 'disabled' : 'Input Name'}
//           disabled={disabled}
//         />
//         <GrTextInput
//           label="Name"
//           value="This is Value"
//           disabled={disabled}
//         />
//       </div>
//     );
//   })
//   .add('readonly', () => {
//     const readonly = boolean('readonly', true);

//     return (
//       <div>
//         <GrTextInput
//           placeholder={readonly ? 'readonly' : 'Input Name'}
//           readonly={readonly}
//         />
//         <GrTextInput
//           label="Label"
//           value={readonly ? 'readonly' : 'Input Name'}
//           readonly={readonly}
//         />
//       </div>
//     );
//   })
//   .add('reaquired', () => (
//     <div>
//       <GrTextInput
//         label="Label"
//         placeholder="Input Text"
//         required
//       />
//     </div>
//   ))
//   .add('helper text', () => (
//     <div>
//       <GrTextInput helperText="This is helper text" />
//       <GrTextInput
//         label="Username"
//         icon="perm_identity"
//         helperText="This is helper text"
//       />
//       <GrTextInput
//         label="Username"
//         helperText="This is helper text"
//       />
//     </div>
//   ))
//   .add('icon', () => (
//     <div>
//       <GrTextInput
//         label="Username"
//         icon="perm_identity"
//       />
//       <GrTextInput icon="account_circle" />
//       <GrTextInput
//         icon="mail_outline"
//         value="test@abc.com"
//         disabled
//       />
//     </div>
//   ));
