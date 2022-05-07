import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}) {

    const {id, description} = route.params;

    return (
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#76ff03'}}>
            <Text>Details Screen</Text>
            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <View style={styles.containerButton}>
                <Button 
                    color="#32cb00"
                    title="Tarea 1"
                    onPress={() => navigation.push('Details', {
                        id: 1,
                        description: "Ir de compras",
                    })}
                />
                <Button 
                    color="#32cb00"
                    title="Tarea 2"
                    onPress={() => navigation.push('Details', {
                        id: 2,
                        description: "Jugar Halo"
                    })}
                />
                <Button 
                    color="#32cb00"
                    title="Tarea 3"
                    onPress={() => navigation.push('Details', {
                        id: 3,
                        description: "Asistir a clase"
                    })}
                />
            </View>

            <View style={styles.containerButton}>
                <Button 
                    color="#32cb00"
                    title="Atras"
                    onPress={() => navigation.goBack()}
                />
                <Button 
                    color="#32cb00"
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <Button 
                    color="#32cb00"
                    title="Ir a Details"
                    onPress={() => navigation.push('Details')}
                />
            </View>

            <Button
                color="#32cb00" 
                title="Inicio"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#629749',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;