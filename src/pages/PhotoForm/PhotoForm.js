import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { photoService as service } from '../../shared/Photo';

class PhotoForm extends Component {

  constructor() {
    super();
    this.state = { titulo: '', url: '', descricao:  '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  } 

  componentWillMount() {

    const id = this.props.match.params.id || 0;
    if(id) service.getById(id)
      .then(photo => {
        const { titulo, url, descricao, _id} = photo;
        this.setState({titulo, url, descricao, _id})
      });
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
    this.setState({ titulo: '', url: '', descricao: '', _id: ''});
  }

  handleSubmit(event) {

    event.preventDefault();
    const { titulo, url, descricao, _id } = this.state;
    const photo = { titulo, url, descricao, _id };
    
    if(photo._id) {
      service.update(photo)
        .then(() => this.props.history.push('/'))
        .catch(alert);
    } else {
      service.add(photo)
        .then(() => this.clearForm())
        .catch(alert);
    }
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

// é isso que permite ter acesso aos parâmetros 
// recebidos na URL segumentada
export default withRouter(PhotoForm);