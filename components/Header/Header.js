class Header {
     
    handlerOpenShoppingPage() {
        shoppingPage.render()
    }


    render(counter) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()">
                🔥 ${counter}
                </div>
            </div>
        `
        ROOT_HEADER.innerHTML = html
    }
}
const productsStore = localStorageUtil.getProducts()
const headerPage = new Header()
headerPage.render(productsStore.length)