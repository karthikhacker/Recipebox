import React, { Component } from 'react';
import {Grid} from 'material-ui';
import RecipeItem from './RecipeItem';

class RecipeList  extends Component {

  render() {
      const {recipes} = this.props;
    return (
      <div>
         <Grid container>
             {
                 recipes.map((recipe,id) => {
                     return <RecipeItem  recipe={recipe} key={id} id={id} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe}/>
                 })
             }
         </Grid>
      </div>
    );
  }
}

export default RecipeList;
