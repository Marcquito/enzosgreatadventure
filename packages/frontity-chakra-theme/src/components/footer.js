import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect, styled } from "frontity";

const FooterSection = props => (
  <Box
    as="footer"
    pos="relative"
    bg="primary.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = props => (
  <SimpleGrid
    columns={{ base: 1, md: 3 }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = props => (
  <Box padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
      <small>© {new Date().getFullYear()} Enzo's Great Adventure</small>
      </FooterSectionItem>

      <FooterSectionItem borderColor="accent.400">
        <SocialMenu
          ml="0"
          justifyContent="center"
          menu={state.theme.socialLinks}
        />
      </FooterSectionItem>

      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        <small>Built with 🍖 by Marc's Web Studio</small>
        <FooterMenu>
        <div class="footer-menu">
          <small><a href="/about-this-site/">About This Site</a> | <a href="/contact/">Contact Us</a></small>
        </div>
        </FooterMenu>
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);

const FooterMenu = styled.div`
  .footer-menu a{
    color: var(--chakra-colors-accent-400);
    transition: 0.3s;
  }
  .footer-menu a:hover{
    color: #ffffff;
  }
`;
