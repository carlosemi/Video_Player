import { useGetVideosQuery } from '../slices/videosApiSlice';
import Video from '../components/Video'
import { Col } from 'react-bootstrap';

const HomeScreen = () => {

  const { data, error} = useGetVideosQuery();

  console.log({data})

  return (
    <>
        {data ? (
          data.videos.map((video) => (
            <Col key={data._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                <Video video={video}/>
            </Col>
          ))
        ) : (
          <>
            No videos
          </>
        )}
        
    </>
  )
}

export default HomeScreen