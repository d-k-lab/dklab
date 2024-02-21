export const GA_TRACKING_ID = 'G-MSCZF1532T';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, { page_path: url });
}

export const event = ({ action, category, page_smartfactory, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: page_smartfactory,
    value: value
  });
}