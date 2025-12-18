import {LOCALSTORAGE , NOTES , notes} from "/note%20app%20with%20js/js/noteAPI.js";
import Ui from "/note%20app%20with%20js/js/notesview.js";

const app = document.querySelector(".app");

const ui = new Ui(app , {
    addnote(){
        console.log("add note");
    },
    noteedit(){
        console.log("edit note");
    },
    noteselect(noteid){
        console.log(noteid)
    }

});


ui.updatenoteitem(NOTES.getNotes())






document.addEventListener('DOMContentLoaded', () => {
    NOTES.setNotes(notes);
    console.log(NOTES.getNotes())
    // NOTES.removeNote(1)

})