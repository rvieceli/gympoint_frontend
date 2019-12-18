import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  age: Yup.number()
    .integer()
    .positive(),
  weight: Yup.number().positive(),
  height: Yup.number().positive(),
});
