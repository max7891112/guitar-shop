class Products {

    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, img, price}) => {
            
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <span class="products-element__img"><img src="${img}" /></span>
                    <span class="products-element__price">⚡️ ${price.toLocaleString()} RUB</span>
                    <button class="products-element__btn">Добавить в корзину</button>
                </li>
            `

        })
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }

}

const productsPage = new Products()
productsPage.render()