import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from './button';
import Footer from './Footer';


export default function Content() {

    return (
        <View style={styles.content}>
            <View style={styles.portfolioBalance}>
                <Text style={styles.portfolioBalance1}>Portfolio Balance</Text>
                <Text style={styles.portfolioBalance2}>$38,552</Text>
                <Text style={styles.portfolioBalance3}>+$1,439.58(3.88%)</Text>
            </View>
            <Image source={require('../assets/Vector-62.png')} style={styles.vectorImage}/>
            
            <View style={styles.timeDate}>
                <Text>1H</Text>
                <Text>1D</Text>
                <Text>1W</Text>
                <Text>1M</Text>
                <Text>All</Text>
            </View>

            <View style={styles.moreOptions}>
                <CustomButton text='Overview' style={styles.option} color='#111111'/>
                <CustomButton text='Arts' style={styles.option} color='#111111'/>
                <CustomButton text='Crypto' style={styles.option} color='#111111'/>
                <CustomButton text='Stocks' style={styles.option} color='#111111'/>
                <CustomButton text='Estate' style={styles.option} color='#111111'/>
            </View>

            <View style={styles.box1}>
                <Text style={styles.box1Text1}>
                    Invested in assets
                </Text>

                <Text style={styles.box1Text2}>
                    $38,650.31
                </Text>
            </View>

            <View style={styles.box2}>
                <Text style={styles.box2Text1}>
                    Cash Balance
                </Text>

                <Text style={styles.box2Text2}>
                    $650.31
                </Text>
            </View>

            <View style={styles.personalInfo}>
                <View style={styles.personalInfoBox}>
                    <Text style={styles.personalInfoText}>
                        Account Details
                    </Text>
                </View>

                <View>
                    <Image source={require('../assets/Right-Arrow-Icon.png')}/>
                </View>
            </View>

            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
       margin: 15,
    },

    portfolioBalance:{

    },

    portfolioBalance1: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color: '#707070',
        flex: 'none',
        order: 1,
        flexGrow: 0,
    },

    portfolioBalance2: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
        letterSpacing: -0.5,
        color: '#111111',
        flex: 'none',
        order: 1,
        flexGrow: 0,
    },

    
    portfolioBalance3: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color: '#00FF7F',
        flex: 'none',
        order: 2,
        flexGrow: 0,
    },

    vectorImage: {
        width: 350,
        height: 290,
        objectFit: 'cover',
    },

    timeDate: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    moreOptions: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5, 
    }, 

    option: {
        borderWidth: 1,
        color: '#F5F5F5',
        
    },

    box1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#CFCFCF',
        borderRadius: 10,
        padding: 15,
    },

    box1Text1: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#707070',
    },

    box1Text2: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#111111',
    },

    box2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#CFCFCF',
        borderRadius: 10,
        padding: 15,
    },

    box2Text1: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#707070',
    },

    box2Text2: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#111111',
    },

    personalInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#CFCFCF',
        borderRadius: 10,
        margin: 5,
        padding: 15,
    },

    personalInfoBox: {

    },

    personalInfoText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#111111',
    }

})