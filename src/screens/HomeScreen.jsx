import { useGetVideosQuery } from '../slices/videosApiSlice';
import Video from '../components/Video'
import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Spinner from '../components/Loader'

const HomeScreen = () => {

  const { data, refetch, error} = useGetVideosQuery();

  useEffect(() => {
    refetch()
  }, [refetch])

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
            <Spinner />
          </>
        )}
        
    </>
  )
}

export default HomeScreen