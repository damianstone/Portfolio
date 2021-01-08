import React from 'react';
import {
  BlogWrap,
  BlogContainer,
  Column1,
  Column2,
  Column3,
  Column2Container,
  BlogTitle,
  Preview,
  Container,
  Label,
  Info,
  ImgContainer,
  Img,

} from './BlogStyle';

const BlogItems = (props) => {
  return (
    <BlogWrap>
      <BlogContainer>
        <Column1>
          <BlogTitle>{props.title}</BlogTitle>
          <Preview href={props.href} target='_blank'>
            {props.preview}
          </Preview>
        </Column1>
        <Column2>
          <Column2Container>
            <Container>
              <Label>Date: </Label>
              <Info>{props.date}</Info>
            </Container>
            <Container>
              <Label>Category: </Label>
              <Info>{props.category}</Info>
            </Container>
            <Container>
              <Label>Reading Time: </Label>
              <Info>{props.readingTime}</Info>
            </Container>
          </Column2Container>
        </Column2>
        <Column3>
          <ImgContainer>
            <Img src={props.img} alt={props.alt} />
          </ImgContainer>
        </Column3>
      </BlogContainer>
    </BlogWrap>
  );
};

export default BlogItems;
