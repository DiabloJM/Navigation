import React from 'react';
import { Button, View, Text} from 'react-native';
import styles from './styles';

function DetailScreen({route, navigation}) {

    const {number, text} = route.params;

    return (
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ec407a'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>Tarea #{number}</Text>
                <Text style={styles.description}>{text}</Text>
            </View>

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

export default DetailScreen;