import * as yup from 'yup';

export const valid = yup.object().shape({
  login: yup
    .string()
    .min(7)
    .typeError('Должно быть строкой')
    .required('Обязательно к заполнению'),
  pass: yup
    .string()
    .min(7)
    .typeError('Должно быть строкой')
    .required('Обязательно к заполнению')
    .matches(/[A-Z]/, 'must contain one uppercase')
    .matches(/([a-z])/, 'must contain one lowercase')
    .matches(/(\d)/, 'must contain one number')
    .matches(/(\W)/, 'must contain one special character'),
});
