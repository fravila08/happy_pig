import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function MealTease({id, title, pic, price,}){
    return (
        <div>
        <Container>
            <Row className="itemtease">
                <Col xs lg="2" className="imgframe"><img src={pic ? pic : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} className="imgInFrame"/></Col>
                <Col ><h2 id={id}><Link to={`/meal/${id}`}>{title}</Link></h2></Col>
                <Col xs lg="2"><p>${price ? price: 5.00}.00</p></Col>
            </Row>
        </Container>

        </div>
    )
}
export default MealTease;