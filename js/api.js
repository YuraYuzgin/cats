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
