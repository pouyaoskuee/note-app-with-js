export default class UI {
    constructor(root , handlers) {
        const {addnote , noteedit , noteselect , noteremover} = handlers;
        this.root = root;
        this.addnote = addnote;
        this.noteedit= noteedit;
        this.noteselect = noteselect;
        this.noteremover = noteremover;
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
            input.addEventListener("blur", () => {
                const newtitle = title_input.value.trim()
                const newbody = body_input.value.trim()
                noteedit(newtitle, newbody)

            })
        });

        this.updatepreviewvisibility(false)
    }

    _listitem(id , title , body , update){
        const max_length = 50;
        return `
            <div class="sidebar__note" data-id="${id}">
                    <div class="notes__header">
                        <svg class="notes__trash" data-id="${id}">
                            <path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75m-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25M4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/>
                        </svg>
                        <h3>${title}</h3>
                    </div>
                  <p>${body.length > max_length ? `...` : body}</p>
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
            item.addEventListener('click', () => {
                this.noteselect(item.dataset.id);
            })
        })
        note_items.querySelectorAll('.notes__trash').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation()
                this.noteremover(item.dataset.id);

            })
        })

    }

    updateactivenotes(note){
        this.root.querySelector('.main__header').value = note.title
        this.root.querySelector('.main__body').value = note.body

        this.root.querySelectorAll('.sidebar__note').forEach(item => {
            item.classList.remove('selected')
        });

        this.root.querySelector(`.sidebar__note[data-id="${note.id}"]`).classList.add('selected')
    }

    updatepreviewvisibility(visible){
        this.root.querySelector('.main').style.visibility = visible ? 'visible' : 'hidden'

    }

}










