import React, { Component } from "react";
const uuid = require('uuid')
class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid.v1(),
      name: '',
      name_in_mm: '',
      name_error: '',
      name_in_mm_error: ''
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleCancel() {
    this.setState({name: ''}, () => {
      this.setState({name_in_mm: ''});
    })
  }
  handleChange(e) {
    this.setState({name_error: ''}, () => {
      this.setState({name_in_mm_error: ''});
    })
    this.setState({[e.target.name]: e.target.value});
  }
  handleCreate() {
    if(this.state.name.length < 4) {
      this.setState({name_error: 'Category name require at least 4 characters.'});
    }
    if(this.state.name_in_mm.length < 4) {
      this.setState({name_in_mm_error: 'ကက်တိုကရီက အနည်းဆုံး စာလုံး၄လုံး လိုအပ်တယ် '});
    }
    
    if(this.state.name.length > 3 && this.state.name_in_mm.length > 3) {
      this.props.handleNewCategory({
        id: this.state.id,
        name: this.state.name,
        name_in_mm: this.state.name_in_mm
      });
      alert(
        `Successfully created the category with "${this.state.name}" name.`
      );
      this.handleCancel();
    }
    
  }

  render() {    
      return (
        <div className="f-400 m-auto">
          <h3>Create New Category</h3>
            <div className="f-group">
                <input type="text" className="input-field-h p-l-4" 
                placeholder="Enter category name..." 
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                />  
                <p className="c-red">{this.state.name_error}</p>              
            </div>
            <div className="f-group">
                <input type="text" className="input-field-h p-l-4"
                placeholder="ကက်တိုကရီ အမည် ရေးပါ..." 
                name="name_in_mm"
                value={this.state.name_in_mm}
                onChange={this.handleChange}
                />
                <p className="c-red">{this.state.name_in_mm_error}</p>
            </div>
            <div className="btn-group">
                <button className="btn bg-red" onClick={this.handleCancel}>Cancel</button>
                <button className="btn bg-green" onClick={this.handleCreate}>Create</button>
            </div>
        </div>
      );
    
  }
}

export default Create;
