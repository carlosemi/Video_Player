import { useGetVideosQuery } from '../slices/videosApiSlice';
import Video from '../components/Video'
import { Col, Row } from 'react-bootstrap';

const HomeScreen = () => {

  const { data, error} = useGetVideosQuery();

  console.log({data})

  return (
    <>
        {data ? (
          <>
            <Row>
              {data.videos.map((video) => (
                <Col key={video._id} xs={12} sm={12} md={6} lg={6} xl={3}>
                    <Video video={video}/>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <>
            No videos
          </>
        )}
        
    </>
  )
}

export default HomeScreen