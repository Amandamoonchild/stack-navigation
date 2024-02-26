import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';


export default function Contact() {
    const navigation = useNavigation();
  return (
    <View>
        <Text>Contact</Text>
      <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("Home")}
                
            >
                <Text>Home</Text>
            </TouchableOpacity>
    </View>
  )
}

