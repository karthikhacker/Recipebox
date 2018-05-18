import React, { Component } from 'react';
import {Button,Dialog,DialogTitle,DialogContent,DialogActions,Icon,TextField} from 'material-ui';

class AddRecipe  extends Component {
    constructor(props){
        super(props)
        this.state = {
            open : false,
            title: '',
            ingredients : [],
            imageurl : ''
        }
        this.save = this.save.bind(this);
    }
save = () => {
    const id = this.props.recipes.length + 1;
    const title = this.state.title;
    const ingredients = this.state.ingredients;
    const imageurl = this.state.imageurl;
    let obj = {
         id,
         title,
         ingredients,
         imageurl
    }
    this.props.addRecipe(obj);
    this.setState({title : '',ingredients: [],imageurl : ''})
    this.handleClose();
}
handleClose = () => {
    this.setState({ open : false});
}
  render() {
    return (

      <div>
           <div className="add-btn">
             <Button onClick={() => this.setState({ open : true})}  color="secondary" variant="fab"><Icon>add</Icon></Button>
           </div>
          <Dialog open={this.state.open} onClose={this.handleClose} className="dialog" fullWidth>
             <DialogTitle>
                Add Recipe
             </DialogTitle>
             <DialogContent>
                 <form>
                    <TextField
                     value={this.state.title}
                     onChange={(e) => this.setState({title : e.target.value})}
                     placeholder="Recipe title"
                     fullWidth
                     margin="normal"
                     required
                    />
                    <br />
                    <TextField
                     value={this.state.ingredients}
                     onChange={(e) => this.setState({ingredients : e.target.value.split(",")})}
                     placeholder="Recipe ingredients - add ingredients seperated by ,"
                     fullWidth
                     margin="normal"
                     required
                    />
                    <br />
                    <TextField
                     value={this.state.imageurl}
                     onChange={(e) => this.setState({imageurl : e.target.value})}
                     placeholder="Recipe image url."
                     fullWidth
                     margin="normal"
                     required
                    />
                    <br />
                    <br />
                    <Button onClick={this.save} color="primary"  variant="raised">save</Button>
                 </form>
             </DialogContent>
             <DialogActions>
                <Button color="secondary" onClick={this.handleClose}>cancel</Button>
             </DialogActions>
          </Dialog>

      </div>
    );
  }
}

export default  AddRecipe;
