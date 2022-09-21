import { ReactiveFormsModule } from "@angular/forms"

const contact = {
    listContact : [
        {
            titre: "user id",
            column: "userId",
            value: "userId",
        },
        {
            titre: "ID",
            column: "id",
            value: "id",
        },
        {
            titre: "title",
            column: "title",
            value: "title",
        },
        {
            titre: "Body",
            column: "body",
            value: "body",
        },   
    ],
listContact2 : [
    {
            titre: "Nom",
            column: "nom",
            value: "nom",
        },
        {
            titre: "Prénom",
            column: "prenom",
            value: "prenom",
        },
        {
            titre: "Adresse",
            column: "adresse",
            value: "adresse",
        },
        {
            titre: "Email",
            column: "email",
            value: "email",
        },   
        {
            titre: "Tél",
            column: "tel",
            value: "tel",
        },   
]
}

export class ModelContact {
    public getContactModel(){
        return contact;
    }
}
