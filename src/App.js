import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import {AppBar,Typography,Toolbar} from 'material-ui';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipes : JSON.parse(localStorage.getItem('recipes')) || []
        }
        this.addRecipe = this.addRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }
 addRecipe = (obj) => {
   const recipes = this.state.recipes;
   recipes.push(obj);
   localStorage.setItem('recipes',JSON.stringify(recipes));
   this.setState({recipes});
 }

 deleteRecipe = (id) => {
    const recipes = this.state.recipes;
    recipes.splice(id,1);
    localStorage.setItem('recipes',JSON.stringify(recipes));
    this.setState({recipes});
 }

 editRecipe = (newTitle,newIngredients,newImageurl,id) => {
    // console.log(newTitle,ingredients,imageurl,id);
    const recipes = this.state.recipes;
    const recipe = recipes[id];
    recipe['title'] = newTitle;
    recipe['ingredients'] = newIngredients;
    recipe['imageurl'] = newImageurl;
    localStorage.setItem("recipes",JSON.stringify(recipes));
    this.setState({recipes: recipes});
 }
  render() {
      console.log(this.state.recipes);
    return (
      <div className="App">
         <AppBar position="static">
              <Toolbar>
                  <Typography variant="title" color="inherit">Recipebox</Typography>
              </Toolbar>
         </AppBar>
            <RecipeList
              recipes={this.state.recipes}
              deleteRecipe={this.deleteRecipe}
              editRecipe={this.editRecipe}
               />
         <AddRecipe recipes={this.state.recipes} addRecipe={this.addRecipe}/>
      </div>
    );
  }
}

export default App;
