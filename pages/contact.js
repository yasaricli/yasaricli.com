import React from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

// Components
import Layout from "../src/layout";

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const EmailWrapper = styled.div`
  margin-bottom: 30px;

  h2 {
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    color: #555;
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

    &.email {
      margin-top: 10px;
      display: inline-block;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  margin-top: 75px;

  .social-icon {
    margin: 0 10px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Contact = () => {
  return (
    <Layout title="İletişim" className="Contact">
      <Wrapper>
        {/* Email Section */}
        <EmailWrapper>
          <h2>Bana Ulaşın</h2>
          <p>
            Sorularınız, projeleriniz, teknoloji, geliştirme ya da diğer konular
            hakkında konuşmak için benimle iletişime geçebilirsiniz.
          </p>
          <a href="mailto:hello@yasaricli.com" className="email">hello@yasaricli.com</a>
        </EmailWrapper>

        {/* Social Links Section */}
        <SocialLinksWrapper>
          <p>
            Eğer sosyal medyada aktifseniz, aşağıdaki bağlantılar üzerinden de
            bana ulaşabilirsiniz. Görüşlerinizi paylaşmaktan çekinmeyin!
          </p>

          <SocialIcon
            url="https://twitter.com/yasaricli"
            className="social-icon"
          />

          <SocialIcon
            url="https://instagram.com/icli.js"
            className="social-icon"
          />

          <SocialIcon
            url="https://linkedin.com/in/yasaricli"
            className="social-icon"
          />

          <SocialIcon url="https://gitlab.com/yasar" className="social-icon" />

          <SocialIcon
            url="https://open.spotify.com/user/btwtkopu3m0f0ym7565scqy2y"
            className="social-icon"
          />
          <SocialIcon url="https://t.me/yasaricli" className="social-icon" />
        </SocialLinksWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
