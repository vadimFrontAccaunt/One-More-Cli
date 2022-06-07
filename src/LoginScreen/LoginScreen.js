import {Formik} from 'formik';
import {Pressable, View, Text} from 'react-native';
import * as yup from 'yup';
import React, {useState} from 'react';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledInput} from '../SimpleComponents/Input';
import {StyledText} from '../SimpleComponents/Text';
import {valid} from '../../servises/validation/validation';
import {LoginInput} from './LoginInput';

const LoginScreen = () => {
  const handleAlert = values => {
    alert('login :' + values.login + ' password :' + values.pass);
  };
  const newArr = [
    {valueKey: 'login', value: null},
    {valueKey: 'pass', value: null},
  ];

  console.log(newArr);

  return (
    <View>
      <Formik
        initialValues={{login: null, pass: null}}
        validateOnBlur
        onSubmit={handleAlert}
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
          (newArr[0].value = values.login),
          (newArr[1].value = values.pass)(
            newArr.map(i => <Text>{i.valueKey}</Text>),
          )
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
