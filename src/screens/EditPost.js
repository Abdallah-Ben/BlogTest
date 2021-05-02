import React, {useContext} from 'react'
import {Context} from '../context/BlogContext'
import { StyleSheet, View} from 'react-native'
import BlogPostForm from '../components/BlogPostForm'

const EditPost = ({navigation}) => {
    const { state, editBlogPost} = useContext(Context);
    const id = navigation.getParam('id');
    const post = state.find( (item )=> item.id === id )
    const obj = {
        func : editBlogPost,
        titleParam : post.title, 
        descriptionParam : post.description, 
        idParam :post.id
    }
    return (
        <View>
            <BlogPostForm 
            param = {obj}
            navigation = {navigation}
            />
        </View>
    )
}

export default EditPost

const styles = StyleSheet.create({

})
