import { useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const usuarios = [
    { nombre: "Juan", apellido: "Perez", edad: 30 },
    { nombre: "Ana", apellido: "Gomez", edad: 25 },
    { nombre: "Carlos", apellido: "Lopez", edad: 40 },
    { nombre: "Katherine", apellido: "Guardado", edad: 17 },
    { nombre: "Alexis", apellido: "Diaz", edad: 17 }
  ];

  return (
    <>
      <div className="card">
        <button onClick={() => {
          if(count < 10){
            setCount(count + 1);
          }else{
            alert("Llegaste al límite");
          }
          
        }}>
          Contador es {count}
        </button>
      </div>

      <div className='card'>
        <h1>Usuarios</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;