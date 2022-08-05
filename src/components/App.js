import React, { Component } from 'react';
import Content from "./Content";
import {Navbar,Container, Nav,NavDropdown,Button} from 'react-bootstrap'

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
    }
    this.addGif = this.addGif.bind(this)

  }

  async apiCall() {
    try {
      let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=bWo4v44iCpufFV5TQfL4zwsKdTHwBPUg&tag=&rating=g')
      let gif = await response.json()
      return gif
    } catch (error) {
      console.log(error)
    }
  }

  async addGif (){
    let newGif = await this.apiCall()
    this.setState(
      {
        gifs: [
          ...this.state.gifs,
          {
            image: newGif.data.image_url,
            title: newGif.data.title
          }
        ]
      }
    )
  }

  render() {
    return (
      <>
          <Navbar bg="dark" variant="dark" expand="md" className="mb-3 top fixed">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button onClick={this.addGif} variant="success">Cargar random</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Content
          gifs={this.state.gifs}
        />
      </>
    );
  }


  async componentDidMount () {
    let firstGif = await this.apiCall()
    this.setState(
      {
        gifs: [
          {
            image: firstGif.data.image_url,
            title: firstGif.data.title
          }
        ]
      }
    )
  }

  componentDidUpdate() {
    console.log('actualizando..')
  }
}

export default App;

