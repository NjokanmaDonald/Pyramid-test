import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native' 


export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.notificationBadge}>
                <Image source={require('../assets/Round.jpg')} style={styles.roundImg}/>
                <Image source={require('../assets/Notification-round.png')} style={styles.notification} />
            </View>
            <Text style={styles.title}>Portfolio</Text>
            <Image source={require('../assets/challenge.png')} style={styles.challengeImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
    },

    notificationBadge: {
        marginLeft: 20,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    roundImg:{
       
    },

    notification:{
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontWeight: '700',
        fontSize: 17,
        textAlign: 'center',
        fontStyle: 'normal',
        letterSpacing: -0.3,
        color: '#141619'
    },

    challengeImg:{
        marginRight: 20,
    }
})