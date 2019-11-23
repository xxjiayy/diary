// 引入的时候用结构赋值的方式引入，为什么？因为是分别暴露吗
import {foo, bar} from  './math';
// 引入json文件，跟暴露一样，不能解构赋值了
import data from '../data/test.json';

//引入css文件
import '../css/test.css'

document.write('entry.js is working' + '<br />')
document.write(foo(3) + '<br />')
document.write(bar(3) + '<br />')
document.write(JSON.stringify(data) + '<br />')

//打包主模块，链式发现主模块中引入了其他模块