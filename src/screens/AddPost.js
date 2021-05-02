import React, {useContext} from 'react'
import {Context} from '../context/BlogContext'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'

const AddPost = ({navigation}) => {
    const { addBlogPost} = useContext(Context);
    return <BlogPostForm param = {{func :addBlogPost}}  navigation = {navigation}/>
}

export default AddPost

const styles = StyleSheet.create({
})
