import React from 'react';
import BlogItems from './BlogItems';
import {
  BlogSection,
  SectionTitle,
  Title,
} from './BlogStyle';

const Blog = (props) => {
  return (
    <BlogSection id='blog'>
      <SectionTitle>
        <Title>Blog</Title>
      </SectionTitle>
      <BlogItems />
      <BlogItems />
      <BlogItems />
    </BlogSection>
  );
};

export default Blog;
