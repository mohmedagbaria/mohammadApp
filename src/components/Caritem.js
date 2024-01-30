import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Caritem = props => {
    const { brand, year, km, price, color } = props;

    return (
        <View style={styles.square2} >
            <View style={styles.topContainer}>
                <View style={[styles.square3, color && { backgroundColor: color }]} ></View>
                <View>
                    <Text style={styles.txt}> {'brand: ' + brand}</Text>
                    <Text style={styles.txt}> {'year: ' + year}</Text>
                    <Text style={styles.txt}> {'km: ' + km}</Text>
                    <Text style={styles.txt}> {'price: ' + price}</Text>
                </View>
            </View>
            <Text style={styles.footer}>My first UI</Text>
        </View>
    )
}

export default Caritem

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    square2: {
        // width: 400,
        // height: 400,
        backgroundColor: 'white',
        borderWidth: 5,
        marginTop: 10,

    },
    square3: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        marginTop: 10,
        marginLeft: 10,

    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 5,
        backgroundColor: 'white',
        color: 'black',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,


    },
    footer: {
        fontSize: 30,
        color: 'green',
        padding: 20,
        textAlign: 'center',
        // borderWidth:1
        fontWeight: 'bold',

    },
    topContainer: {
        flexDirection: 'row'
    },
    coppy: {
        backgroundColor: 'white',
        marginHorizontal: 30,

    },
})