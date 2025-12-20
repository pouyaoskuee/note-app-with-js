let notes = [
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



localStorage.setItem('notes', JSON.stringify(notes))