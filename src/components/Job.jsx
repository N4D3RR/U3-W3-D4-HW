import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const arrayDiFavs = useSelector((currentState) => {
    return currentState.favs.content
  })

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={4}>
        {
          // l'azienda di questo job è già nei preferiti?
          arrayDiFavs.includes(data.company_name) ? (
            <FaHeart
              className="me-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch({
                  type: 'REMOVE_FROM_FAVS',
                  payload: data.company_name,
                })
              }}
            />
          ) : (
            <FaRegHeart
              className="me-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_FAVS',
                  payload: data.company_name,
                })
              }}
            />
          )
        }
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
