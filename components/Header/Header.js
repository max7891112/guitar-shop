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

const headerPage = new Header()
