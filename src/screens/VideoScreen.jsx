import {useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Form, Row, Col, Image, ListGroup, Card, Button, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useGetVideoQuery } from "../slices/videosApiSlice";
import {toast} from 'react-toastify';

const VideoScreen = () => {

    const { id: videoId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: product, isLoading, error, refetch} = useGetVideoQuery(videoId);

    // const [createComment] = useCreateCommentMutation();

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await createComment(text).unwrap();
    //         toast.success('Comment Added');
    //         refetch();
    //     } catch (err) {
    //         toast.error(err?.data?.message || err.error);
    //     }
    // };

    return (
        <>
             Testing Video Screen
        </>
    )
}

export default VideoScreen