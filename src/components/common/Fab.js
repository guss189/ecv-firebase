import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: "#0000ff",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const isIos = Platform.OS === "ios"

const Fab = ({onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons name={isIos ? "ios-add" : "md-add"} size={32} color="white" />
    </TouchableOpacity>
);

export default Fab;
