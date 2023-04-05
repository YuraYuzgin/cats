let locStorage = window.localStorage; // инициализация локального хранилища
let mainSectionContent = document.querySelector('#main .container .row'); // контейнер для всех карточек

// перезапись основной секции с карточками
const refreshCatsAndContent = () => {
    mainSectionContent.innerHTML = '';

    api.getAllCats().then((res) => {
        locStorage.setItem('cats', JSON.stringify(res));
        const cards = res.reduce((acc, el) => (acc += generateCard(el)), '');
        mainSectionContent.insertAdjacentHTML('afterbegin', cards);
    });
}

refreshCatsAndContent();

// Нажатие на кнопки "посмотреть", "изменить", "удалить".
document.querySelector('#main .container .row')
    .addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const cat = getCatFromLocStorage(event.target.value);
            switch (event.target.className) {
                // Посмотреть
                case 'btn cat-card-view':
                    const catCardPopup = generateCatCardPopup(cat);
                    mainSectionContent.insertAdjacentHTML('afterbegin', catCardPopup);

                    // Событие закрытия окна
                    document.querySelector('.closeModal-Card-Popup')
                        .addEventListener('click', () => {
                            document.querySelector('.modal-cat-card-popup').remove();
                        });

                    break;

                // Изменение данных о коте
                case 'btn cat-card-update':
                    // Открыватеся окно с формой, заполненной предыдущими данными
                    const form = document.querySelector('#edit-cat');
                    autocompleteFormData(cat, form);
                    document.querySelector('.modal-form-edit').classList.add('active');

                    // Сохранение новых данных
                    document.forms.editCat.addEventListener('submit', (event) => {
                        event.preventDefault();
                    
                        const body = getFormData();
                        api.updateCat({...body, id: cat.id}).then(() => {
                            deleteCatFromLocalStorage(cat.id);
                            addCatInLocalStorage({...body, id: cat.id});
                            document.querySelector('.modal-form-edit').classList.remove('active');
                            refreshCatsAndContentSync();

                        });
                    });

                    break;

                // Удаление кота
                case 'btn cat-card-delete':
                    api.deleteCat(event.target.value).then(() => {
                        deleteCatFromLocalStorage(event.target.value);
                        refreshCatsAndContentSync();
                    });
                    break;

                default:
                    break;
            }
        }
    });

// Получение данных из формы в виде объекта
const getFormData = () => {
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    if (body.favorite === 'on') body.favorite = true;
    return body;
}

// Автозаполнение формы ранее введёнными данными
const autocompleteFormData = (cat, form) => {
    for (let key in cat) {
        if (key !== 'id') {
            if (form.elements[key].type === 'checkbox') {
                form.elements[key].checked = cat[key];
            } else {
                form.elements[key].value = cat[key];
            }
        }
    }
}

// Событие открытия модального окна для добавления кота
document.querySelector('.add-cat')
    .addEventListener('click', () => {
        document.querySelector('.modal-form-add').classList.add('active');
    });

// Событие закрытия модального окна с формой
document.querySelectorAll('.closeModal').forEach((el) => {
    el.addEventListener('click', (event) => {
        const modalForm = event.target.closest('.create-edit-modal-form-wrapper').parentNode;
        modalForm.classList.remove('active');
    });
});

// Добавление кота
document.forms.addCat.addEventListener('submit', (event) => {
    event.preventDefault();

    const body = getFormData();
    api.addCat({...body, id: getNewIdOfCatSync()}).then(() => {
        addCatInLocalStorage({...body, id: getNewIdOfCatSync()});
        document.querySelector('.modal-form-add').classList.remove('active');
        document.forms.addCat.reset();
        refreshCatsAndContentSync();
    });
});



// асинхронное получение id для нового кота
// const getNewIdOfCat = () => {
//     return api.getAllIds()
//         .then((res) => {
//             if (res.length) {
//                 return Math.max(...res) + 1;
//             } else {
//                 return 1;
//             }
//         });
// }