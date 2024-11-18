import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica para el inicio de sesión (validación de correo y contraseña)
        if (email === 'admin@admin.com' && password === '123456') {
            navigation.navigate('AdminHome');  // Redirigir a AdminHome si las credenciales son correctas
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            {/* Título */}
            <Text style={styles.title}>Bienvenido a AquaCristal</Text>

            {/* Campos de texto */}
            <TextInput
                placeholder="Correo electrónico"
                placeholderTextColor="#A9A9A9"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#A9A9A9"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            {/* Botón de inicio de sesión */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            {/* Enlaces a otras pantallas */}
            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Fondo negro
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        color: '#1E90FF', // Azul claro para el título
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 15,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 0,
        borderColor: '#1E90FF',
    },
    loginButton: {
        backgroundColor: '#1E90FF', // Botón azul
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    linkText: {
        color: '#1E90FF',
        fontSize: 16,
        marginTop: 10,
        textDecorationLine: 'underline', // Subrayado para los enlaces
    },
});

export default LoginScreen;
