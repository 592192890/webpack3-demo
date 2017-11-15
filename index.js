import lodash from 'lodash'
class History{
    constructor(){
        console.log('aaa:'+process.env.NODE_ENV)
        console.log('bbb:'+lodash)
    }
    sayHell(name){
        console.log('hello '+name)
    }
}

class HashHistory extends History{
    constructor(){
        super()
    }
}
var a=new HashHistory();
a.sayHell('world!');

module.exports=HashHistory;