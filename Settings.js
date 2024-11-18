import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text>Configuraciones</Text>
            {/* Agregar opciones de configuración */}
            <Button title="Cambiar configuración" onPress={() => {/* lógica */ }} />
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
