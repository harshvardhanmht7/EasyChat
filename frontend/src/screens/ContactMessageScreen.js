import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getContactMessage } from "../actions/messageAction";
import Loader from "../components/Loader";
import MessageView from "../components/MessageView";

const ContactMessageScreen = () => {
  const contactMessage = useSelector((state) => state.contactMessage);
  const login = useSelector((state) => state.login);
  const { messageInfo, error, loading } = contactMessage;
  const {
    userInfo: { email },
  } = login;
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const { ReceiverEmail } = useParams();

  useEffect(() => {
    dispatch(getContactMessage(ReceiverEmail));
    if (messageInfo || error) {
      setDisplay(true);
    }
  }, [dispatch]);

  return (
    <div>
      <LinkContainer to="/">
        <Button>Home</Button>
      </LinkContainer>
      <br />
      <div style={{ textAlign: "center" }}>
        {loading === true || loading === undefined ? (
          <Loader />
        ) : (
          <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
            {
              <Row>
                {messageInfo.map((message) => (
                  <Col key={message._id} sm={12} md={12} lg={12} xl={12}>
                    <MessageView
                      user={email}
                      from={message.from}
                      description={message.description}
                      to={message.to}
                      name={message.name}
                      createdAt={message.createdAt}
                    />
                  </Col>
                ))}
              </Row>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMessageScreen;
