import {
  CONTACT_MESSAGE_REQUEST,
  CONTACT_MESSAGE_SUCCESS,
  CONTACT_MESSAGE_FAIL,
  ADD_MESSAGE_FAIL,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
} from "../constants/messageContants";
import { getState } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

export const getContactMessage = (email) => async (dispatch, getState) => {
  dispatch({ type: CONTACT_MESSAGE_REQUEST });
  const {
    login: { userInfo },
  } = getState();
  const token = userInfo.token;

  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/messages/contactmessage/${email}`,
      config
    );

    dispatch({
      type: CONTACT_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_MESSAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// api/messages/addmessage

export const sendMessage = (description, to) => async (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE_REQUEST });
  const {
    login: { userInfo },
  } = getState();
  const token = userInfo.token;

  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/messages/addmessage`, {
        description,
        to
      },
      config
     
    );

    dispatch({
      type: ADD_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_MESSAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
