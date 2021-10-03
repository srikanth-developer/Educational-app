import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import ModalBody from 'react-bootstrap/ModalBody'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function EducationalForm({show}, {data}) {
  

console.log('in form',show);

    return (
        <div>
        <Modal show={show} onHide={data} >
        <Modal.Header closeButton >
          <Modal.Title>Educational</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Institution</Form.Label>
      <Form.Control type="text" placeholder="Enter Institution" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Course</Form.Label>
      <Form.Control type="text" placeholder="Course" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>PassingYear</Form.Label>
      <Form.Control type="date.Month()" placeholder="Enter YOP" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Percentage</Form.Label>
      <Form.Control type="number" placeholder="Percentage" />
    </Form.Group>
  </Row>
</Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary">Add</Button>
          {/* <Button variant="secondary" onClick={handleClose}> */}
            {/* Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EducationalForm
