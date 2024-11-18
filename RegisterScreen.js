import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>

            <TextInput
                placeholder="Correo electrónico"
                style={styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                placeholder="Confirmar contraseña"
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkButtonText}>Ya tienes cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    title: {
        fontSize: 24,
        color: '#fff',
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
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    linkButton: {
        marginTop: 20,
    },
    linkButtonText: {
        color: '#1E90FF',
        fontSize: 16,
    },
});

export default RegisterScreen;
