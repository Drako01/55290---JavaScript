// Creacion de una NavBar con JS usando Clases de Bootstrap

const navContent = document.getElementById('header')
const navBar = document.createElement('nav')
const navDir = document.createElement('div')
const navUl = document.createElement('ul')

const navLinks = [
                    {
                        page: 'index',
                        link: 'Inicio'
                    },
                    {
                        page: 'products',
                        link: 'Productos'
                    },
                    {
                        page: 'contacts',
                        link: 'Contacto'
                    },
                    {
                        page: 'maps',
                        link: 'Ubicación'
                    }
                ]

navBar.classList = 'navbar navbar-expand-lg navbar-light bg-light'
navDir.classList = 'container-fluid'
navUl.classList = 'navbar-nav'


navContent.append(navBar)
navBar.appendChild(navDir)
navDir.appendChild(navUl)

navLinks.forEach((name) =>{
    navUl.innerHTML += `<li class='nav-item'>
                            <a class="nav-link" href="/${name.page}.html">${name.link}</a>
                        </li>
                        `})
