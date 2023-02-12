import React from "react";
import { Card, Col } from "react-bootstrap";

export function CardDashboard(props) {
  return (
        <Col xs={12} md={12}>
          <Card
            style={{ height: props.height, width: props.width }}
          >
            <Card.Header 
              as="h5"
              style={{ 
                backgroundColor: props.backgroundColorHeader, 
                color: props.colorHeader, 
                justifyContent: props.justifyContentHeader, 
                alignItems: props.alignItemsHeader, 
                display: props.displayHeader 
              }}
            >
              {props.title}
            </Card.Header>
            <Card.Body
              style={{
                justifyContent: props.justifyContentBody,
                alignItems: props.alignItemsBody,
                display: props.displayBody,
              }}
            >
              <Card.Title
                style={{
                  color: props.colorTitle,
                  fontSize: props.fontSizeTitle,
                }}
              >
                {props.value}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
  );
};
