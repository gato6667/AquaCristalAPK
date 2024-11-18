import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AdminAsistenciaScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Administración de Asistencia</Text>
            <Button
                title="Ver Asistencia"
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
