import {LOCALSTORAGE , NOTES , notes} from "/note%20app%20with%20js/js/noteAPI.js";
import Ui from "/note%20app%20with%20js/js/notesview.js";

export default class APP{
    constructor(root){
        this.notes = [];
        this.activeNotes = null;
        this.ui = new Ui(root , this._handelers());
        this._refreshnotes()
        // this.ui.updateactivenotes()

    }

    _refreshnotes(){
        const notes = NOTES.getNotes();
        this.notes = notes
        this.ui.updatenoteitem(notes);
        this.ui.updatepreviewvisibility(notes.length  > 0);
        this.activeNotes = notes[0];
        this.ui.updateActivenotes = notes[0];
    }

    _handelers(){
        return {
            addnote:()=>{
                const newNotes = {
                    id: 4,
                    title: 'new note',
                    body: 'type some note',
                    update:2025,
                }
                NOTES.updatenotes(newNotes);
                this._refreshnotes()
            },
            noteedit:()=>{
                console.log("edit note");
            },
            noteselect:(noteid)=>{
                const select = notes.find((note) => note.id == noteid);
                this.activeNotes = select;
                this.ui.updateactivenotes(select);
            },

            noteremover:(noteid)=>{
                console.log(noteid)
            }
        }
    }

}


