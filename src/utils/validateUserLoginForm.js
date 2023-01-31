export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }
  if (values.username.length < 6) {
    errors.username = 'Must be at least 6 characters.';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  if (values.password.length < 8) {
    errors.password = 'Must be atleast 8 characters';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  return errors;
};
