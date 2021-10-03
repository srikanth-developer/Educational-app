import React from 'react'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import EducationalComponent from './EducationalComponent'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
function EducationalTable(props) {
 
        console.log(props);
    return (
        <div>
            <Container>
            <Table striped bordered  >
            <thead>
             <tr>
             <th>SLNO</th>
              <th>Institution</th>
              <th>Course</th>
              <th>PassingYear</th>
              <th>Percentage</th>
              <th><Button variant="primary" onClick={props.data}>Add</Button></th>
              {/* <i class="fas fa-plus"  ></i> */}
             </tr>
            </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</Table>
</Container>

        </div>
    )
}

export default EducationalTable
