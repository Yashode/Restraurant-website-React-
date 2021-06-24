import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Media} from 'reactstrap';
import './comment.css'
class DishDetail extends Component{

	constructor(props){
		super(props);

			this.state = {

			};
		
	}

renderDish(dish){
    if (dish!=null) {

                  return(

                      <div>
                        <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                              <CardTitle> {dish.name}</CardTitle>
                              <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>      
                      </div>  
                      
                      );
            }
    else{
                  return(
                        <div>
                        	
                        </div>
                        );
            }

      }	

renderComment(comments,y){
    

    if (comments!=null) {
      console.log("comment triggered")

      const cmnt = comments.map((comment)=>{

      return(


          <div className="">
            <div className="">  
              <div className="Comment">
                {comment.comment}
              </div>
            </div>
            <div className="">
              <div className="Comment">
                --{comment.author}, {comment.date}
              </div>
            </div>
          </div>
   
        );
      }); 

      y=cmnt;
      return(
      <div>
        <div>  
          <h4><strong>Comments</strong></h4>  
        </div>
        <div>  
          
            {y}
          
        </div>
      </div>
      );
      
    }
    
    else{
      return(
        <div>
                          
        </div>
           
           );
        }



  }     


render(){

  var x;



		return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mt-1">
				    {this.renderDish(this.props.selectedDish)};
          </div>

          <div className="col-12 col-md-5 mt-1">
            
            {this.renderComment(this.props.selectedComment,x)}
          </div>
        </div>
			</div>
      );
	}
}

export default DishDetail;