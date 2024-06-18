import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEditVideoMutation, useGetVideoQuery } from "../slices/videosApiSlice";
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap';
import {toast} from 'react-toastify'

const EditVideoScreen = () => {

    const {id: videoId} = useParams()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {data, isLoading, refetch, error} = useGetVideoQuery(videoId)

    const [editVideo] = useEditVideoMutation()


    useEffect(() => {
        if(data){
            setTitle(data.video.title)
            setDescription(data.video.description)
        }
    } , [data])

    const navigate = useNavigate()

    const editHandler = async (e) => {
        e.preventDefault();
        try {
        await editVideo({
            video_id: videoId,
            title,
            description,
        }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
        toast.success('Product updated');
        refetch();
        navigate('/');
        
        } catch (err) {
        toast.error(err?.data?.message || err.error);
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
                    as='textarea'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Row>
            <Col>Description</Col>
            <Col>
                <Form.Control
                    as='textarea'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
    <ListGroup.Item>
        <Button 
        className='btn-block' 
        type='button' 
        // disabled={product.countInStock === 0}
        onClick={editHandler}
        >
            Edit Video
        </Button>
        </ListGroup.Item>
    </ListGroup>
    </>
  );
}

export default EditVideoScreen;
