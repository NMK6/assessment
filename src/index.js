import './sass/main.scss';
import { renderHeader } from './js/controllers/headerController';
const header = document.querySelector('head');
const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Open+Sans:wght@300&display=swap" rel="stylesheet"><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' crossorigin="anonymous"/>`;
header.insertAdjacentHTML('beforeend', fonts);
renderHeader();
