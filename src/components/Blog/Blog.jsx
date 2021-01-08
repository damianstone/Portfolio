import React from 'react';
import BlogItems from './BlogItems';
import {
  BlogSection,
  SectionTitle,
  Title,
} from './BlogStyle';
import { BlogOne } from './Data';

const Blog = (props) => {
  return (
    <BlogSection id='blog'>
      <SectionTitle>
        <Title>Blog</Title>
      </SectionTitle>
      <BlogItems {...BlogOne} />
    </BlogSection>
  );
};

export default Blog;
