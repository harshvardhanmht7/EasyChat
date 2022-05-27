import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const MessageView = ({ user, from, description, to, name, createdAt }) => {
  return (
    <div style={{ display: "block" ,width:'70%' ,textAlign:"center"}}>
      <Col>
        {from === user ? (
          <Row style={{ marginLeft: "60%", fontSize: "1.5rem" ,marginTop:'1rem',marginBottom:"1rem" }}>
            <div >
              <Card
                style={{
                  width: "30rem",
                  backgroundColor: "#EFFFFD",
                  borderRadius: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Text style={{ color: "#219F94", textAlign: "left" }}>
                    {name}
                  </Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text style={{ fontSize: "0.8rem", textAlign: "right" }}>
                    {createdAt}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Row>
        ) : (
          <Row style={{ marginLeft: "20%", fontSize: "1.5rem" , marginTop:'1rem',marginBottom:"1rem" }}>
            <div >
              <Card
                style={{
                  width: "30rem",
                  backgroundColor: "#F7F7F7",
                  borderRadius: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Text style={{ color: "#242F9B", textAlign: "left" }}>
                    {name}
                  </Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text style={{ fontSize: "0.8rem", textAlign: "right" }}>
                    {createdAt}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Row>
        )}
      </Col>
    </div>
  );
};

export default MessageView;
