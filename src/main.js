function loadHeader() {
    const header = document.createElement("div");
    header.classList.add("header")

    const heading = document.createElement("h1");
    heading.textContent = "Pizzasohn"
    const nav = document.createElement("div")
    nav.classList.add("nav")

    const main = document.createElement("p")
    main.textContent = "Main"
    const menu = document.createElement("p")
    menu.textContent = "Menu"

    nav.appendChild(main)
    nav.appendChild(menu)

    header.appendChild(heading)
    header.appendChild(nav)

    return header
}

export { loadHeader }
