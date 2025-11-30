import styled from 'styled-components';

function Footer() {
    return (
        <>
            <FooterPage>
                © 2025, by <a href="https://github.com/hernandesdoug">Douglas Hernandes</a>
            </FooterPage>
        </>
    )
}
const FooterPage = styled.footer`
  margin: 10px 0 0;
  padding: 10px;
  text-align: center;
`;

export default Footer;