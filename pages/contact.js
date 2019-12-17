import React, { Component } from 'react';
import Link from 'next/link';

import { Layout } from '../components/layout';

// import styles..
import "../styles/styles.less";

export default class Contact extends Component {
  render() {
    return (
      <Layout className='Contact'>
        <h2>I can be reached by</h2>
        <a href="mailto:yasaricli@gmail.com">yasaricli@gmail.com</a>
      </Layout>
    )
  }
}
