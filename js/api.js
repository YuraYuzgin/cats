const config = {
    baseUrl: 'https://cats.petiteweb.dev/api/single/yurayuzgin/',
};

class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }

    getAllCats = () => {
        return fetch(`${this.baseUrl}show`).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }

    getAllIds = () => {
        return fetch(`${this.baseUrl}ids`).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }

    getCatById = (id) => {
        return fetch(`${this.baseUrl}show/${id}`).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }

    addCat = (cat) => {
        return fetch(`${this.baseUrl}add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cat),
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }

    updateCat = (newCat) => {
        return fetch(`${this.baseUrl}update/${newCat.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCat),
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }

    deleteCat = (id) => {
        return fetch(`${this.baseUrl}delete/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            return res.ok ? res.json() : Promise.reject('у меня лапки');
        });
    }
}

const api = new Api(config);

/* отобразить всех котов */
// api
//     .getAllCats()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/* отобразить все возможные айди котов */
// api
//     .getAllIds()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/* отобразить конкретного кота */
// api
//     .getCatById('2')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/* добавить кота */
// api
//     .addCat({
//         id: 6,
//         name: "6-й кот",
//         image: "https://cs13.pikabu.ru/post_img/2020/12/25/7/1608893927119433898.jpg",
//         age: 4,
//         rate: 2,
//         favorite: true,
//         description: "Усатый"
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/* изменить информацию о коте */
// api
//     .updateCat({
//         id: 4,
//         name: "4-й кот",
//         image: "https://cs13.pikabu.ru/post_img/2020/12/25/7/1608893927119433898.jpg",
//         age: 6,
//         rate: 8,
//         favorite: true,
//         description: "Усатый"
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/* удалить кота из базы данных */
// api
//     .deleteCat('4')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });