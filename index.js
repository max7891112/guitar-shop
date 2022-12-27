function render() {
    const productsStore = localStorageUtil.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render()
}
let CATALOG = []

spinnerPage.render()

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        
        setTimeout(function () {
            spinnerPage.handleClear()
            render()
        },1000)
           
        
    })
    .catch(error => {
        spinnerPage.handleClear()
        errorPage.render()
    })
