import {LOCALSTORAGE , NOTES , notes} from "/note%20app%20with%20js/js/noteAPI.js";
// import Ui from "/note%20app%20with%20js/js/notesview.js";
import APP from "/note%20app%20with%20js/js/app.js";

const root = document.querySelector(".app");
const app = new APP(root)




// const ui = new Ui(app , {
//     addnote(){
//         console.log("add note");
//     },
//     noteedit(){
//         console.log("edit note");
//     },
//     noteselect(noteid){
//         console.log(noteid)
//     },
//
//     noteremover(noteid){
//         console.log(noteid)
//     }
//
// });


// app.ui.updatenoteitem(NOTES.getNotes())
// app.updateActivenotes(NOTES.getNotes()[1]);






document.addEventListener('DOMContentLoaded', () => {
    // NOTES.setNotes();
    // console.log(NOTES.getNotes())
    // ui.updatepreviewvisibility(false);
    // NOTES.removeNote(1)

})