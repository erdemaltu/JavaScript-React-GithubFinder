import React, {useState,useContext} from 'react'
import NotesContext from '../context/notes-context'


const AddNoteFrom = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const {dispatch} = useContext(NotesContext)
    const addNote = (e) => {
        e.preventDefault();
        if(title){
            // setNotes(
            //     [
            //         ...notes,
            //         {title,body}
            //     ]
            // )
            dispatch({
                type:'ADD_NOTE',
                title,
                body
            })
            setTitle('')
            setBody('')
        }
    }

    return(
        <form onSubmit={addNote}>
                <div className="form-group">
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                    <textarea value={body} onChange={(e)=> setBody(e.target.value)} className="form-control"/>
                </div>
                <button className="btn btn-primary btn-block">Add Note</button>
        </form>
    )
}
export default AddNoteFrom