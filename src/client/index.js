import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
// import img from './src/client/images/udacity-logo.png"icon.png';

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import image from './images/udacity-logo.png'

export {
    checkForName,
    handleSubmit,
    image
}

// console.log(checkForName);
console.log(handleSubmit)

loadImages();

function loadImages() {
    const element = document.getElementById('logo');
    // Add the image to our existing div.
    const logo = new Image();
    logo.src = image;
    element.appendChild(logo);
}