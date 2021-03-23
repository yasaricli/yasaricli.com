import React, { Component } from 'react';
import { Layout } from '../components/layout';

export default class Contact extends Component {
  render() {
    return (
      <Layout title="Contact" className='Contact'>
        <h2>I can be reached at</h2>
        <a href="mailto:yasaricli@gmail.com">yasaricli@gmail.com</a>
      </Layout>
    )
  }
}
