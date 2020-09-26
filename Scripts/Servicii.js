const contactLink = document.querySelector('.header-container .links-container div:last-child a')
const description = document.querySelector('.Contact-container .Contact-DownInput input');
const servicesContainer = document.querySelector('.services-container');
const allServicies = [...servicesContainer.querySelectorAll('button')];

rezerva(allServicies);

function rezerva(allServicies) {
    allServicies.forEach(element => {
        element.addEventListener('click', (e) => {
            let childrens = [...e.target.parentElement.children];
            let details = [childrens[1].textContent, childrens[2].textContent, childrens[3].textContent];
            
            window.location.href = '#Contact';
            contactLink.classList = 'active';

            description.value = details;
        })
    });
}