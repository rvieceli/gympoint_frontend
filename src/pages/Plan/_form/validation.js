import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string().required(),
  duration: Yup.number()
    .integer()
    .required(),
  price: Yup.number()
    .integer()
    .required(),
});
