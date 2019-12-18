import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  age: Yup.number()
    .integer()
    .positive()
    .required(),
  weight: Yup.number()
    .positive()
    .required(),
  height: Yup.number()
    .positive()
    .required(),
});
