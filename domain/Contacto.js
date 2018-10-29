class Contacto {
    constructor(names, phone, email){
        this.names=names
        this.phone=phone
        this.email=email
        this.favorito=false
    }
    setFavorito(){
        return this.favorito=!this.favorito
    }
    setNames(newName){
        this.names=newName
    }
    setPhone(newPhone){
        this.phone=newPhone
    }
    setEmail(newEmail){
        this.email=newEmail
    }
}