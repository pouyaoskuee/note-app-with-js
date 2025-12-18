export let notes = [
    {
        id: 1,
        title: 'hello',
        body: 'Lorem Ipsum',
        update:2025 ,
    },
    {
        id: 2,
        title: 'mio',
        body: 'Lorem Ipsum',
        update:2022 ,
    },
    {
        id: 3,
        title: 'pio',
        body: 'Lorem Ipsum',
        update:2023 ,
    }

]




export class NOTES{

    static setNotes(notes){
        LOCALSTORAGE.set(notes);
    }

    static getNotes(){
        const saveNotes = LOCALSTORAGE.get()
        return saveNotes.sort((a,b) => new Date(a.update) > new Date(b.update) ? -1 : 1)
    }


    static updatenotes(notetosave){
        notes = NOTES.getNotes();
        const existedNote = notes.find(note => note.id == notetosave.id)
        if(existedNote){
            notes.title = notetosave.title
            notes.body = notetosave.body
            notes.update = new Date().toISOString()
        }else{
            notetosave.id = new Date().getTime()
            notetosave.update = new Date().toISOString()
            notes.push(notetosave)
        }
        LOCALSTORAGE.set(notes)
    }

    static removeNote(id){
        notes = NOTES.getNotes();
        const filterdnotes = notes.filter(note => note.id !== id)
        LOCALSTORAGE.set(filterdnotes)
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