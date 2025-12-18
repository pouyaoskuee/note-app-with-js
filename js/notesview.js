export default class UI {
    constructor(root , handlers) {
        const {addnote , noteedit , noteselect} = handlers;
        this.addnote = addnote;
        this.noteselect = noteselect;
        this.root = root;
        this.root.innerHTML = `
        <aside class="aside">
            <div class="sidebar">
                <h1>note app</h1>
                <div class="sidebar__notes">
                </div>
                <form class="sidebar__form">
                    <button class="add-note">add note</button>
                </form>
            </div>
        </aside>

        <main class="main">
            <div class="main__notes">
                <form class="main__form">
                    <input class="main__header" type="text" placeholder="new note">
                    <textarea class="main__body"> take a note</textarea>
                </form>
            </div>
        </main>`

        const addNote = document.querySelector(".add-note")
        const title_input = document.querySelector(".main__header")
        const body_input = document.querySelector(".main__body")


        addNote.addEventListener("click", (e) => {
            e.preventDefault()
            addnote()
        });

        [title_input, body_input].forEach((input) => {
            input.addEventListener("blur", (e) => {
                const newtitle = title_input.value.trim()
                const newbody = body_input.value.trim()
                noteedit(newtitle, newbody)

            })
        });
    }

    _listitem(id , title , body , update){
        const max_length = 50;
        return `
            <div class="sidebar__note" data-id="${id}">
                   <h3>${title}</h3>
                  <p>${body.length > max_length ? '...' : '' }</p>
                 <p>${new Date(update).toLocaleString('en', {dateStyle:'full', timeStyle:"short"})}</p>
            </div>`
    }

    updatenoteitem(notes){
        const note_items = document.querySelector(".sidebar__notes");
        note_items.innerHTML = ''
        let result=''
        for (let note of notes){
            const {id, title, body , update} = note
            result += this._listitem( id , title, body , update );
        }
        note_items.innerHTML = result;
        note_items.querySelectorAll('.sidebar__note').forEach(item => {
            item.addEventListener('click', (e) => {
                this.noteselect(item.dataset.id);
            })
        })

    }

}










