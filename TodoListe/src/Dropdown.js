function Dropdown() {
    const [name, setName] = React.useState([]);

    React.useEffect(() => {
        async function getCharacters() {
            const response = await fetch(App.js/);
            const body = await response.json();
            setItems(body.results.map(({ name }) => ({ label: name, value: name })));
        }
        getCharacters();
    }, []);

    return (
...
);
}