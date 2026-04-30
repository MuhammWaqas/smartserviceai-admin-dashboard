import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ProviderModal() {

    return (
        <Container>
            <Form >
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Services</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Provider Image</Form.Label>

                            <Form.Control
                                type="file"
                                accept="image/*"
                                required
                            // onChange={(e) => setImage(e.target.files[0])}
                            />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Stock item name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                            // value={consultantRole}
                            // onChange={(e) => setConsultantRole(e.target.value)}
                            >
                                <option value="">Select Company</option>
                                <option value="">Active</option>
                                <option value="">Pending</option>
                                {/*
                                 {roles.map((roles) => (
                                    <option key={roles.id} value={roles.role_name}>
                                        {roles.role_name}
                                    </option>
                                ))} */}
                            </Form.Select>
                        </Form.Group>
                    </Col>


                </Row>
                <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary" className="secondary" >
                        Cancel & Close
                    </Button>
                    <Button className="primary" variant="primary" type="submit">
                        {/* {stock ? "Update" : "Save"} */} Save
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
