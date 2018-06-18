import { AppUser } from "src/app/models/appuser.model";

export class Comment {
    Id: number;
    Deleted: boolean;
    DateTime : Date;
    TextComment:string;
    Author:AppUser;
     

    constructor( Id: number,
        Deleted: boolean,
        DateTime : Date,
        TextComment:string,
        Author:AppUser) {

        this.Id=Id;
        this.Deleted=Deleted;
        this.DateTime=DateTime;
        this.TextComment=TextComment;
        this.Author=Author;

    }
}




