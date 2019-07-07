const fs = require('fs');
const parseMarkdown = require('front-matter-markdown');

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @param {string} lang
 * @returns {Array} Array of objects
 */
const getFiles = (dir, lang) => {
  const files = fs.readdirSync(dir);
  let filelist = [];

  files.forEach(file => {
    const markdownFile = fs.readFileSync(
      `contents/${lang}/posts/${file}`,
      'utf-8'
    );
    const fileContents = parseMarkdown(markdownFile);
    const date = fileContents.date;
    const title = fileContents.title;
    const summary = fileContents.summary;
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.');

    const obj = { date, slug, title, summary };

    filelist.push(obj);
  });
  return filelist;
};

/**
 * Write blogs json file
 * @param {string} lang
 */
const writeBlogs = async lang => {
  const fileArray = await getFiles(`contents/${lang}/posts/`, lang);

  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
  });

  // Reverse array and write a file
  // const reversedArray = await sortedArray.reverse();
  const jsonContent = await JSON.stringify(sortedArray);

  fs.writeFile(`contents/${lang}/posts.json`, jsonContent, err => {
    if (err) throw new Error(err);
  });
};

writeBlogs('en');
writeBlogs('ja');
