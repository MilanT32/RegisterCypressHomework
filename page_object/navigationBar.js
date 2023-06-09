class NavigationBar {
    get logoutBtn() {
        return cy.get("a[role='button ']")
    }
    get loginBtn() {
        return cy.get("a[href='/register']")
    }
    get registerBtn() {
        return cy.get('.btn')
    }
}

export const navigationBar = new NavigationBar()
