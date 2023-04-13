import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

// Components
import Layout from "../src/layout";

const Wrapper = styled.div`
  text-align: center;
`;

const EmailWrapper = styled.div`
  h2 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 30px;
    line-height: 80px;
    border-bottom: 5px solid;

    &:hover {
      color: #ea0a0a;
      border-bottom: 5px solid #ea0a0a;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  margin-top: 20px;

  .social-icon {
    margin: 0 10px;
  }
`;

const Contact = () => {
  return (
    <Layout title="Contact" className="Contact">
      <Wrapper>
        <EmailWrapper>
          <h2>I can be reached at</h2>
          <a href="mailto:yasaricli@gmail.com" className="email">
            yasaricli@gmail.com
          </a>
        </EmailWrapper>

        <SocialLinksWrapper>
          <SocialIcon url="https://github.com/yasaricli" />
          <SocialIcon url="https://gitlab.com/yasar" />
          <SocialIcon url="https://twitter.com/yasaricli" />
          <SocialIcon url="https://instagram.com/icli.js" />
          <SocialIcon url="https://linkedin.com/in/yasaricli" />
          <SocialIcon url="https://open.spotify.com/user/btwtkopu3m0f0ym7565scqy2y" />
          <SocialIcon url="https://t.me/yasaricli" />
        </SocialLinksWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
