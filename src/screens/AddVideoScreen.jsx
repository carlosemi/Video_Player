import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useCreateVideoMutation } from '../slices/videosApiSlice';
import {toast} from 'react-toastify'

const AddVideoScreen = () => {

    const [title, setTitle] = useState('')
    const [video_url, setVideoUrl] = useState('')
    const [description, setDescription] = useState('')
    const [user_id, setId] = useState('')

    const [createVideo, video, isLoading] = useCreateVideoMutation()

    const navigate = useNavigate()

    useEffect(() =>{
        console.log(title)
    }, [title]) 

    const createVideoHandler = async (e) => {
        if(window.confirm('Are you sure you want to add a new Video')){
            e.preventDefault();
            try {
            await createVideo({
                title,
                video_url,
                description,
                user_id,
            }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
            toast.success('Product updated');
            navigate('/');
            } catch (err) {
            toast.error(err?.data?.message || err.error);
            }
            
        }
    }

  return (
    <>
    <ListGroup>
      <ListGroup.Item>
        <Row>
            <Col>Title</Col>
            <Col>
                <Form.Control
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Row>
            <Col>Video URL</Col>
            <Col>
                <Form.Control
                    type='text'
                    value={video_url}
                    onChange={(e) => setVideoUrl(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Row>
            <Col>Description</Col>
            <Col>
                <Form.Control
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Row>
            <Col>User ID</Col>
            <Col>
                <Form.Control
                    type='text'
                    value={user_id}
                    onChange={(e) => setId(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Button 
        className='btn-block' 
        type='button' 
        // disabled={product.countInStock === 0}
        onClick={createVideoHandler}
        >
            Add New Video
        </Button>
        </ListGroup.Item>
    </ListGroup>
    </>
  );
}

export default AddVideoScreen;
