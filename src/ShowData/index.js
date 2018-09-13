import React from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, Pagination, PaginationItem, PaginationLink} from 'reactstrap'


const styles = {
    contain : {
        width : '250px'
    }
}

class ShowData extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users : [],
            page : 1
        }
    }

    getUser = URL => {
        fetch (`https://reqres.in/api/users?${URL}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
            let users = data.data.map(list => {
                        return (
                            <Container key={list.id} style={styles.contain}>
                                <Card >
                                    <CardImg src={list.avatar} />
                                    <CardBody>
                                        <CardText>{list.first_name} {list.last_name}</CardText>
                                    </CardBody>
                                </Card>
                            </Container>
                        )
            })
            this.setState({ users : users })
        })
    }

    componentDidMount(){
      this.getUser();
    }

    nextChange = async () => {
        const page = await this.state.page;
        await this.setState({ page: page + 1 });
        await this.getUser(`page=${this.state.page}`);
      };
    
      prevChange = async () => {
        const page = await this.state.page;
        await this.setState({ page: page - 1 });
        await this.getUser(`page=${this.state.page}`);
      };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="4">
                            <Pagination className="text-center">
                            <PaginationItem>
                            <PaginationLink previous page={this.state.page}
                            onClick={this.prevChange} />
                            </PaginationItem>

                            <PaginationItem>
                            <PaginationLink next page={this.state.page}
                            onClick={this.nextChange} />
                            </PaginationItem>
                        </Pagination>
                        {this.state.users}  
                        </Col>
                        
                        <Col sm="4"></Col>
                    </Row>
                 </Container>
            </div>
        )
    }
}

export default ShowData
