import React, {useState} from 'react';
import { Col, Container, Form, Row, Button, ButtonGroup } from "react-bootstrap";

export default function App() {
    const [todos, setTodos] = useState([
        { text:"mein erstes todo", status: "offen", date: '26.01.2021'},
        { text:"mein zweites todo", status: "offen", date: '26.01.2021'} ]);
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState("");
    const [todoFaellig, setTodoFaellig] = useState('');
    const [show,setShow]=useState(false)

    const handleChange = event => {
        setValue(event.target.value);
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

    /*const handleFavs = (event, idx) => {
      let favs =[...todos];
      favos[idx].favs = (favos[idx].favs === "nein") ? "ja" : "nein";
      setTodos(favs);
    }*/

    function handleFilter(e){
        setFilter(e.target.id);
    }



    return (
        <Container>
            <Col>
                <h1>TODO-Liste</h1>
            </Col>
            <Col>
                <p>Zu erledigen:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="z.B Kochen" value={value} onChange={handleChange} />



                    <Fragment>
                        <button onClick={this.toggle}>Open</button>
                        <Expand open={this.state.open}>
                            <div style={{ width: '300px', height: '400px', color: 'blue' }}>Hello</div>
                        </Expand>
                    </Fragment>


                    <input type="date" value="2021-01-20" onChange={(event) => setTodoFaellig(event.target.value)} />
                    <button type="submit">Hinzufügen</button>
                    <ButtonGroup onClick={e => handleFilter(e)}>
                        <Button id={""} onclick={e => setFilter("")}>Alle</Button>
                        <Button id={"erledigt"} onclick={e => setFilter("erledigt")}>Offen</Button>
                        <Button id={"offen"} onclick={e => setFilter("offen")}>Erledigt</Button>
                        <Button id={"favoriten"} onClick={e => setFilter("favoriten")}>Favoriten</Button>
                    </ButtonGroup>
                </form>
            </Col>

            <div className="App">
                {
                    show?<h1>+</h1>:null
                }
                <button onClick={()=>setShow(true)} >Show</button>
            </div>

            {todos.filter(todo => todo.status !== filter).map((todo, idx) =>

                <Row key={idx}>

                    <Col>
                        <br/>
                        {todo.text}{" Status: " + (todo.status)}
                        <br></br>
                        <Button onClick={(e) => handleStatus(e, idx)}>{todo.status}</Button>
                        <button type="button" class="btn btn-danger" onClick={ () => handleRemove(idx) }>delete</button>
                        {console.log(todo.status + " " + filter)}

                    </Col>
                    <Col>Fällig am: {todo.date}</Col>
                </Row>) }
        </Container>
    )
}