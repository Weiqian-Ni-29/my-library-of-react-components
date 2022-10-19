// A card component with image, title, description and a button.

import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText} from "mdb-react-ui-kit";

function Card(props){
    return (
        <div>
            <MDBCard style={{maxWidth:"22rem"}}>
                <MDBCardImage src={props.dataURL} position="top" style={{marginRight:"4rem", height:"15rem"}}/>
                <MDBCardBody>
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>{props.description}</MDBCardText>
                    <MDBBtn href={props.dataURL}>Details</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}
export default Card;
