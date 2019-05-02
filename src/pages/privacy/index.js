import React from 'react'
import Layout from '../../components/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import "react-tabs/style/react-tabs.css";

const PrivacyPage = class extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section is-light">
          <div className="container">
            <h1 className="has-text-centered">We take your privacy seriously</h1>
            <div className="box m-t-50">
              <Tabs selectedTabClassName="is-active">
                <div className="tabs is-centered">
                  <TabList className="">
                    <Tab className="is-size-3"><a>Privacy Policy</a></Tab>
                    <Tab className="is-size-3"><a>Cookie Policy</a></Tab>
                  </TabList>
                </div>

                <TabPanel className="content">
                  <h1>Cookie Policy for HR Strategies, LLC</h1>
                  <p><small>Last Updated: January 01, 1967</small></p>
                  <p>This is the Cookie Policy for HR Strategies, LLC, accessible from hrstrategies.org</p>
                  <h5>What Are Cookies</h5>
                  <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                  <p>For more general information on cookies see the Wikipedia article on HTTP Cookies.</p>
                  <h5>How We Use Cookies</h5>
                  <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                  <h5>Disabling Cookies</h5>
                  <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
                  <h5>The Cookies We Set</h5>
                  <ul>
                    <li>
                        <p>Site preferences cookies</p>
                        <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                    </li>
                  </ul>
                  <h5>Third Party Cookies</h5>
                  <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                  <ul>
                    <li>
                        <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                        <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                    </li>
                    <li>
                        <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
                    </li>
                  </ul>
                  <h5>More Information</h5>
                  <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the Generator of <a href="https://cookiepolicygenerator.com">GDPR Cookies Policy Template</a> and the <a href="https://cookiespolicytemplate.com/">GDPR Cookies Policy Template</a> based on the <a href="https://termsfeed.com/privacy-policy/generator/">Privacy Policy Generator from TermsFeed</a>.</p>
                  <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
                  <ul>
                    <li>Email: contact@hrstrategies.org</li>
                  </ul>
                </TabPanel>
                <TabPanel className="content">
                  <h1>Welcome to our Privacy Policy</h1>
                  <h3>Your privacy is critically important to us.</h3>
                  <p>It is HR Strategies, LLC's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://www.hrstrategies.org">https://www.hrstrategies.org</a> (hereinafter, "us", "we", or "https://www.hrstrategies.org"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
                  <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>
                  <h5>Website Visitors</h5>
                  <p>Like most website operators, HR Strategies, LLC collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. HR Strategies, LLC's purpose in collecting non-personally identifying information is to better understand how HR Strategies, LLC's visitors use its website. From time to time, HR Strategies, LLC may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
                  <p>HR Strategies, LLC also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.hrstrategies.org blog posts. HR Strategies, LLC only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
                  <h5>Gathering of Personally-Identifying Information</h5>
                  <p>Certain visitors to HR Strategies, LLC's websites choose to interact with HR Strategies, LLC in ways that require HR Strategies, LLC to gather personally-identifying information. The amount and type of information that HR Strategies, LLC gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.hrstrategies.org to provide a username and email address.</p>
                  <h5>Security</h5>
                  <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                  <h5>Links To External Sites</h5>
                  <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
                  <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
                  <h5>Protection of Certain Personally-Identifying Information</h5>
                  <p>HR Strategies, LLC discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on HR Strategies, LLC's behalf or to provide services available at HR Strategies, LLC's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using HR Strategies, LLC's website, you consent to the transfer of such information to them. HR Strategies, LLC will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, HR Strategies, LLC discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when HR Strategies, LLC believes in good faith that disclosure is reasonably necessary to protect the property or rights of HR Strategies, LLC, third parties or the public at large.</p>
                  <p>If you are a registered user of https://www.hrstrategies.org and have supplied your email address, HR Strategies, LLC may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with HR Strategies, LLC and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. HR Strategies, LLC takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>
                  <h5>Aggregated Statistics</h5>
                  <p>HR Strategies, LLC may collect statistics about the behavior of visitors to its website. HR Strategies, LLC may display this information publicly or provide it to others. However, HR Strategies, LLC does not disclose your personally-identifying information.</p>
                  <h5>Affiliate Disclosure</h5>
                  <p>This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>
                  <h5>Cookies</h5>
                  <p>To enrich and perfect your online experience, HR Strategies, LLC uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
                  <p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. HR Strategies, LLC uses cookies to help HR Strategies, LLC identify and track visitors, their usage of https://www.hrstrategies.org, and their website access preferences. HR Strategies, LLC visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using HR Strategies, LLC's websites, with the drawback that certain features of HR Strategies, LLC's websites may not function properly without the aid of cookies.</p>
                  <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to HR Strategies, LLC's use of cookies.</p>
                  <h5>Privacy Policy Changes</h5>
                  <p>Although most changes are likely to be minor, HR Strategies, LLC may change its Privacy Policy from time to time, and in HR Strategies, LLC's sole discretion. HR Strategies, LLC encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
                  <h5>Contact Information</h5>
                  <p>If you have any questions about this Privacy Policy, please contact us via <a href="mailto:contact@hrstrategies.org">email</a> or <a href="tel:3023768595">phone</a>.</p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PrivacyPage
