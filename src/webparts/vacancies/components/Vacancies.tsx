import * as React from 'react';
import styles from './Vacancies.module.scss';
import { IVacanciesProps } from './IVacanciesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassVacancy } from './ClassVacancy';
import { IVacancy } from './IVacancy';
import { Web } from "sp-pnp-js";
import * as jQuery from "jquery";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Vacancies extends React.Component<IVacanciesProps, any> {
  public constructor(props:IVacanciesProps,any)
  {
      
      super(props);
      this.state={
          items:[]
      }
      }
      
  public render(): React.ReactElement<IVacanciesProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={ styles.vacancy }>
       <div className={ styles.header }>
        <div className={ styles.grid }>
        <div className={ styles.hcard }>
          <h1>Internal Vacancies</h1>
          </div>
          <div className={ styles.hcard }  style={{paddingTop: "1rem"}}>
          {/* <a href="https://lotusbetaanalytics.sharepoint.com/sales/Shared%20Documents/Forms/AllItems.aspx" className={styles.btn}>View All</a> */}
        </div>
          </div>
        </div>
        <div>
        {
        this.state.items.map(function(item:IVacancy){
    return(
      <>
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography><b>{item.Title}</b></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {item.Description}<br/><br/>
        <small>Start Date: {item.Opendate}</small><br/><br/>
    <small>End Date:{item.Closedate}</small>
        </Typography>
      </AccordionDetails>
    </Accordion>  
      </>    
 ) 
})

} 
      </div>
      </div>
    );
  }
  public componentDidMount()
  {
      
      // debugger;
      this._UsersList();
  }
  private _UsersList():void
  {
  
   
  let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
  web.lists.getByTitle(`Vacancy`).items.get().then
      ((response)=>{
        console.log(response)
          let UsersCollection=response.map(item=> new ClassVacancy(item));
           let UsersCard = UsersCollection;
          this.setState({items:UsersCard});
      }
  
      )
  }
}

