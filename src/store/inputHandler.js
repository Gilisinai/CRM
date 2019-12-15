import { observable, action } from  'mobx'

export class InputHandler {
    @observable clientName = ''
    @observable owner = ''
    @observable country = ''
    @observable newClient = ''
    @observable email = ''
    @observable emailType = ''
    
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}