import { NOTES } from "/note%20app%20with%20js/js/noteAPI.js";
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
                const newNotes =  {
                    id: 4,
                    title: 'new note',
                    body: 'type some note',
                    update:2025,
                }
                NOTES.updatenotes(newNotes);
                this.notes.push(newNotes);
                this._refreshnotes()
            },
            noteedit:(newtitle , newbody)=>{
                NOTES.updatenotes({
                    id: this.activeNotes.id,
                    title: newtitle,
                    body: newbody
                })
                this._refreshnotes()
            },
            noteselect:(noteid)=>{
                const select = this.notes.find((note) => parseInt(note.id) === parseInt(noteid));
                this.activeNotes = select;
                this.ui.updateactivenotes(select);
            },

            noteremover:(noteid)=>{
                NOTES.removeNote(noteid);
                this._refreshnotes();
            }
        }
    }

}



