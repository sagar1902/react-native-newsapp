import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Button
        onPress={()=>{navigation.navigate('Home')}}
          style={styles.buttontxt}
            title={"click"}
          />
        </View>
    </View>
    
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})