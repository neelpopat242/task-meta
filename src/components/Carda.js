import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carda = (props) => {

    return (
        <div className='col-4 my-3'>
            <Card style={{ width: '18rem'   }}>
                <Card.Img style={{height : "200px"}} variant="top" src={props.data.ImageUrl} />
                <Card.Body>
                    <Card.Title>{props.data.Name}</Card.Title>
                    <Card.Text>
                    { props.data.ShortDesc.length > 100 ? props.data.ShortDesc.substring(0,100) + '...' : props.data.ShortDesc }
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Carda