import { add } from 'lib/math';
import './main.scss';

const div: Element = document.querySelector('#content') as Element;
div.innerHTML = `1 + 1 = ${add(1, 1)}`;
