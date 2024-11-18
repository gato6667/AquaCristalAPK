import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EmpleadoHome({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Bienvenido, Empleado</Text>
            <Button
                title="Ver mi Asistencia"
                onPress={() => navigation.navigate('AsistenciaScreen')}
            />
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
