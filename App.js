import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Pantalla de login
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Pantalla de olvido de contraseña
import RegisterScreen from './screens/RegisterScreen'; // Pantalla de registro
import AdminHome from './screens/AdminHome'; // Pantalla principal de Admin
import EmpleadoHome from './screens/EmpleadoHome'; // Pantalla principal de Empleado

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="EmpleadoHome" component={EmpleadoHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
