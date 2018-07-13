import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import { EditListingPhotosForm } from '../../forms';
import {
  AddImages,
  Avatar,
  ExpandingTextarea,
  
  ExternalLink,
  FieldBirthdayInput,
  FieldBoolean,
  IconSearch,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldCurrencyInput,
  FieldPhoneNumberInput,
  FieldReviewRating,
  FieldSelect,
  Button,
  FieldDateRangeInput,
  
  IconBannedUser,
  IconCheckmark,
  IconClose,
  IconEmailAttention,
  IconKeys,
  IconReviewStar,
  IconReviewUser,
  IconSpinner,
  
  SectionThumbnailLinks,
  ListingLink,
 
  MapPanel,
  MenuContent,
  MenuItem,
  MenuLabel,
  
  OrderDiscussionPanel,
} from '../../components';

import css from './RentalsListView.css';


const RentalsListView = props => {
 

  
  return (
    <div >
        <div>
        <FieldSelect /> <hr/>
        </div>
        <div>
            <ExpandingTextarea />    
            <FieldCheckbox />
          <FieldDateRangeInput />
          
          <ExternalLink />
          <FieldBirthdayInput />
          <FieldBoolean />
          <Button />
          <IconSearch />
          <FieldReviewRating />
          <FieldSelect /> 
          
          <AddImages />
          <Avatar />
          <IconBannedUser />
          <IconCheckmark />
          <IconClose />
        <IconEmailAttention />
        <IconKeys />
          <IconReviewStar />
          <IconReviewUser />
          <IconSpinner />
        
        <ListingLink />
        
        
        
        <MenuContent />
          <MenuItem />
        <MenuLabel />   
        <OrderDiscussionPanel />
      </div>
    </div>
  );
};

const { string } = PropTypes;

RentalsListView.propTypes = {
  rootClassName: string,
  className: string,
};





/* 
import React, { Component } from 'react';
import PropTypes from "prop-types";
import _orderBy from 'lodash/orderBy';
import ReactImageFallback from 'react-image-fallback';


const initialData = {
    _id:null,
    name:'',
    description:'',
    price:0,    
    duration:0,
    players: '',
    featured: false,    
    publisher:0,
    thumbnail:""
}

class GameForm extends Component{
  state = {
    data: initialData,
    errors: { }    
  }

  componentDidMount() {
    if(this.props.game._id){
      this.setState({data:this.props.game});
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.game._id && nextProps.game._id){
      this.setState({data:nextProps.game})
    }
    if(!nextProps.game._id){
      this.setState({ data:initialData })
    }
  }

  validate(data) {
    const errors = {};
    if(!data.name) errors.name ="This field can't be blank";
    if(!data.players) errors.players ="This field can't be blank";
    if(!data.publisher) errors.publisher ="This field can't be blank";
    if(!data.thumbnail) errors.thumbnail ="This field can't be blank";
    if(!data.price) errors.price ="Too cheap, don't you think?";
    if(!data.duration) errors.duration ="Too short, isn't it?";
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
     <form className="ui form" onSubmit={this.handleSubmit}>

      <div className="ui grid">
        <div className="twelve wide column">
        <div className={errors.name ? "field error" : "field"}>
        <label htmlFor="name">Game Title</label>
        <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="Full game title" 
            value = {data.name}
            onChange={this.handleChange}
          />
          <FormInlineMessage content={errors.name} type="error"/>
      </div>

      <div className="field">
        <label htmlFor="description">Game Description</label>
        <textarea 
            type="text" 
            id="description" 
            name="description"
            placeholder="Full game title" 
            value = {data.description}
            onChange={this.handleChange}
          />         
      </div>

        
        </div>
        <div className="four wide column">
          <ReactImageFallback 
            src={data.thumbnail}
            fallbackImage="http://via.placeholder.com/250x250" 
            className="ui image"
          />          
        </div>
      </div>

       
      <div className={errors.thumbnail ? "field error" : "field"}>
          <label htmlFor="thumbnail">Game thumbnail</label>
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
            <label htmlFor="price">price (in cents) </label>
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
            <label htmlFor="duration">Duration (in min)</label>
            <input 
                type="number" 
                id="duration" 
                name="duration"
                placeholder="Game duration" 
                value = {data.duration}
                onChange={this.handleChange}
              />
              <FormInlineMessage content={errors.name} type="error"/>
          </div> 
          <div className={errors.players ? "field error" : "field"}>
            <label htmlFor="players">Game players</label>
            <input 
                type="text" 
                id="players" 
                name="players"
                placeholder="players" 
                value = {data.players}
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
          <label htmlFor="featured">Featured</label>
        </div>
                  
        <div className={errors.publisher ? "field error" : "field"}>
          <label >Publishers</label>
          <select 
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleChange}
          >
            <option value="0">Choose publishers </option>
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id} >{publisher.name}</option>
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
    )
  }
}



const FormInlineMessage = ({content, type}) => <span
  style={{
    color:type === 'error' ? "#9f3A38" : "#6597a7"
  }}
>{content}</span>


const Featured = ({featured, toggleFeatured, gameId}) =>(
  <span>
    {featured ? (
        <a onClick={()=> toggleFeatured(gameId)} className="ui right yellow corner label">
          <i className="star icon"></i>
        </a>
      ): (
        <a onClick={()=> toggleFeatured(gameId)} className="ui right corner label">
          <i className="empty star icon"></i>
        </a>
      ) }
  </span>
  
)


class GameCard extends Component {  
  state = {
    showConfirmation: false
  }

  showConfirmation = () => this.setState({ showConfirmation: true})
  hideConfirmation = () => this.setState({ showConfirmation: false})

  render(){
    const { game, toggleFeatured, editGame, deleteGame } = this.props;
    return(
      <div className="ui card">
          <div className="image">
            <span className="ui green ribbon label">{game.price}</span>
            <Featured 
              featured={game.featured}
              toggleFeatured={toggleFeatured}
              gameId={game._id}
            />
            <img src={game.thumbnail} alt="Game Over" />
          </div>
          <div className="content">
            <a className="header" > {game.name}</a>
            <div className="meta">
              <i className="icon users" /> {game.player} &nbsp;
              <i className="icon wait" /> {game.duration} &nbsp;
            </div>
          </div>
          <div className="extra content">
              {
                this.state.showConfirmation ? (
                  <div className="ui two buttons">
                    <a  className="ui red basic button" onClick={()=> deleteGame(game)}>
                        <i className="ui icon check">YES</i> 
                    </a>
                    <a  className="ui grey basic button" onClick={this.hideConfirmation}>
                      <i className="ui icon close">NO</i>
                    </a> 
                  </div>
                ) : (
                  <div className="ui two buttons">
                  <a  className="ui green basic button" onClick={()=> editGame(game)}>
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


const GamesList = ({games, toggleFeatured, editGame, deleteGame}) => (
  <div className="ui four cards" >
    { games.length === 0 ? (
      <div className="ui icon message" >
        <i className="icon info"></i>
        <div className="content">
          <div className="header" >There are no Games in your store!</div>
          <p>You shoud add some, don't you think!</p>
        </div>
      </div>
      ): (
        games.map(game => 
          <GameCard 
            game ={game} 
            key={game._id} 
            toggleFeatured={toggleFeatured} 
            editGame={editGame}
            deleteGame={deleteGame}
          />)
      )
    }
  </div>
)

const publishers = [
  {
    _id:1,
    name:"Days of wonder"
  },
  {
    _id:2,
    name:"Rio of wonder"
  },
]



const games = [
  {
    _id: 1,
    publisher:1,
    featured:true,
    name:"Workneh",
    thumbnail:"https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg",
    price:32.99,
    players:"2-4",
    duration:38
  },
  {
    _id: 2,
    publisher:1,
    featured:false,
    name:"Mandefro",
    thumbnail:"https://www.w3schools.com/w3images/fjords.jpg",
    price:40,
    players:"2-4",
    duration:45
   },
  {
    _id: 3,
    publisher:2,
    featured:false,
    name:"Rahel",
    thumbnail:"https://www.w3schools.com/w3images/fjords.jpg",
    price:50,
    players:"2-4",
    duration:40
  },
  {
    _id: 4,
    publisher:2,
    featured:false,
    name:"Tsion",
    thumbnail:"https://www.w3schools.com/w3images/fjords.jpg",
    price:55.50,
    players:"2-4",
    duration:60
  }
]

const TopNavigation = ({showGameForm}) => (
  <div className="ui secondary pointing menu">    
    <a className="item" onClick={showGameForm}>
      <i className="icon plus" /> Add New Game
    </a>
  </div>
)



class RentalsListView extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    selectedGame: {}
  };

  componentDidMount() {
    this.setState(
      {
        games: this.sortGames(games)
      }
    );
  }
  sortGames(games) {
    return _orderBy(games, ["featured", "name"], ["desc", "asc"])
  }

  toggleFeatured = gameId => 
    this.setState({
      games:this.sortGames(
        this.state.games.map(
          game => 
          gameId === game._id ? {...game, featured: !game.featured} : game
        )
      )
    })
  
    showGameForm = () => this.setState({showGameForm: true, selectedGame:{} })
    hideGameForm = () => this.setState({showGameForm: false,selectedGame:{} })
    
    selectedGameForEditing = game => this.setState({
      selectedGame: game, showGameForm:true
    })

    saveGame = game => (game._id ? this.updateGame(game) : this.addGame(game));

    addGame = (game) => this.setState({
      games: this.sortGames([
        ...this.state.games,
        {
          ...game,
          _id:this.state.length + 1
        }
      ]),
      showGameForm: false
    })

    updateGame = game => 
      this.setState({
        games:this.sortGames(
          this.state.games.map(item => (item._id === game._id ? game: item))
        ),
        showGameForm: false
      })
    
      deleteGame = game => 
        this.setState({
          games:this.state.games.filter(item => item._id !== game._id)
        })

    render() {
    const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';
    return (
      <div className="ui conatiner">
        <TopNavigation showGameForm={this.showGameForm}/>
        
        <div className="ui stackable grid">
           {this.state.showGameForm && (
            <div className="six wide column">
            <GameForm  
                publishers={publishers} 
                cancel={this.hideGameForm} 
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
           
            </div>
           )}   

           <div className={`${numberOfColumns} wide column`}>
              <GamesList 
                games={this.state.games} 
                toggleFeatured={this.toggleFeatured}
                editGame={this.selectedGameForEditing}
                deleteGame={this.deleteGame}
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

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name:PropTypes.string.isRequired    
  })
).isRequired,
cancel:PropTypes.func.isRequired,
submit: PropTypes.func.isRequired,
game: PropTypes.shape({
  name:PropTypes.string,
  thumbnail:PropTypes.string,
  players:PropTypes.string,
  price:PropTypes.number,
  duration:PropTypes.number,
  featured:PropTypes.bool
}).isRequired
}

GameForm.defaultProps ={
  publishers:[]
}


Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired

}


GamesList.propTypes = {
  //games: PropTypes.arrayOf(PropTypes.object).isrequired,
  editGame:PropTypes.func.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

GamesList.defaultProps = {
  games:[]
}

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name:PropTypes.string.isRequired,
    thumbnail:PropTypes.string.isRequired,
    players:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    duration:PropTypes.number.isRequired,
    featured:PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editGame:PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}


 */
export default RentalsListView;