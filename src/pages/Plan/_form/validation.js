import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string().required(),
  duration: Yup.number()
    .integer()
    .positive()
    .required(),
  price: Yup.number()
    .positive()
    .required(),
});
