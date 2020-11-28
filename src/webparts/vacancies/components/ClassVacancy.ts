import { IVacancy } from "./IVacancy";
export class ClassVacancy{
    public Title:string;
    public Description:string;
    public Opendate:string;
    public Closedate:string;
   


    constructor(item: IVacancy){
        this.Title = item.Title;
        this.Description = item.Description;
        this.Opendate = item.Opendate;
        this.Closedate = item.Closedate;
       
    }
}