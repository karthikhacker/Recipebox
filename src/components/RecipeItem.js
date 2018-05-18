import React,{Component} from 'react';
import {Grid,Card,CardContent,CardActions,Typography,Button,Icon,Dialog,DialogContent,DialogActions,DialogTitle,Chip,TextField} from 'material-ui';

class RecipeItem extends Component{
  constructor(props){
      super(props)
      this.state = {
          open : false,
          edit : false,
          title : this.props.recipe.title,
          ingredients : this.props.recipe.ingredients,
          imageurl : this.props.recipe.imageurl

      }
      this.handleDelete = this.handleDelete.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleEditClose = this.handleEditClose.bind(this);
      this.onSave = this.onSave.bind(this);
  }

 onSave = () => {
      this.props.editRecipe(this.state.title,this.state.ingredients,this.state.imageurl, this.props.id);
      this.handleEditClose();
  }
  handleClose = () => {
      this.setState({open : false});
  }
  handleDelete = () => {
      this.props.deleteRecipe(this.props.id);
  }

  handleEdit = (id) => {
      this.setState({edit : true, id});
  }

 handleEditClose = () => {
     this.setState({edit : false})
 }

    render(){
        const {recipe} = this.props;
        return(
          <Grid item xs={12} lg={4}>
               <Card>
                  <CardContent>
                      <img src={recipe.imageurl} alt={recipe.title} style={{width : '100%'}}/>
                      <Typography>{recipe.title}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="default" variant="fab" onClick={() => this.setState({open : true})}><Icon>toc</Icon></Button>
                    <Button color="primary" variant="fab" onClick={() => this.handleEdit(recipe.id)}><Icon>edit</Icon></Button>
                    <Button color="secondary" variant="fab" onClick={() => this.handleDelete(this.props.id)}><Icon>delete</Icon></Button>
                    <Dialog open={this.state.open} onClose={this.handleClose} fullWidth>
                    <DialogTitle>{recipe.title}</DialogTitle>
                        <DialogContent>
                           <img  src={recipe.imageurl} alt={recipe.title}  style={{width : '100%'}}/>
                            Ingredients  :
                            {
                                 recipe.ingredients.map((ingr,i) => {
                                     return <Chip key={i}  label={ingr} style={{margin: 2}}/>
                                 })
                            }

                        </DialogContent>
                        <DialogActions><Button color="secondary" onClick={this.handleClose}>close</Button></DialogActions>
                    </Dialog>
                 </CardActions>
                 <Dialog open={this.state.edit} onClose={this.handleEditClose} fullWidth>
                   <DialogTitle>Edit this recipe - {recipe.title}</DialogTitle>
                   <DialogContent>
                        <TextField  type="text"  value={this.state.title}  onChange={(e) => this.setState({title : e.target.value})} fullWidth/>
                        <br /> <br />
                        <TextField  value={this.state.ingredients} onChange={(e) => this.setState({ingredients : e.target.value.split(",")})} fullWidth  />
                        <br /> <br />
                        <TextField  value={this.state.imageurl} onChange={(e) => this.setState({imageurl : e.target.value})}  fullWidth/>
                        <br />
                        <br />
                        <Button onClick={this.onSave} color="primary" variant="raised"  >save</Button>
                   </DialogContent>
                   <DialogActions>
                     <Button  onClick={this.handleEditClose} color="secondary">close</Button>
                   </DialogActions>
                 </Dialog>
               </Card>
          </Grid>
        )
    }
}

export default RecipeItem;
