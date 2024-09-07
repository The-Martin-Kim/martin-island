import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CustomNavbar() {
    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand href="/"
                              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <>
                        <img
                            alt=""
                            src="/logo.png"
                            width={"30"}
                            height={"30"}
                            className="d-inline-block align-top"
                        />
                        <div style={{textAlign: 'center', marginLeft: "10px"}}>
                            INE.TODAY
                        </div>
                    </>
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;