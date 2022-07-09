let btn = document.querySelector('#cat')
let list = document.querySelector('.cat-sublist')


btn.addEventListener('click', (e) => {
    list.classList.toggle('show')
    if (langTable.classList.contains('show')) {
        langTable.classList.remove('show')
    }
    if (user.classList.contains('show')) {
        user.classList.remove('show')
    }
    if (in_div.classList.contains('show')) {
        in_div.classList.remove('show')
        finder.classList.remove('width-s-div')
        try_btn.classList.remove('hide')
    }
})

// Language Table

let langTable = document.querySelector('.table-container')
let langBtn = document.querySelector('.lang-chg-div')

langBtn.addEventListener('click', (e) => {
    langTable.classList.toggle('show')

    if (list.classList.contains('show')) {
        list.classList.remove('show')
    }
    if (user.classList.contains('show')) {
        user.classList.remove('show')
    }
    if (in_div.classList.contains('show')) {
        in_div.classList.remove('show')
        finder.classList.remove('width-s-div')
        try_btn.classList.remove('hide')
    }

    if (list_col.classList.contains('nav-show')) {
        list_col.classList.remove('nav-show')
    }
})


// USER SUB LIST

let user = document.querySelector('.user-sub-con')
let userBtn = document.querySelector('.user-div')

userBtn.addEventListener('click', () => {
    user.classList.toggle('show')

    if (list.classList.contains('show')) {
        list.classList.remove('show')
    }
    if (langTable.classList.contains('show')) {
        langTable.classList.remove('show')
    }
    if (in_div.classList.contains('show')) {
        in_div.classList.remove('show')
        finder.classList.remove('width-s-div')
        try_btn.classList.remove('hide')
    }

    if (list_col.classList.contains('nav-show')) {
        list_col.classList.remove('nav-show')
    }
})



// SEARCH PANEL
let finder = document.querySelector('.search-div')
let in_div = document.querySelector('.in-div')
let try_btn = document.querySelector('.nav-try-free-btn')

finder.addEventListener('click', () => {
    in_div.classList.toggle('show')
    finder.classList.toggle('width-s-div')
    try_btn.classList.toggle('hide')

    if (list.classList.contains('show')) {
        list.classList.remove('show')
    }
    if (langTable.classList.contains('show')) {
        langTable.classList.remove('show')
    }
    if (user.classList.contains('show')) {
        user.classList.remove('show')
    }
})

// Broswer BTN
let b_btn = document.querySelector('.hidden-browse-btn')
let list_col = document.querySelector('.nav-ul')


b_btn.addEventListener('click', () => {
    list_col.classList.toggle('nav-show')

    if (langTable.classList.contains('show')) {
        langTable.classList.remove('show')
    }
    if (user.classList.contains('show')) {
        user.classList.remove('show')
    }
})

