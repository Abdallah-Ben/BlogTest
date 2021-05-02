import React, {useContext, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'

const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost, getBlogPost} = useContext(Context);
     
    useEffect(() => {
          getBlogPost();
     const listner = navigation.addListener('didFocus',() => {
        getBlogPost();
       })
          return ()=> listner.remove();
        }, [])
    return (
        <View>
            <FlatList
            data = {state}
            keyExtractor = {(key)=> key.title }
            renderItem = { ({item}) =>{
                return (
                    <View style = {styles.view} >
                <TouchableOpacity onPress = { ()=> navigation.navigate("Show",{id :item.id }) }>
                    <Text style = {styles.text} >{item.title} </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=> deleteBlogPost(item.id)}>
                    <Image source = { require('../../assets/trash.png')} style = {styles.image} /> 
                </TouchableOpacity>
                    </View>
                )
            }
            }
            />
        </View>
    )
}
IndexScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight :  
        <TouchableOpacity 
            onPress = { () => navigation.navigate('AddPost')} >
            <Image source = { require('../../assets/plus.png')} style = {{ height : 20, width : 20}} />
        </TouchableOpacity> 
    }
}

const styles = StyleSheet.create({
    image : {
        height : 20, width : 20
    },
    view : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderBottomWidth : 1,
        borderColor : 'green'
    },
    text :{
        fontSize : 15
    }
})
export default IndexScreen