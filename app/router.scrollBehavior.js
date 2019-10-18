export default function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  // between potfolio pages
  const mainNames = ['index', 'about', 'blog', 'works', 'location', '404'];
  if (
    mainNames.some(name => name === from.name.split('___')[0]) &&
    mainNames.some(name => name === to.name.split('___')[0])
  ) {
    return false;
  }
  return { x: 0, y: 0 };
}
