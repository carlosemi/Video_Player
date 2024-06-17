import { useGetVideosQuery } from '../slices/videosApiSlice';

const HomeScreen = () => {

  const { videos, isLoading, error} = useGetVideosQuery();

  return (
    <>
        {data.products.map((product) => (
                <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
        ))}
    </>
  )
}

export default HomeScreen