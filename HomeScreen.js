import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';


const HomeScreen = ({navigation}) => {

    
  function _onPressPlus() {
    setText(text + 1);
  }

  function _onPressMinus() {
    setText(text - 1)
  }

  const [text, setText] = useState(0);

  return (
    <View style={styles.container}>
        <View style={styles.button}>
          <Button
            onPress={_onPressMinus}
            title={"-"}
          />
          <Button
          style={styles.buttontxt}
            title={text}
          />
          <Button
            onPress={_onPressPlus}
            title={"+"}
          />
        </View>
        <View>
        <Button
        onPress={()=>{navigation.navigate('Profile')}}
          style={styles.buttontxt}
            title={"click"}
          />
        </View>
      </View>

    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row'
  
    },
    buttontxt: {
      borderRadius: '0px'
    }
  });