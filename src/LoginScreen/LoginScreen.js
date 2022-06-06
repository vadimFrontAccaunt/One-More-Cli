import {Formik} from 'formik';
import {Pressable, View} from 'react-native';
import * as yup from 'yup';
import React, {useContext} from 'react';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledInput} from '../SimpleComponents/Input';
import {StyledText} from '../SimpleComponents/Text';
import {Context} from '../Language/context';

const LoginScreen = () => {
  const [lang, setlang] = useContext(Context);
  const valid = yup.object().shape({
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

  return (
    <View>
      <Formik
        initialValues={{login: null, pass: null}}
        validateOnBlur
        onSubmit={values =>
          alert('login :' + values.login + ' password :' + values.pass)
        }
        validationSchema={valid}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <StyledBlock ml="20px" mt="20px" mr="20px">
            <StyledText fz="20px">{lang.login}</StyledText>
            <StyledInput
              borderWidth="1px"
              onChangeText={handleChange('login')}
              value={values.login}
              onBlur={handleBlur('login')}
            />
            {touched.login && errors.login && (
              <StyledText color="red">{errors.login}</StyledText>
            )}
            <StyledText fz="20px">{lang.password}</StyledText>
            <StyledInput
              borderWidth="1px"
              onChangeText={handleChange('pass')}
              value={values.pass}
              onBlur={handleBlur('pass')}
            />
            {touched.pass && errors.pass && (
              <StyledText color="red">{errors.pass}</StyledText>
            )}
            <Pressable onPress={handleSubmit} disabled={!isValid}>
              <StyledText textAlign="center" mt="20px" fz="20px">
                {lang.send}
              </StyledText>
            </Pressable>
          </StyledBlock>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
