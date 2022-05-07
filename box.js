import React from 'react';
import {Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function box({children}){

    const navigation = useNavigation();

    return (

        <View style={styles.box}>
            <Text style={styles.boxText}>Tarea #{children.title}</Text>
            <Button
                color="#98ee99"
                title="Press"
                onPress={() => navigation.push('Details', {
                    number: children.title,
                    text: children.description
                })}
            />
        </View>
    );    
}

box.propTypes = {
    children: PropTypes.node.isRequired,
};


export default box;