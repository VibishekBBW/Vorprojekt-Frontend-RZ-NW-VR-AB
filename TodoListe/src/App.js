import './App.css';
import React, {useState} from 'react';
import { Col, Container, Form, Row, Button, ButtonGroup } from "react-bootstrap";
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";



function App() {
  const [todos, setTodos] = useState([ ]);
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [filter, setFilter] = useState("");
    const [todoFaellig, setTodoFaellig] = useState('');
    const [personP, setPersonP] = useState('');
    const today = moment().format("DD.MM.yyyy");


    const handleChange = event => {
      setValue(event.target.value);
      event.preventDefault();
    }

    const handleChange2 = event => {
        setValue2(event.target.value);
        event.preventDefault();
    }
  
    const handleSubmit = event => {
        setTodos(todos.concat({text: value, status: "offen", date: todoFaellig}));
      event.preventDefault();
    }
  
    const handleRemove = idx => {
     setTodos(todos.filter((todo,i) => i !== idx));
      };
  
    const handleStatus = (event, idx) => {
      let stats = [...todos];
      stats[idx].status = (stats[idx].status === "offen") ? "erledigt" : "offen";
      setTodos(stats);
    }

    const personSubmit = event => {
        setPersonP(personP.concat({text: value2}));
        event.preventDefault();
    }

    function handleFilter(e){
      setFilter(e.target.id);
    }  







  return (
    <Container>
      <Col>
      <h1>TodoListe:</h1>
      </Col>
      <Col>
      <form onSubmit={handleSubmit}>
      
      <Form.Control type="text" value={value} onChange={handleChange} placeholder="z.B Kochen" />
      <input type="date" value="2021-01-20" onChange={(event) => setTodoFaellig(event.target.value)} />
      <Button size="sm" variant="success" type="submit">Hinzufügen</Button>
      <br></br>
      <br></br>
      <br></br>


      <ButtonGroup size="sm" onClick={e => handleFilter(e)}>
            <Button id={""} onclick={e => setFilter("")}>Alle</Button>
            <Button id={"erledigt"} onclick={e => setFilter("erledigt")}>Offen</Button>
            <Button id={"offen"} onclick={e => setFilter("offen")}>Erledigt</Button>
            <Button id={"favoriten"} onClick={e => setFilter("favoriten")}>Favoriten</Button>
      </ButtonGroup>


      </form>

          <form onSubmit={personSubmit}>

              <br/>
              <br/>
              <p><small>optional</small></p>
              <Form.Control type="text" value={value2} onChange={handleChange2} placeholder="Person hinzufügen" />

              <Button size="sm" variant="secondary" type="submit">Hinzufügen</Button>
              <br></br>
              <br></br>
              <br></br>

          </form>


      </Col>
      {todos.filter(todo => todo.status !== filter).map((todo, idx) =>
      <Row key={idx}>
        
        <Col>
          <br/>
          {todo.text}
          <br></br>
          {" Status: " + (todo.status)}  
          <br></br>
          Erstellt:  {today}
          <br></br>
          Fällig am: {todo.date}
          <br></br>
            <div>
                <Button size="sm"variant="info" onClick={(e) => handleStatus(e, idx)}>{todo.status}</Button>
                <Button size="sm" variant="danger"  type="button" onClick={ () => handleRemove(idx) }>delete</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Personen
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >{value2}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

          {console.log(todo.status + " " + filter)}
          
          {personP.value2}
        </Col>
      </Row>) }
    </Container>
    
  );
}

export default App;

