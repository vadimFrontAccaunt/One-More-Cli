import {Formik} from 'formik';
import {Pressable, View, Text} from 'react-native';
import React, {useState} from 'react';
import {valid} from '../../servises/validation/validation';
import {LoginInput} from './LoginInput';
import {StyledText} from '../SimpleComponents/Text';
import {StyledBlock} from '../SimpleComponents/Block';

const LoginScreen = () => {
  const handleAlert = values => {
    alert('login :' + values.login + ' password :' + values.pass);
  };

  const formItemsArray = [
    {valueKey: 'login', label: 'Login'},
    {valueKey: 'pass', label: 'Password'},
  ];

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
          <StyledBlock ml="20px" mt="20px" mr="20px">
            {formItemsArray.map(item => (
              <LoginInput
                key={item.label}
                lable={item.label}
                onChangeText={handleChange(item.valueKey)}
                onBlur={handleBlur(item.valueKey)}
                value={values[item.valueKey]}
                errors={errors[item.valueKey]}
                touched={touched[item.valueKey]}
              />
            ))}
            <Pressable onPress={handleSubmit} disabled={!isValid}>
              <StyledText textAlign="center" mt="20px" fz="20px">
                Send
              </StyledText>
            </Pressable>
          </StyledBlock>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
