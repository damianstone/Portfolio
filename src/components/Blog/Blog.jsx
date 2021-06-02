import React from 'react';
import BlogItems from './BlogItems';
import {
  BlogSection,
} from './BlogStyle';
import { BlogOne } from './Data';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Blog = (props) => {
  return (
    <BlogSection id='blog'>
      <SectionTitle title='Blog' />
      <BlogItems {...BlogOne} />
      <BlogItems {...BlogOne} />
      <BlogItems {...BlogOne} />
    </BlogSection>
  );
};

export default Blog;
