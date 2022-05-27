import React, { useEffect, useState ,useRef} from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams,useNavigate } from "react-router-dom";
import { getContactMessage ,sendMessage } from "../actions/messageAction";
import Loader from "../components/Loader";
import MessageView from "../components/MessageView";

const ContactMessageScreen = () => {
 const navigate=useNavigate()
  const contactMessage = useSelector((state) => state.contactMessage);
 
  const login = useSelector((state) => state.login);
  const { messageInfo, error, loading } = contactMessage;
  const {
    userInfo: { email },
  } = login;
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const { ReceiverEmail } = useParams();

  const [messageText,setMessageTextHandler]=useState('')

  const addMessage =useSelector((state)=>state.addMessage)

  const {addMessageInfo,loadingSend,errorSend}=addMessage

  const textInputRef = useRef(null);
  const textareaRef=useRef(null)

  const [rowCount,setRowCount]=useState(1)
  

  useEffect(() => {
    
    
    dispatch(getContactMessage(ReceiverEmail));
    if (messageInfo || error) {
      setDisplay(true);
    }
  }, []);

  useEffect(() => {
    if(loadingSend===false){
      dispatch(getContactMessage(ReceiverEmail))
    }    
  }, [loadingSend]);


 const addMessageHandler=(e)=>{
 e.preventDefault()

 dispatch(sendMessage(messageText,ReceiverEmail))
 setMessageTextHandler('')

 

 }

 useEffect(()=>{

  if(messageText.length>10){
    setRowCount(3)
  }
  else{
    setRowCount(1)
  }

  console.log(textInputRef.current)
  textInputRef.current.focus();
  // textInputRef.setSelectionRange(textInputRef.current.value.length, textInputRef.current.value.length)

 },[messageText])



  const goBack=()=>{
    navigate(-1)
  }

  return (
    <div>
     
        <i  className="fa fa-chevron-left" aria-hidden="true" onClick={goBack} style={{margin:'2rem' ,fontSize:'2rem' ,cursor:'pointer' }}></i>
     
      
      <br />
      <div style={{marginLeft:'2rem'}}>
           {
             
             <Form className='d-flex' onSubmit={addMessageHandler}  >
               <Form.Group className="mb-3" controlId="messageText" style={{width:'50rem',marginLeft:'3rem'}}>
               <Form.Control as="textarea" rows={rowCount}
              placeholder="Write a message !"
              name="messageText"
              value={messageText}
              ref={textInputRef}
              onChange={(e) => setMessageTextHandler(e.target.value)}
            />
                 

                 {/* {messageText.length<20?<Form.Control
                type="text"
                placeholder="Write a message !"
                name="messageText"
                value={messageText}
                ref={textInputRef}
                onChange={(e) => setMessageTextHandler(e.target.value)}
              />:
              <Form.Control as="textarea" rows={3}
              placeholder="Write a message !"
              name="messageText"
              value={messageText}
              ref={textInputRef}
              onChange={(e) => setMessageTextHandler(e.target.value)}
            />} */}
              
              
            </Form.Group>
            
            <Button variant="danger" type="submit"  style={{marginLeft:'1rem',padding:0,height:'2.4rem'}} >
            <i   className="fa fa-send-o" aria-hidden="true" onClick={goBack} style={{ fontSize:'1rem',width:'3rem', cursor:'pointer' ,height:'0.6rem'}}></i>
            </Button>
            
            
             </Form>
           }
           </div>
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
