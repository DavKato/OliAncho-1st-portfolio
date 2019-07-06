import Vue from 'vue';

Vue.filter('date', (date, lang) => {
  if (!date) return '';

  const target = new Date(date);
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  return lang === 'en'
    ? target.toLocaleDateString('en-GB', dateOptions)
    : target.toLocaleDateString('ja-JP');
});
