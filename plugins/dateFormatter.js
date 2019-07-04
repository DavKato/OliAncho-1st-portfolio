import Vue from 'vue';

Vue.filter('date', date => {
  if (!date) return '';

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  return $i18n.locale === 'en'
    ? date.toLocaleDateString('en-GB', dateOptions)
    : date.toLocaleDateString('ja-JP');
});
