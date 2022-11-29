class Shopping {

    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumOfMoney = 0

        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) != -1) {
                sumOfMoney += price
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} RUB</td>
                    </tr>
                `
            }
        })

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥Sum:</td>
                        <td class="shopping-element__price">${sumOfMoney.toLocaleString()} RUB</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }

}

const shoppingPage = new Shopping()