import _ from 'lodash';
import $ from 'jquery';
import Main1 from './src/assets/js/main1.js';
import Main2 from './src/assets/js/main2.js';
import './src/assets/sass/index.scss';

class App{
    sayHello(){
        console.log('Hello App!')
    }
}
new Main1().sayHelloMain1();
new Main2().sayHelloMain2();
module.exports=App;