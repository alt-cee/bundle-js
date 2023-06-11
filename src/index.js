import './style.scss';

import { camelCase } from 'lodash'; // "uncaught syntax error": browser doesn't know where to find lodash

console.log(camelCase('hello world')) // this is something the browser can run!