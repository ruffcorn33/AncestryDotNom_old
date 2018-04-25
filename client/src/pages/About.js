import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="http://www.culinaryone.com/wp-content/uploads/2012/12/baking_and_pastry_careers.png">
      <h1>Ancestry*dot*Nom</h1>
      <h2>Where families meet to share recipes</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To AncestryDotNom!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
AncestyDotNom is a place where families can share and preserve recipes.  Remember Grandma's Thanksgiving relish?  Let's preserve that recipe here.  Your cousin remembers there being more orange zest?  She can add a note to the recipe.  Your Uncle Bob has been bragging that abouts the best damn grilled chicken ever?  Let's share.  Who remembers Aunt Betty's Jello salad with shaved carrots, cottage cheese and sliced green olives?  Should we make that recipe available for future generations?  Maaaybe....  You decide because this is your family cookbook and you can do whatever you want with it.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
