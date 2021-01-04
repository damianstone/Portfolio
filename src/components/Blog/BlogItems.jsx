import React from 'react';
import {
  BlogWrap,
  BlogContainer,
  Column1,
  Column2,
  Column3,
  Column1Container,
  Column2Container,
  Column3Container,
  BlogTitle,
  Preview,
  Container,
  Label,
  Info,
  ImgContainer,
  Img,

} from './BlogStyle';
import BlogImg from '../../images/blog/books.jpeg';

const BlogItems = (props) => {
  return (
    <BlogWrap>
      <BlogContainer>
        <Column1>
          <Column1Container>
            <BlogTitle>My Favorite Books of 2020</BlogTitle>
            <Preview>
              At the end of each year, I do a short end-of-the-year recap for readers and then share my favorite books that I read that year. You can see recaps and book reviews from 2019, 2018, and 2017.  Year in Review Well, fuck… we didn’t see that coming, did we?  I’ll…
            </Preview>
          </Column1Container>
        </Column1>
        <Column2>
          <Column2Container>
            <Container>
              <Label>Date: </Label>
              <Info>December 8</Info>
            </Container>
            <Container>
              <Label>Category: </Label>
              <Info>December 8</Info>
            </Container>
            <Container>
              <Label>Reading Time: </Label>
              <Info>December 8</Info>
            </Container>
          </Column2Container>
        </Column2>
        <Column3>
          <Column3Container>
            <ImgContainer>
              <Img src={BlogImg} alt='blog' />
            </ImgContainer>
          </Column3Container>
        </Column3>
      </BlogContainer>
    </BlogWrap>
  );
};

export default BlogItems;
