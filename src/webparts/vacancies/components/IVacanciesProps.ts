import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IVacanciesProps {
  description: string;
  Title:string;
  Description:string;
  Opendate:string;
  Closedate:string;
  context:WebPartContext; 
}
