import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pdf from "react-to-pdf";
import './App.css';

const ref = React.createRef();

function App() {
  return (
    <div className="container">
      <h1>Exportar Datos en React</h1>
      <hr/>
      <table class="table" id="table-to-xls">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Peter</td>
            <td>Parker</td>
            <td>@la_arañahumana</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Clark</td>
            <td>Kent</td>
            <td>@superman</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
      </tbody>
    </table>

    <div ref={ref}>
      <h2>Saludos</h2>
      <p>Hello everyone! dijo Spider-Man</p>
    </div>
    
    <table>
        <tr>
          <td><h2>Export Excel</h2></td>
          <td><h2>Export PDF</h2></td>
        </tr>
        <tr>
          <td>
          <ReactHTMLTableToExcel 
            id="table-to-xls" //id se le coloca a la tabla
            className="btn btn-success" //es el nombre del boton
            table="table-to-xls" //nombre de la tabla y es igual al del id
            filename="tablexls" //nombre del archivo
            sheet="tablexls" //nombre de la hoja
            //nombre del boton
            buttonText="Descargar como XLS"/>  
            </td>
          <td>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button className="btn btn-danger" onClick={toPdf}>Descargar como PDF</button>}
            </Pdf>

          </td>
        </tr>

      </table>

    </div>
  );
}

export default App;