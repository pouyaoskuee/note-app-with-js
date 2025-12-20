


let notes =[]




export class NOTES{

    static setNotes(notes){
        LOCALSTORAGE.set(notes);
    }

    static getNotes(){
        const saveNotes = LOCALSTORAGE.get()
            return saveNotes.sort((a,b) => new Date(a.update) > new Date(b.update) ? -1 : 1)

    }


    static updatenotes(notetosave){
        const existedNote = notes.find(note => parseInt(note.id) == parseInt(notetosave.id))
        if(existedNote){
            existedNote.title = notetosave.title
            existedNote.body = notetosave.body
            existedNote.update = new Date().toISOString()
        }else{
            notetosave.id = new Date().getTime()
            notetosave.update = new Date().toISOString()
            notes.push(notetosave)
        }
        LOCALSTORAGE.set(notes)
    }

    static removeNote(id){
        const filterdnotes = notes.filter(note => note.id !== parseInt(id))
        LOCALSTORAGE.set(filterdnotes)
        notes = NOTES.getNotes();
    }


}


export class LOCALSTORAGE{
    static set(notes){
        return localStorage.setItem('notes', JSON.stringify(notes))
    }

    static get(){
        return JSON.parse(localStorage.getItem('notes'))
    }
}