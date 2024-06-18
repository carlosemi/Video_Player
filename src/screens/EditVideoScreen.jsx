// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import { useGetVideoQuery } from "../slices/videosApiSlice";
// import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap';

// const EditVideoScreen = () => {

//     const {id: videoId} = useParams()
//     const [title, setTitle] = useState('')
//     const [video_url, setVideoUrl] = useState('')
//     const [description, setDescription] = useState('')
//     const [user_id, setId] = useState('')

//     const {data, isLoading, error} = useGetVideoQuery(videoId)

//     useEffect(() => {
//         if(data){
//             setTitle(data.video.title)
//             setVideoUrl(data.video.video_url)
//             setDescription(data.video.description)
//             setId(data.video.user_id)
//         }
//     } , [data])

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//         await editVideo({
//             title,
//             video_url,
//             description,
//         }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
//         toast.success('Product updated');
//         refetch();
//         navigate('/admin/productlist');
//         } catch (err) {
//         toast.error(err?.data?.message || err.error);
//         }
//     }

//   return (
//     <>
//     <ListGroup>
//       <ListGroup.Item>
//         <Row>
//             <Col>Title</Col>
//             <Col>
//                 <Form.Control
//                     as='textarea'
//                     value={title}
//                     onChange={(e) => setTitle(title)}>
//                 </Form.Control>
//             </Col>
//         </Row>
//     </ListGroup.Item>
//     <ListGroup.Item>
//         <Row>
//             <Col>Video URL</Col>
//             <Col>
//                 <Form.Control
//                     as='textarea'
//                     value={video_url}
//                     onChange={(e) => setVideoUrl(video_url)}>
//                 </Form.Control>
//             </Col>
//         </Row>
//     </ListGroup.Item>
//     <ListGroup.Item>
//         <Row>
//             <Col>Description</Col>
//             <Col>
//                 <Form.Control
//                     as='textarea'
//                     value={description}
//                     onChange={(e) => setDescription(description)}>
//                 </Form.Control>
//             </Col>
//         </Row>
//     </ListGroup.Item>
//     <ListGroup.Item>
//         <Row>
//             <Col>User ID</Col>
//             <Col>
//                 <Form.Control
//                     as='textarea'
//                     value={user_id}
//                     onChange={(e) => setId(user_id)}>
//                 </Form.Control>
//             </Col>
//         </Row>
//     </ListGroup.Item>
//     <ListGroup.Item>
//         <Button 
//         className='btn-block' 
//         type='button' 
//         // disabled={product.countInStock === 0}
//         onClick={null}
//         >
//             Add New Video
//         </Button>
//         </ListGroup.Item>
//     </ListGroup>
//     </>
//   );
// }

// export default EditVideoScreen;
