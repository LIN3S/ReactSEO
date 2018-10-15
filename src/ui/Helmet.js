import React from 'react';
import Helmet from 'react-helmet';

import getMetaTags from './../util/getMetaTags';

/*

  Full list of possible rest props:
  ---------------------------------
  locale,
  title,
  siteName,
  description,
  image,
  twitterUser,
  contentType,
  canonicalUrl,
  relNext,
  relPrev,
  noCrawl,
  googleSiteVerification,
  published,
  updated,
  category,
  tags,
  schema,
  facebookId,
 */

const mapDataToHelmetPropsWithStrategy = ({strategy, ...rest}) => {
  const propsToMap = rest;
  Object.keys(strategy).forEach(key => {
    Object.assign(propsToMap, {
      [key]: strategy[key](rest),
    });
  });

  const strategyMappedProps = {...propsToMap};
  const {locale, canonicalUrl, relNext, relPrev, schema, title} = strategyMappedProps;

  const link = [{
    rel: 'canonical',
    href: canonicalUrl,
  }];

  if (relPrev) {
    link.push({
      rel: 'prev',
      href: relPrev,
    });
  }

  if (relNext) {
    link.push({
      rel: 'next',
      href: relNext,
    });
  }

  return {
    htmlAttributes: {
      lang: locale,
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    },
    link,
    meta: getMetaTags(strategyMappedProps),
    title,
  };
};

export default strategy => props => <Helmet {...mapDataToHelmetPropsWithStrategy({strategy, ...props})} />;
