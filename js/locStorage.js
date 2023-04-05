/* функции для работы с локальным хранилищем  */

// получаем всех котов из локального хранилища и преобразуем в объект
const getCatsFromLocStorage = () => {
    return JSON.parse(locStorage.getItem('cats'));
}

// получаем одного кота из локального хранилища и преобразуем в объект
const getCatFromLocStorage = (id) => {
    return getCatsFromLocStorage().find((el) => el.id == id);
}

// синхронная перезапись основной секции с карточками
const refreshCatsAndContentSync = () => {
    mainSectionContent.innerHTML = '';

    const cards = getCatsFromLocStorage().reduce((acc, el) => (acc += generateCard(el)), '');
    mainSectionContent.insertAdjacentHTML('afterbegin', cards);
}

// добавляем кота в локальное хранилище (полностью перезаписываем 'cats')
const addCatInLocalStorage = (cat) => {
    locStorage.setItem(
        'cats',
        JSON.stringify([...getCatsFromLocStorage(), cat])
    );
}

// удалаяем кота из локального хранилища
const deleteCatFromLocalStorage = (catId) => {
    locStorage.setItem(
        'cats',
        // берём данные из хранилища => отфильтровываем элемент с переданным id => записываем данные в хранилище
        JSON.stringify(getCatsFromLocStorage()
            .filter((el) => el.id != catId))
    );
}

// создаём id для нового кота (синхронно)
const getNewIdOfCatSync = () => {
    let cats = getCatsFromLocStorage();
    if (cats.length) {
        return Math.max(...cats.map((cat) => cat.id)) + 1;
    } else {
        return 1;
    }
}