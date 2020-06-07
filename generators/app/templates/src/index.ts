import './main.scss';

import { add } from 'lib/math';
import yeoman from 'assets/images/yeoman.png';

const div: Element = document.querySelector('#content') as Element;
div.innerHTML = `1 + 1 = ${add(1, 1)}`;

const img = new Image();
img.src = yeoman;
document.body.appendChild(img);
