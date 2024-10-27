import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CustomNavbar() {
    return (
        <Navbar bg="light" fixed="top">
            <Container>
                <Nav className="me-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/" className="GowunDodum-Regular">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" className="GowunDodum-Regular">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/lecture" className="GowunDodum-Regular">Q-bank</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Brand href="/"
                              className="ms-auto">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className="GowunDodum-Regular" style={{textAlign: 'center', marginLeft: "10px"}}>
                            <strong>Martin-Island.com</strong>
                        </div>
                    </div>
                </Navbar.Brand>

            </Container>
        </Navbar>
    );
}

export default CustomNavbar;