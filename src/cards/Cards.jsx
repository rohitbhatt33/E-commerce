import React,{Component} from 'react';
import Card  from './card1';
import img1 from '../ecos/5.jpg'
import img2 from '../ecos/3.jpg'
import img3 from '../ecos/6.jpg'
import img4 from '../ecos/4.jpg'
import { FaAtom, FaBoxes } from 'react-icons/fa';
class Cards extends Component{ 
     handle(){
        window.open("<cart/>")
     }
     render(){
        return(
        <div>    
         <div className="navbar ju"  >
          <h1 ><FaAtom/>ecommerce dummy</h1> 
        <button className='jui' onClick={this.handle}>Cart<FaBoxes/></button>
        </div>      
        <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="shoe" para="800$" btn="Add to cart" />
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img2} title="jacket" para="600$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img3} title="keyboard" para="300$" btn="Add to cart" />
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img4} title="mouse" para="200$" btn="Add to cart"/>
                   </div>
                   <br></br>
                    <div className="col-md-4">
                       <Card imgsrc={img1} title="shoe" para="800$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img2} title="jacket" para="600$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img3} title="keyboard" para="300$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img4} title="mouse" para="200$" btn="Add to cart"/>
                   </div>
                   <br></br>
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="shoe" para="800$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                     
                        <Card imgsrc={img2} title="jacket" para="600$" btn="Add to cart" />
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img3} title="keyboard" para="300$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img4} title="mouse" para="200$" btn="Add to cart"/>
                   </div>
                   <br></br>
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="shoe" para="800$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img2} title="jacket" para="600$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img3} title="keyboard" para="300$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img4} title="mouse" para="200$" btn="Add to cart"/>
                   </div>
                   <br></br>
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="shoe" para="800$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img2} title="jacket" para="600$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img3} title="keyboard" para="300$" btn="Add to cart"/>
                   </div>
                   <div className="col-md-4">
                        <Card imgsrc={img4} title="mouse" para="200$" btn="Add to cart"/>
                   </div>
                   <br></br> 
               </div>
        </div> 
      </div>         
        );
    }
}
      
export default Cards;