import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Job from './Job'

const Favs = () => {
  const arrayDiFavs = useSelector((currentState) => {
    return currentState.favs.content
  })

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {arrayDiFavs.map((azienda) => (
            <Job
              key={azienda}
              data={{
                company_name: azienda,
                url: '',
                title: '',
              }}
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Favs
