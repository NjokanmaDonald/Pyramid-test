import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Footer() {

    return (
        <View style={styles.footer}>
            <Image source={require('../assets/home.png')}/>
            <Image source={require('../assets/Search-icon.png')}/>
            <Image source={require('../assets/plus.png')}/>
            <Image source={require('../assets/Bell-Stroke-Icon.png')}/>
            <Image source={require('../assets/portfolio.png')}/>
        </View>
    )

}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
    }
})