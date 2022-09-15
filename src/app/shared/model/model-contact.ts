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
        
    ]
}

export class ModelContact {
    public getContactModel(){
        return contact;
    }
}
