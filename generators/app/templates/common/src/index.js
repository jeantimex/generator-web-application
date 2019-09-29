import { add } from 'lib/math';
import './main.scss';

const div = document.querySelector('#content');
div.innerHTML = `1 + 1 = ${add(1, 1)}`;
