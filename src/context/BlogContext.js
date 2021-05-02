import createDataContext from './createDataContext'
import jsonserver from '../API/jsonServer';

const blogReducer = (state, action)=>{
    switch (action.type) {
        case 'get_blogpost' : 
            return action.payload ;
        case 'add_blogPost' : 
            // return [...state, 
            // {id : Math.floor(Math.random() * 999) ,
            //  title : action.payload.title,
            //  description : action.payload.description}];
            
        case 'delete_blogPost' : 
            return state.filter(item => item.id !== action.payload);
        case 'edit_blogPost' :{
            return state.map( item => {
                return item.id === action.payload.id  ? action.payload : item} )
            }
            default :
        return state;
    }
} 

const getBlogPost = (dispatch) => {
     return async ()=> {
            const response = await jsonserver.get('/blogpost'); 
            dispatch(  {type : "get_blogpost" , payload : response.data});
        }
    

}
const addBlogPost = (dispatch)=>{
    return (
        async (title, description) => {
            await jsonserver.post('/blogpost',{title, description})
          //  dispatch ( {type : 'add_blogPost', payload : {title, description} });
        }
        ) 
}
const editBlogPost = (dispatch)=>{
    return (
        async (title, description,id) => {
            await jsonserver.put(`/blogpost/${id}`,{title, description}) 
            dispatch ( {type : 'edit_blogPost', payload : {id, title, description} });
        }
        ) 
}
const deleteBlogPost = (dispatch)=>{
    return (
        async (id) => {await jsonserver.delete(`/blogpost/${id}`) 
         dispatch ( {type : 'delete_blogPost', payload : id})
        }) 
} 
export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost, getBlogPost},[]);

