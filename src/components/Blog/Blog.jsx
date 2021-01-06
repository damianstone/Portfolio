import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/blog'>
          <Title>Blog</Title>
        </Link>
      </SectionTitle>
      <BlogItems />
      <BlogItems />
      <BlogItems />
    </BlogSection>
  );
};

export default Blog;
