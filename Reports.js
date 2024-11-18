import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Reports() {
    return (
        <View style={styles.container}>
            <Text>Reportes</Text>
            {/* Agregar lógica para mostrar los reportes */}
            <Button title="Generar Reporte" onPress={() => {/* lógica */ }} />
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
