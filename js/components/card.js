const generateCard = (cat) => {
    return `<div class="col-lg-3 cat-card">
                <div class="cat-card-img" style="background-image: url('${cat.image || './images/e358ee563f986ebc2090ccc4bd3930cb-cute-simple-doodle-cat.png'}')";>
                <img class="heart" src="./images/${
                    cat.favorite ? 'icons8-heart-32-true.png' : 'icons8-heart-32-false.png'
                }">
                </div>
                <h3>${cat.name}</h3>
                <div class="cat-card-btns">
                    <button type="button" class="btn cat-card-view" value=${cat.id}>Посмотреть</button>
                    <button type="button" class="btn cat-card-update" value=${cat.id}>Изменить</button>
                    <button type="button" class="btn cat-card-delete" value=${cat.id}>Удалить</button>
                </div>
            </div>`
}