import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AsistenciaScreen() {
    return (
        <View style={styles.container}>
            <Text>Detalles de Asistencia</Text>
            {/* Aquí puedes agregar más lógica para mostrar o agregar datos */}
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
