const products = [
    { id: 1, title: 'Notebook', price: 2000, image: 'notebook.jpg' },
    { id: 2, title: 'Mouse', price: 20, image: 'mouse.jpg' },
    { id: 3, title: 'Keyboard', price: 200, image: 'keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 50, image: 'gamepad.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="./img/${item.image}" ></img>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)); // образуется массив: карточки товаров перечислены через запятую
    console.log(...productsList);
    let products = ""; // между карточками товаров была запятая, так как в HTML записался массив целиком. 
    productsList.forEach(product => { // чтобы запятых не было, необходимо записать элементы массива в строку
        products += product;
    });
    document.querySelector('.products').innerHTML = products;

};

renderPage(products);