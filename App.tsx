import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Caritem from './src/components/caritem';
import { Cars } from './src/res/data';

const App = () => {
  const renderCars = () => {
    const carsComponents = Cars.map(car => {
  return (
    <View style={styles.containers}>
      <ScrollView style={styles.coppy} >
        <Caritem brand={"bbb"} />
        <Caritem 
         brand={car.brand}
         year={car.year}
         price={car.price}
         km={car.km}
         color={car.color}
         />
    
      </ScrollView>
    </View>
  );
};
export default App
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
    marginTop: 5,
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
    marginHorizontal: 5,

  },

});
