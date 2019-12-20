import * as Yup from 'yup';
import { startOfDay } from 'date-fns';

export default Yup.object().shape({
  plan_id: Yup.number()
    .integer()
    .positive()
    .required(),
  student_id: Yup.number()
    .integer()
    .positive()
    .required(),
  startDate: Yup.date()
    .min(startOfDay(new Date()))
    .required(),
});
