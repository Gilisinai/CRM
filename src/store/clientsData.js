import { observable, action, computed } from 'mobx'
import { Client } from './client'
import Moment from 'react-moment';
import moment from 'moment'
import axios from 'axios';
const clientsRoute = "http://localhost:4200/";
export class ClientsData {
    @observable clients = []

    @computed get numClients() {
        return this.clients.length
    }

    @computed get numEmails() {
        return this.getSentEmails()
    }

    @computed get outstandingClients() {
        return this.getOutstandingClients()
    }

    @computed get newClients() {
        return this.getNewClients()
    }

    @computed get hottestCountryName() {
        let hottest = this.getHottestCountryName()
        return hottest.name
    }

    @computed get sellsSince() {
        let breakdown = []
        for(let i = 30; i>= 0; i--) {
            let day = moment().subtract(i, "days").format('DD-MM')
            breakdown.push({day: day, sells: Math.floor(Math.random() * 15)})
        }
        
        return breakdown
    }

    @action getClientsData = async () => {
        let clients = await axios.get(clientsRoute)
        this.clients = clients.data

        return clients
    }



    @action getNewClients = () => {
        let currentDate = new Date()
        let month = currentDate.getMonth()
        let year = 2018
        let newClients = this.clients.filter(c => (c.first_contact).substring(5, 7) == month && (c.first_contact).substring(0, 4) == year)
        return newClients.length


    }

    @action getSentEmails = () => {
        let filtered = this.clients.filter(c => c.emailType != "null")
        return filtered.length
    }

    @action getOutstandingClients = () => {
        let filtered = this.clients.filter(c => c.sold === 0)
        return filtered.length
    }

    @action getHottestCountry = () => {
        let salesByCountry = {}
        let clients = this.clients
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].sold === 1) {
                salesByCountry[clients[i].country] ? salesByCountry[clients[i].country]++ : salesByCountry[clients[i].country] = 1
            }
        }

        return salesByCountry
    }

    @action getCountriesList = () => {
        let filtered = this.clients.filter(c => c.sold === 1).map(c => c.country)
        let countries = []
        for (let i = 0; i < filtered.length; i++) {
            if (!countries.includes(filtered[i])) {

                countries.push(filtered[i])
            }
        }

        return countries
    }

    @action getCountries = () => {
        let countries = this.getCountriesList()
        let sales = this.getHottestCountry()
        let data = []
        for (let i = 0; i < countries.length; i++) {
            data.push({
                name: countries[i],
                sales: sales[countries[i]]
            })
        }
        return data
    }

    @action getHottestCountryName = () => {
        
        let data = this.getCountries()
        let maxSales = Math.max.apply(Math, data.map(function (o) { return o.sales; }))
        let country = data.find(d => d.sales == maxSales)


        return country.name
    }

    @action getOwners = () => {
        let owners = {}
        let clients = this.clients
        for (let i = 0; i < clients.length; i++) {

            owners[clients[i].owner] ? owners[clients[i].owner]++ : owners[clients[i].owner] = 1

        }

        return owners
    }

    @action sortOwners = () => {
        let owners = this.getOwners()
        let sortedOwners = []
        for (let owner in owners) {
            sortedOwners.push({ name: owner, clients: owners[owner] })
        }
        let sorted = sortedOwners.sort(function (a, b) {
            return b[1] - a[1];
        });
        let data = sorted.splice(0, 3)
        
        return data
    }

    @action addClient = async (name, country, owner, email) => {
        await axios.post(`http://localhost:4200/client`, {
            name: name,
            country: country,
            email: email,
            owner: owner,
            sold: false,
            firstContact: new Date(),
            emailType: null
        })
    }

    @action transferOwner = async (clientName, owner) => {
        let clientToUpdate = this.clients.find(c => c.name === clientName)
        clientToUpdate.owner = owner
        console.log(clientToUpdate)
        await axios.put('http://localhost:4200/owner',{clientToUpdate})
        
    }

    @action sendEmail = async (clientName, emailType) => {
        let clientToUpdate = this.clients.find(c => c.name === clientName)
        clientToUpdate.emailType = emailType
        console.log(clientToUpdate)
        await axios.put('http://localhost:4200/email',{clientToUpdate})
        
    }

    @action declareSell = async (clientName) => {
        let clientToUpdate = this.clients.find(c => c.name === clientName)
        await axios.put('http://localhost:4200/sell',{clientToUpdate})
        
    }
}


