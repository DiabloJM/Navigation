import React from 'react';
import  {Button,View, Text} from 'react-native';
import styles from './styles';
import Box from './box';


function Menu({navigation}) {
    const tasks = [
        {title:1, description:"Hacer Tarea"},
        {title:2, description:"Ir al GYM"},
        {title:3, description:"Comprar comida"},
        {title:4, description:"Lavar Ropa"},
        {title:5, description:"Pagar Renta"},
        {title:6, description:"Llamar a mama"},
        {title:7, description:"Enviar Reporte"},
        {title:8, description:"Pagar Internet"},
        {title:9, description:"Dormir"}
    ];

    const listTasks = tasks.map((task) => 
        <Box>{task}</Box>
    );

    return (
        <View>
            <View style={styles.boxContainer}>{listTasks}</View>

            <View style={styles.footer}>
                <Button 
                    title="Atras"
                    onPress={() => navigation.goBack()}
                />
                <Button 
                    title="Home"
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </View>
    );
}

export default Menu;