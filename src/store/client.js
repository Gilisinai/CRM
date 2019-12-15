import  { observable } from 'mobx'

export class Client {

    
    @observable name
    @observable email
    @observable owner
    @observable country
    @observable sold
    @observable emailType
    constructor(id, name,email,country,owner,emailType,sold, firstContact) {
        this.id = id
        this.name = name
        this.email = email
        this.owner = owner
        this.country = country
        this.sold = sold
        this.emailType = emailType
        this.firstContact = firstContact
    }

    
}
