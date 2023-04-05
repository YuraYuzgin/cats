const generateCatCardPopup = (cat) => {
    return `<div class="modal-cat-card-popup">
                <div class="shadow"></div>
                <div class="cat-card-popup-wrapper">
                    <div class="closeModal closeModal-Card-Popup">X</div>
                    <div class="cat-card-popup">
                        <div class="cat-card-popup-img">
                            <img src="${cat.image || './images/e358ee563f986ebc2090ccc4bd3930cb-cute-simple-doodle-cat.png'}" alt="">
                        </div>
                        <div class="cat-card-popup-name-info">
                            <h3>${cat.name}</h3>
                            <div class="cat-card-popup-info">
                                <div class="age-rate-favorite">
                                    <p>Количество лет: ${cat.age || '...'}</p>
                                    <p>Рейтинг: ${cat.rate || '...'}</p>
                                    <p>Любимчик: ${cat.favorite ? 'да' : 'нет'}</p>
                                </div>
                                <div>
                                    <p>Описание: ${cat.description || '...'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>`
}