export default props => {
  const {
    title,
    siteName,
    description,
    image,
    twitterUser,
    contentType,
    canonicalUrl,
    noCrawl,
    googleSiteVerification,
    published,
    updated,
    category,
    tags,
    facebookId,
  } = props;

  const metaTags = [];

  if (twitterUser) {
    metaTags.push({name: 'twitter:site', content: twitterUser}, {name: 'twitter:creator', content: twitterUser});
  }

  if (title) {
    metaTags.push(
      {itemprop: 'name', content: title},
      {name: 'twitter:title', content: title},
      {property: 'og:title', content: title},
    );
  }

  if (siteName) {
    metaTags.push({property: 'og:site_name', content: siteName});
  }

  if (description) {
    metaTags.push(
      {itemprop: 'description', content: description},
      {name: 'description', content: description},
      {name: 'twitter:description', content: description},
      {property: 'og:description', content: description},
    );
  }

  if (image) {
    metaTags.push(
      {itemprop: 'image', content: image},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:image', content: image},
      {property: 'og:image', content: image},
    );
  }

  if (googleSiteVerification) {
    metaTags.push({
      property: 'google-site-verification',
      content: googleSiteVerification,
    });
  }

  if (contentType) {
    metaTags.push({property: 'og:type', content: contentType || 'website'});
  }

  if (canonicalUrl) {
    metaTags.push({property: 'og:url', content: canonicalUrl});
  }

  if (noCrawl) {
    metaTags.push({name: 'robots', content: 'noindex, nofollow'});
  }

  if (published) {
    metaTags.push({name: 'article:published_time', content: published});
  }

  if (updated) {
    metaTags.push({name: 'article:modified_time', content: updated});
  }

  if (category) {
    metaTags.push({name: 'article:section', content: category});
  }

  if (tags) {
    metaTags.push({name: 'article:tag', content: tags});
  }

  if (facebookId) {
    metaTags.push({
      name: 'fb:admins',
      content: facebookId,
    });
  }

  return metaTags;
};
