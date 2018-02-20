import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { photoService as service } from '../../shared/Photo';
 
class PhotoForm extends Component {

  constructor() {
    super();
    this.state = { titulo: '', url: '', descricao:  '' };
    this.setTitle = this.setTitle.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  setTitle(event) {
    this.setState({ titulo: event.target.value });
  }

  setUrl(event) {
    this.setState({ url: event.target.value });
  }

  setDescription(event) {
    this.setState({ descricao: event.target.value });
  }

  clearForm() {
    this.setState({ titulo: '', url: '', descricao: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
    const titulo = this.state.titulo;
    const url = this.state.url;
    const descricao = this.state.descricao;
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
            <input onInput={this.setTitle} value={this.state.titulo} className="form-control" autoComplete="off" autoFocus/>    
          </div>

          <div className="form-group">
            <label>URL</label>
            <input onInput={this.setUrl} value={this.state.url} className="form-control" autoComplete="off"/>    
          </div>

          <textarea onInput={this.setDescription} value={this.state.descricao} className="form-control" autoComplete="off"></textarea>
              
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