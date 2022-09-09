class user {
    constructor(id, username, password){
        this.id = id
        this.username = username 
        this.password = password
    }
}

class userservices extends user {
    constructor() {
        super(...arguments)
        this.users = [...arguments]
    }

    getallusers() {
        console.log(this.users)
    }

    getuserbyid(idUser) {
        console.log(this.id == idUser ? this.users : "User tidak ditemukan")
    }
}

let people = new userservices(1, "hafizh", 123)
console.log(people)
people.getallusers()
people.getuserbyid(1)