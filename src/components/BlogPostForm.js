import React, {useState,useEffect}from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const BlogPostForm = ({navigation, param }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
   useEffect(
       () => { if (param.idParam){
        setTitle (param.titleParam);
        setDescription (param.descriptionParam);
    } }, [])
    return (
        <View>
            <Text> Add title :</Text>
            <TextInput 
            style = {styles.textInput1}
            value = {title}
            onChangeText = { newTerm => setTitle(newTerm) }
            />
            <Text> Add description : </Text>
             <TextInput 
            style = {styles.textInput2}
            value = {description } 
            onChangeText = { newTerm => setDescription(newTerm) }
            />
           <Button
           title = 'Save post'
           onPress = { () => {
               param.func(title, description,param.idParam);
               navigation.pop();
            }}
           />
        </View>
        
    )
}

export default BlogPostForm

const styles = StyleSheet.create({
    textInput1 :{
        width : 200,
        height : 30, 
        borderWidth : 1,
        borderColor : 'black',
        marginBottom : 20
    },
    textInput2 :{
        width : 200,
        height : 200, 
        borderWidth : 1,
        borderColor : 'black'
    }
})
