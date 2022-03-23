import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Select from 'react-select';




export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.state = {showMessage: false};
    this.state = {priceone :'',
    pricetwo:''
                  
    };
  }

  
  state = {
    profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    
  }

  

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])

  }

  handleCheckBox = event => {
    console.log(event.target.checked);
    this.setState({
      showMessage: !this.state.showMessage
    });

     this.setState({
      isChecked: event.target.checked
    });
  };


  state={
    Categories:'',
    ItemDetails:'',
    Royalities:'',
    puton:'',
    sale:'',
    Descrption :'',

  }
  handleCategorieschange=(event)=>{
    this.setState({
     
        Categories: event.target.value
     
    })
  }

  handleItemDetailschange=(event)=>{
    this.setState({
      ItemDetails: event.target.value
    })
  }

  handleRoyalitieschange=(event)=>{
    this.setState({
      Royalities: event.target.value
    })

  }

  Descrptionchange=(event)=>{
    this.setState({
      Descrption : event.target.value
    })

  }
  handlesaleonchange=(event)=>{
    this.setState({
      pricetwo: event.target.value
    })
    
      }

      

  handlputonchange=(event)=>{
this.setState({
  priceone: event.target.value
})}

  handlesubmit = event => {
    console.log(`${this.state.Categories} ${this.state.ItemDetails} ${this.state.Royalities} ${this.state.Descrption} ${this.state.puton}`+this.state.priceone+""+this.state.pricetwo);
    if(this.state.showMessage){
      var a = this.state.priceone;
      var b =this.state.pricetwo;

      if (b>a){
        console.log("Condition one");

    alert( "error Price Value one should be lesser than Price price ");
      }
    }

    event.preventDefault()
  } ;
  render() {
    const Message = () => (
      <div>
        <input className="form-control w-25 "placeholder="Enter price for" 
        id="hidden_field" name="hidden" type="text" value={this.state.pricetwo}  onChange={this.handlesaleonchange}/><br></br>
              
      </div>
    )
    const { profileImg } = this.state;
    return (
      <div className="contrainer ">
        <div className='row mt-5 m-5 mg-3'>

          <div className='col-md-8'>
            <form className='form-group' onSubmit={this.handlesubmit}>
            
              <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} /><br></br>
              <label>Categories</label>
              <input className='form-control w-75' placeholder='sound' name='Categories' type="text" value={this.Categories}  onChange={this.handleCategorieschange}/>
              <label>Item Details</label>
              <input className="form-control w-75"placeholder='e.g Crypto Means' type="text" value={this.ItemDetails}onChange={this.handleItemDetailschange}/><br></br>
              <label>Descrption</label>
              <textarea className='form-control w-75' placeholder='e.g After purchasing you will able to received... 'type="text" value={this.Descrption} onChange={this.Descrptionchange} ></textarea>
              <label>Royalities</label>
              <input className="form-control w-75"placeholder='Suggested:10%,20%,30%' type="text" value={this.Royalities} onChange={this.handleRoyalitieschange} />
              <label>Put On Scale</label>
              <h6>Yoy'll receved bifs on this item</h6>
              <input className="form-control w-25 "placeholder='price for' type="text" value={this.state.priceone} onChange={this.handlputonchange}/>
              <span> <input className="form-control w-25 default" type="text" placeholder='width' readOnly/></span><br></br>
             
              <label>Instant sales Price </label>
              <p>Enter the price for which item will be instantly sold</p>
              
              <div >
              {this.state.showMessage && <Message />}
              </div>
              <div>
              <label className='switch '>
                <input type="checkbox" className='slider round' id="trigger" onChange={this.handleCheckBox} ></input>
              </label>
              </div>
              <label>choose collection</label><br></br>
              <input type="radio" />ERC-721&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><input type="radio" checked />ADMIN NDI</span><br></br><br></br>
              <label>Choose Miniting Type</label><br></br>
              <input type="radio" checked/>Instant Miniting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><input type="radio" />Lazy Miniting</span><br></br><br></br>
              <button className='btn btn-primary ' onClick={this.handlesubmit}>CREATE CONTRACT</button>
            </form>
          </div>

          <div className='col-md-4 boder h-500'>
            <h5>Preview</h5>
            <div className="img-holder">
              <img src={profileImg} alt="" id="img" className="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}








export default App
