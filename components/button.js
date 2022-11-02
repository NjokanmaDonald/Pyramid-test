import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function CustomButton ({text}) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: '#F5F5F5', 
        width: 70.5,
        height: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
        color: '#111111',
        flex: 'none',
        flexGrow: 0,
    }
})