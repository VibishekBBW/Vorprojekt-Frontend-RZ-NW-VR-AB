import './App.css';
import React, {useState} from 'react';
import {Col, Container, Form, Row, Button, ButtonGroup} from "react-bootstrap";
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState("");
    const [todoFaellig, setTodoFaellig] = useState('');
    const today = moment().format("DD.MM.yyyy");


    const handleChange = event => {
        setValue(event.target.value);
        event.preventDefault();
    }

    const handleSubmit = event => {
        setTodos(todos.concat({text: value, status: "offen", date: todoFaellig}));
        event.preventDefault();
    }

    const handleRemove = idx => {
        setTodos(todos.filter((todo, i) => i !== idx));
    };

    const handleStatus = (event, idx) => {
        let stats = [...todos];
        stats[idx].status = (stats[idx].status === "offen") ? "erledigt" : "offen";
        setTodos(stats);
    }

    function handleFilter(e) {
        setFilter(e.target.id);
    }

    const handleUrgency = (event, idx) => {
        let stats = [...todos];
        stats[idx].urgency = (stats[idx].urgency === "sehr wichtig") ? "wichtig" : "nicht wichtig";
        setTodos(stats);
    }


    return (
        <Container>
            <Col>
                <h1>TodoListe:</h1>
            </Col>
            <Col>
                <form onSubmit={handleSubmit}>

                    <Form.Control type="text" value={value} onChange={handleChange} placeholder="z.B Kochen"/>
                    <input type="date" value="2021-01-20" onChange={(event) => setTodoFaellig(event.target.value)}/>
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
            </Col>
            {todos.filter(todo => todo.status !== filter).map((todo, idx) =>
                <Row key={idx}>

                    <Col>
                        <br/>
                        {todo.text}
                        <br></br>
                        {" Status: " + (todo.status)}
                        <br></br>
                        Erstellt: {today}
                        <br></br>
                        Dringlichkeit: {todo.urgency}
                        <br></br>
                        Fällig am: {todo.date}
                        <br></br>
                        <Button size="sm" variant="info" onClick={(e) => handleStatus(e, idx)}>{todo.status}</Button>
                        <Button size="sm" variant="danger" type="button"
                                onClick={() => handleRemove(idx)}>delete</Button>
                        {console.log(todo.status + " " + filter)}


                    </Col>
                </Row>)}
        </Container>

    );
}

export default App;

