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

class ContactosSrv{
    constructor(){
        this.newName=''
        this.newPhone=''
        this.newEmail=''
        this.buscador=''
        this.contactoSeleccionado
        this.contactos = [
            new Contacto('Walter White', '12314434312', 'ww@aol.com'),
            new Contacto('Rick Grimes', '12314434312', 'rg@aol.com'),
            new Contacto('Barry Aller', '12314434312', 'ba@aol.com'),
            new Contacto('Tim Drake', '12314434312', 'td@aol.com')
        ]
    }
    getContactos(){
        return this.contactos
    }

    agregarContacto(){
        this.contactos.push(new Contacto(this.newName, this.newPhone, this.newEmail))
        this.newName=''
        this.newPhone=''
        this.newEmail=''
    }
    editarContacto(contacto){
        this.contactoSeleccionado=contacto
    }
}