import Show from '../../../../react/react-admin-master/packages/ra-ui-materialui/src/detail/Show'
class Test_module { 
    constructor (info){
        this.info = info
    }
    ShowInfo(){
        console.log(this.info)
    }
}

module.exports= Test_module;