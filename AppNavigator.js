import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminHome from './screens/AdminHome';
import EmpleadoHome from './screens/EmpleadoHome';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />  {/* Aquí está registrada */}
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="AdminHome" component={AdminHome} />
                <Stack.Screen name="EmpleadoHome" component={EmpleadoHome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
