import React, {useContext} from 'react'
import { StyleSheet, Image,  Text, View, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state} = useContext(Context);
    return (
        <View>
            <Text>Title : </Text>
            <Text>{state.find((item)=> item.id === id).title }</Text>
            <Text>Description : </Text>
            <Text>{state.find((item)=> item.id === id).description }</Text>
            
        </View>
    )
}
ShowScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight:<TouchableOpacity onPress = { ()=> navigation.navigate('Edit', {id : navigation.getParam('id')})}>
            <Image source = { require('../../assets/bd_edit.png')} style = {{   height : 20, width : 20}}/>
            </TouchableOpacity>
    }
}  
export default ShowScreen

const styles = StyleSheet.create({})
