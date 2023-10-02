import React from "react";
import {
  Container,
  Line,
  Parragraph,
  Photo,
  TextContainer,
  Title,
} from "./styledAbout";
import photo from "../../assets/aboutPic.png";
const AboutMe = () => {
  return (
    <div>
      <Container>
        <Photo src={photo} />
        <TextContainer>
          <Title>Hola, soy Lucas.</Title>
          <div>
            <Line>
              Este es mi Proyecto Individual para el Bootcamp de Henry. Fue
              desarrollado con React, Redux, NodeJS, Express y PostgreSQL.
            </Line>
          </div>
          <br />
          <div>
            <Line>
              Tuve la suerte de poder hacerlo con una de las cosas que más me
              gustan: Pokémon.
            </Line>
          </div>
          <br />
          <div>
            <Line>
              Fue un arduo trabajo de investigación, pero me divertí mucho
              haciéndolo. También he aprendido muchísimo en el proceso.
            </Line>
          </div>
          <br />
          <div>
            <Line>
              Quedan cosas para mejorar, pero estoy muy contento con el
              resultado.
            </Line>
            <br />
          </div>

          <Line>¡Espero te guste!</Line>
        </TextContainer>
      </Container>
    </div>
  );
};

export default AboutMe;
