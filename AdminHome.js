import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const AdminHome = ({ navigation }) => {
    // Ejemplo de tareas pendientes
    const pendingTasks = [
        { id: '1', task: 'Mantenimiento de purificador en ubicación A' },
        { id: '2', task: 'Reemplazo de filtro en purificador B' },
        { id: '3', task: 'Inspección de suavizador C' },
    ];

    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>Bienvenido, Admin</Text>

            {/* Resumen de tareas pendientes */}
            <Text style={styles.subTitle}>Tareas pendientes</Text>
            <FlatList
                data={pendingTasks}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item.task}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            {/* Botones de acceso rápido */}
            <View style={styles.quickActions}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ManageUsers')}
                >
                    <Text style={styles.buttonText}>Gestionar Usuarios</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Reports')}
                >
                    <Text style={styles.buttonText}>Ver Reportes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('MapView')}
                >
                    <Text style={styles.buttonText}>Ver Mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    taskItem: {
        backgroundColor: '#333333',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    taskText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    quickActions: {
        marginTop: 30,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AdminHome;
