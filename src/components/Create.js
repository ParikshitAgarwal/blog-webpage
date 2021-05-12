import {useState} from 'react'
import { useHistory } from 'react-router'
import { db } from '../firebase'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
    
        setIsPending(true)
        db
        .collection('blogs').add({
            title:title,
            body:body,
            author:author,
            
        })
        .then(() => {
            alert("Blog has been submitted")
            setIsPending(false)
            history.push("/")
 
        })
        .catch((err) => {
            alert(err.message)
        })
 

    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <input 
                type="text" 
                required
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}/>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create
