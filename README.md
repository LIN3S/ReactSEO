# LIN3S ReactSEO

React components and functions to help building SEO related stuff in a React application.

This library will help you integrating the [Helmet][1] component through an opinionated strategy-based implementation.

## Installation

**Download the package:**

* Using npm

`$ npm install lin3s-react-seo`

* Using yarn

`$ yarn add lin3s-react-seo`

## How it works

This library provides a simple yet extensible way of working with the underling [Helmet][1] component with an strategy 
(and defaults) based implementation. After defining the default values we will implement the strategy for passing down 
the props to the underlying [Helmet][1] component.

Our strategy method will return an object with the same properties as the [Helmet][1] one receives as props. We will 
define at project level which ones are those that we want to map with the [Helmet][1] ones. 

| Parameter                |Description         |
|--------------------------|:-------------------|
| locale                   | Page's language    |
| title                    | Page's title       |
| siteName                 | Site's name        |
| description              | Page's description |
| image                    | Used for the twitter card, opengraph and google + |
| twitterUser              | The publisher/author's twitter user |
| contentType              | The page's content type. Used for the opengraph |
| canonicalUrl             | The page's canonical url |
| relNext                  | Identifies the next paginated page |
| relPrev                  | Identifies the previous paginated page |
| noCrawl                  | Sets the `noindex, nofollow` attributes to the robots tag |
| googleSiteVerification   | Google Site verification id |
| published                | When the article was first published. ([ISO 8601][2] format) |
| updated                  | When the article was last changed. ([ISO 8601][2] format) |
| category                 | A high-level section name. E.g. Technology |
| tags                     | Tag words associated with this page (article). |
| schema                   | Page's type schema |
| facebookId               | The facebook app's id |

## Usage

The provided examples will use [react-intl][3] for translating our messages but the usage of an internationalization 
library it is not mandatory.

### Default values

In order to use the default values (if not set explicitly through the strategy or passed via props to the Helmet 
component) we must provide them initially to the Helmet component.

##### ui/seo/defaults.js
```js
export default intl => ({
  googleSiteVerification: 'R4czJd-vWsodD1szVs8FPDDzCYUjOjKfVKttQTiKo-M',
  schema: 'WebPage',
  defaultTitle: 'Your project\'s default title',
  title: intl.formatMessage({id: 'home.title'}),
  fullTitle: intl.formatMessage({id: 'home.title'}),
  description: intl.formatMessage({id: 'home.meta_description'}),
});
```
##### ui/seo/Helmet.js


```jsx
import Helmet from './ui/seo/Helmet';
import helmetDefaults from './ui/seo/defaults';

const DefaultHelmet = injectIntl(({intl}) => <Helmet {...helmetDefaults(intl)} />);

// Include this component in your App tree.
``` 



[1]: https://github.com/nfl/react-helmet
[2]: https://en.wikipedia.org/wiki/ISO_8601
[3]: https://github.com/nfl/react-intl
