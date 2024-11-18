import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ManageUsers() {
    return (
        <View style={styles.container}>
            <Text>Gestión de Usuarios</Text>
            {/* Agregar lógica para gestionar usuarios */}
            <Button title="Agregar nuevo usuario" onPress={() => {/* lógica */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
