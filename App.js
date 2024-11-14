import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';



import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminHome from './screens/AdminHome';
import EmpleadoHome from './screens/EmpleadoHome';
import { View } from 'react-native-web';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Auth con persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const Stack = createStackNavigator();

function HomeScreen(){
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
        <text>HomeScreen</text>
      </View>
  )
  function LoginScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
        <text>HomeScreen</text>
      </View>
    )}}
   
const App = () => {
  const [fontsLoaded] = useFonts({
    'Arial': require('./assets/fonts/Arial.ttf'), // Asegúrate de tener Arial.ttf en assets/fonts
  });

  useEffect(() => {
    const initializeAdmin = async () => {
      const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
      const adminExists = users.some(user => user.role === 'administrador');

      if (!adminExists) {
        const admin = {
          email: 'admin@aquacristal.com',
          password: 'admin123',
          role: 'administrador',
        };
        users.push(admin);
        await AsyncStorage.setItem('users', JSON.stringify(users));
      }
    };

    initializeAdmin();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Oculta la pantalla de carga cuando las fuentes estén listas
    }
  }, [fontsLoaded]);

  // Mantiene la pantalla de carga visible hasta que se carguen las fuentes
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="EmpleadoHome" component={EmpleadoHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
