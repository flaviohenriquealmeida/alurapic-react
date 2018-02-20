import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { photoService as service } from '../../shared/Photo';
 
class PhotoForm extends Component {

  constructor() {
    super();
    this.state = { titulo: '', url: '', descricao:  '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  clearForm() {
    this.setState({ titulo: '', url: '', descricao: ''});
  }

  handleSubmit(event) {

    event.preventDefault();
    const { titulo, url, descricao } = this.state;
    const photo = { titulo, url, descricao };
    service.save(photo)
      .then(() => this.clearForm())
      .catch(alert);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Form Photos</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input name="titulo" onInput={this.handleInputChange} value={this.state.titulo} className="form-control" autoComplete="off" autoFocus/>    
          </div>

          <div className="form-group">
            <label>URL</label>
            <input name="url" onInput={this.handleInputChange} value={this.state.url} className="form-control" autoComplete="off"/>    
          </div>

          <textarea name="descricao" onInput={this.handleInputChange} value={this.state.descricao} className="form-control" autoComplete="off"></textarea>
              
          <hr/>
              
          <button type="submit" className="btn btn-primary">
              Salvar
          </button>
        
          <Link className="btn btn-primary" to="/">Back</Link>
  
      </form>
    </div>
    );
  }
}

export default PhotoForm;