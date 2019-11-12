import { Component } from "react";

export class UnansweredQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {

        fetch("api/Questions")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson });
            })
            .catch(error => {
                console.error(error)
            });
    }


    render() {

        return (
            <div>

                {this.state.data.map(obj => {
                    return (

                <Accordion className="box" defaultActiveKey="1">
                    <Card className="cardBody" body inverse style={{ backgroundColor: '#333', borderColor: '#BDC3C7' }}>
                        <Accordion.Toggle className="cardHeader" as={Card.Header} eventKey="0">
                            Question number: {obj.id}
                            <IoIosArrowBack className="arrow" />

                            <h5>{obj.question}</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="cardBody">
                                        {obj.firstname}
                                        {obj.lastname}
                                        {obj.email}

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                        </Accordion>

                    )
                })}


            </div>

            
            )
    }


}