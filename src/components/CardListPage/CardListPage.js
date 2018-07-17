import React, { Component } from 'react';
import PropTypes from "prop-types";
import _orderBy from 'lodash/orderBy';
import ReactImageFallback from 'react-image-fallback';

import css from  './CardListPage.css';
import img1 from './imgOne.jpg';


const initialData = {
  _id:null,
    name:'',
    description:'',
    price:0,    
    duration:0,
    renter: '',
    featured: false,    
    category:0,
    thumbnail:""
}

class BikeForm extends Component{
  state = {
    data: initialData,
    errors: { }    
  }

  componentDidMount() {
    if(this.props.bike._id){
      this.setState({data:this.props.bike});
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bike._id && nextProps.bike._id){
      this.setState({data:nextProps.bike})
    }
    if(!nextProps.bike._id){
      this.setState({ data:initialData })
    }
  }

  validate(data) {
    const errors = {};
    if(!data.name) errors.name ="This field can't be blank";
    if(!data.renter) errors.renter ="This field can't be blank";
    if(!data.category) errors.category ="This field can't be blank";
    if(!data.thumbnail) errors.thumbnail ="This field can't be blank";
    if(!data.price) errors.price ="This field can't be blank";
    if(!data.duration) errors.duration ="This field can't be blank";
    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors});

    if (Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
  }

  handleChange = e => 
    this.setState({ data:{ ...this.state.data, [
        e.target.name]: 
        e.target.type === "number"? parseInt(e.target.value, 10)
        : e.target.value}
      });

      handleCheckboxChange = e => this.setState({data: {...this.state.data, [e.target.name]:e.target.checked} })

  
  render(){
    const { data, errors } = this.state;

    return(
      <div className={css.form}>
        <form className="ui form" onSubmit={this.handleSubmit}>
              <div className={errors.name ? "field error" : "field"}>
                <label htmlFor="name">Bike Title</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Bike title" 
                  value = {data.name}
                  onChange={this.handleChange}
                />
                <FormInlineMessage content={errors.name} type="error"/>
              </div>

              <div className="field">
                <label htmlFor="description">Bike Description</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description"
                    placeholder="Bike description" 
                    value = {data.description}
                    onChange={this.handleChange}
                  />         
              </div>        
          
          
            
              <ReactImageFallback 
                src={data.thumbnail}
                fallbackImage="http://via.placeholder.com/250x250" 
                className="ui image"
              />          
          
        

          
        <div className={errors.thumbnail ? "field error" : "field"}>
          <label htmlFor="thumbnail">Bike thumbnail</label>
          <input 
              type="text" 
              id="thumbnail" 
              name="thumbnail"
              placeholder="Image Url" 
              value = {data.thumbnail}
              onChange={this.handleChange}
            />
            <FormInlineMessage content={errors.name} type="error"/>
        </div>

        <div className={errors.price ? "field error" : "field"}>
          <div className="field">
            <label htmlFor="price">Daily rent (in euro) </label>
            <input 
                type="number" 
                id="price" 
                name="price"
                placeholder="price" 
                value = {data.price}
                onChange={this.handleChange}
              />
              <FormInlineMessage content={errors.name} type="error"/>
          </div>        
          <div className={errors.duration ? "field error" : "field"}>
              <label htmlFor="duration">Rental period (in days)</label>
              <input 
                  type="number" 
                  id="duration" 
                  name="duration"
                  placeholder="Bike rental duration" 
                  value = {data.duration}
                  onChange={this.handleChange}
                />
                <FormInlineMessage content={errors.name} type="error"/>
            </div> 
            <div className={errors.renter ? "field error" : "field"}>
              <label htmlFor="renter">Bike Renter name</label>
              <input 
                  type="text" 
                  id="renter" 
                  name="renter"
                  placeholder="renter" 
                  value = {data.renter}
                  onChange={this.handleChange}
                />
                <FormInlineMessage content={errors.name} type="error"/>
            </div>       
          </div>

            <div className="inline field">
              <input 
                type="checkbox"
                id="featured" 
                name="featured"            
                checked = {data.featured}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="featured">Bike Status(Rented)</label>
            </div>
                      
            <div className={errors.category ? "field error" : "field"}>
              <label >Bike Categories</label>
              <select 
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option value="0">Choose Categories </option>
                {this.props.categories.map(category => (
                  <option value={category._id} key={category._id} >{category.name}</option>
                ))}
              </select>
              <FormInlineMessage content={errors.name} type="error"/>
            </div>
            
              <div className="ui fluid buttons">
                <button className="ui primary button" type="submit">
                Create
                </button>
                <div className="or" />
                <a className="ui button" onClick={this.props.cancel}>Cancel</a>           
              </div>        
        </form>
      </div>
    )
  }
}



const FormInlineMessage = ({content, type}) => <span
  style={{
    color:type === 'error' ? "#9f3A38" : "#6597a7"
  }}
>{content}</span>


const Featured = ({featured, toggleFeatured, bikeId}) =>(
  <span>
    {featured ? (
        <a onClick={()=> toggleFeatured(bikeId)} className="ui left yellow corner label">
          <i className="star icon"></i>
        </a>
      ): (
        <a onClick={()=> toggleFeatured(bikeId)} className="ui left corner label">
          <i className="empty star icon"></i>
        </a>
      ) }
  </span>
  
)


class BikeCard extends Component {  
  state = {
    showConfirmation: false
  }

  showConfirmation = () => this.setState({ showConfirmation: true})
  hideConfirmation = () => this.setState({ showConfirmation: false})

  render(){
    const { bike, toggleFeatured, editBike, deleteBike } = this.props;
    return(
      <div className="ui card">
          <div className="image">
            <span className="ui right corner label">${bike.price}/day</span>
            <Featured 
              featured={bike.featured}
              toggleFeatured={toggleFeatured}
              bikeId={bike._id}
            />
            <img src={bike.thumbnail} alt="Bike" />
          </div>
          <div className="content">
           <button className="compact ui button" > {bike.name}</button><span className={css.bgcolor}>{bike.description}</span>            
              
          </div>
          <div className="extra content">
              {
                this.state.showConfirmation ? (
                  <div className="ui two buttons">
                    <a  className="ui red basic button" onClick={()=> deleteBike(bike)}>
                        <i className="ui icon check">YES</i> 
                    </a>
                    <a  className="ui grey basic button" onClick={this.hideConfirmation}>
                      <i className="ui icon close">NO</i>
                    </a> 
                  </div>
                ) : (
                  <div className="ui two buttons">
                  <a  className="ui green basic button" onClick={()=> editBike(bike)}>
                      <i className="ui icon edit"></i> 
                  </a>
                  <a  className="ui red basic button" onClick={this.showConfirmation}>
                    <i className="ui icon trash"></i>
                  </a> 
                </div>
                )
              }              
          </div>
      </div>
    )
  }
}


const BikesList = ({bikes, toggleFeatured, editBike, deleteBike}) => (
  <div className={css.bikeList}>
    <div className="ui three cards" >
      { bikes.length === 0 ? (
        <div className="ui icon message" >
          <i className="icon info"></i>
          <div className="content">
            <div className="header" >There are no Bikes in your store!</div>
            <p>You shoud add some, don't you think!</p>
          </div>
        </div>
        ): (
          bikes.map(bike => 
            <BikeCard 
              bike ={bike} 
              key={bike._id} 
              toggleFeatured={toggleFeatured} 
              editBike={editBike}
              deleteBike={deleteBike}
            />)
        )
      }
    </div>
  </div>
)

const categories = [
  {
    _id:1,
    name:"ALL CATEGORIES"
  },
  {
    _id:2,
    name:"CITY BIKES"
  },
  {
    _id:3,
    name:"ROAD BIKES"
  },
  {
    _id:4,
    name:"E-BIKES"
  },
  {
    _id:5,
    name:"MOUNTAIN BIKES"
  }
]



const bikes = [
  {
    _id: 1,
    category:1,
    featured:true,
    name:"BHC",
    description:"Iso Syöte",
    thumbnail:img1,
    price:3,
    renter:"John Doe",
    duration:38
  },
  {
    _id: 2,
    category:2,
    featured:false,
    name:"BHC",
    description:"Iso Syöte",
    thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeY4gNYCBVrMMUE7SMqH7_uk9Qb6zp3MgyJ8-d5CJORSP-ak3Xw",
    price:6,
    renter:"Mike",
    duration:45
   },
  {
    _id: 3,
    category:3,
    featured:false,
    name:"BHC",
    description:"Iso Syöte",
    thumbnail:"https://www.striderbikes.com/l/assets/img/14/balance-bikes/balance-bikes-14x-strider-sport-with-pedal-kit.jpg",
    price:4,
    renter:"Jimmy",
    duration:40
  },
  {
    _id: 4,
    category:4,
    featured:false,
    name:"BHC",
    description:"Iso Syöte",
    thumbnail:"https://cdn.shopify.com/s/files/1/2078/0975/products/Black_3-4_rear_right_Plate.JPG?v=1522081068",
    price:5,
    renter:"Fuchoro",
    duration:60
  }
]

const TopNavigation = ({showBikeForm}) => (
  <div className="ui icon buttons">
    <button className="ui left attached button item" onClick={showBikeForm}> <i className="icon plus" />Add Bike</button>              
  </div>         
      
            
    
)



class CardListPage extends React.Component {
  state = {
    bikes: [],
    showBikeForm: false,
    selectedBike: {}
  };

  componentDidMount() {
    this.setState(
      {
        bikes: this.sortBikes(bikes)
      }
    );
  }
  sortBikes(bikes) {
    return _orderBy(bikes, ["featured", "name"], ["desc", "asc"])
  }

  toggleFeatured = bikeId => 
    this.setState({
      bikes:this.sortBikes(
        this.state.bikes.map(
          bike => 
          bikeId === bike._id ? {...bike, featured: !bike.featured} : bike
        )
      )
    })
  
    showBikeForm = () => this.setState({showBikeForm: true, selectedBike:{} })
    hideBikeForm = () => this.setState({showBikeForm: false,selectedBike:{} })
    
    selectedBikeForEditing = bike => this.setState({
      selectedBike: bike, showBikeForm:true
    })

    saveBike = bike => (bike._id ? this.updateBike(bike) : this.addBike(bike));

    addBike = (bike) => this.setState({
      bikes: this.sortBikes([
        ...this.state.bikes,
        {
          ...bike,
          _id:this.state.length + 1
        }
      ]),
      showBikeForm: false
    })

    updateBike = bike => 
      this.setState({
        bikes:this.sortBikes(
          this.state.bikes.map(item => (item._id === bike._id ? bike: item))
        ),
        showBikeForm: false
      })
    
      deleteBike = bike => 
        this.setState({
          bikes:this.state.bikes.filter(item => item._id !== bike._id)
        })

    render() {
    const numberOfColumns = this.state.showBikeForm ? 'twelve' : 'sixteen';
    return (
      <div className="ui conatiner"> 
        <TopNavigation showBikeForm={this.showBikeForm}/> 
        <div className="ui stackable grid">
           {this.state.showBikeForm && (
            <div className="four wide column">
              <BikeForm  
                  categories={categories} 
                  cancel={this.hideBikeForm} 
                  submit={this.saveBike}
                  bike={this.state.selectedBike}
                />            
            </div>
           )}   

           <div className={`${numberOfColumns} wide column`}>
              <BikesList 
                bikes={this.state.bikes} 
                toggleFeatured={this.toggleFeatured}
                editBike={this.selectedBikeForEditing}
                deleteBike={this.deleteBike}
              />
            </div>           
                    
        </div>               
      </div>
    )
  }
}



FormInlineMessage.defaultProps = {
  content: PropTypes.string,
  type: PropTypes.oneOf(["error", "info"]).isRequired
}

FormInlineMessage.defaultProps = {
  content:""
}

BikeForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name:PropTypes.string.isRequired    
  })
).isRequired,
cancel:PropTypes.func.isRequired,
submit: PropTypes.func.isRequired,
bike: PropTypes.shape({
  name:PropTypes.string,
  thumbnail:PropTypes.string,
  renter:PropTypes.string,
  price:PropTypes.number,
  duration:PropTypes.number,
  featured:PropTypes.bool
}).isRequired
}

BikeForm.defaultProps ={
  categories:[]
}


Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  bikeId: PropTypes.number.isRequired

}


BikesList.propTypes = {
  //bikes: PropTypes.arrayOf(PropTypes.object).isrequired,
  editBike:PropTypes.func.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteBike: PropTypes.func.isRequired
}

BikesList.defaultProps = {
  bikes:[]
}

TopNavigation.propTypes = {
  showBikeForm: PropTypes.func.isRequired
}

BikeCard.propTypes = {
  bike: PropTypes.shape({
    name:PropTypes.string.isRequired,
    thumbnail:PropTypes.string.isRequired,
    renter:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    duration:PropTypes.number.isRequired,
    featured:PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editBike:PropTypes.func.isRequired,
  deleteBike: PropTypes.func.isRequired
}



export default CardListPage;


