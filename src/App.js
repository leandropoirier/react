const personas = [
  {
    "nombre": "juan",
    "edad":39
  },
  {
    "nombre": "laura",
    "edad" : 89
  }
]
const App = () => {
  return (
    <div className="App">
      <p>leandro</p>
      {
        personas.map(persona =>(
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
