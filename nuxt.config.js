import postsEn from './contents/en/posts.json';
import postsJa from './contents/ja/posts.json';
import i18n from './locale/i18n-config';

const imgDir = '/images/';

export default {
  mode: 'universal',

  head: {
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: imgDir + 'favicon16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: imgDir + 'favicon32.png'
      },
      {
        rel: 'icon',
        sizes: '64x64',
        type: 'image/png',
        href: imgDir + 'favicon64.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '64x64',
        type: 'image/png',
        href: imgDir + 'apple-touch180.png'
      },
      //Chrome for Android
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: imgDir + 'favicon192.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap'
      }
    ]
  },

  icon: {
    iconFileName: 'images/icon-manifest.png'
  },

  loading: false,

  css: ['@assets/scss/main.scss'],

  manifest: {
    name: 'OliAncho Web App',
    short_name: 'OliAncho',
    theme_color: '#6180aa'
  },

  plugins: [
    '~/plugins/breakpoints.js',
    '~/plugins/dateFormatter',
    '~/plugins/CustomImg',
    '~/plugins/VLazyImage',
    '~/plugins/vueScreenSize.js'
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      //to any of '/blog-posts' pages
      if (
        !from.name.startsWith('blog-posts') &&
        to.name.startsWith('blog-posts')
      ) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ x: 0, y: 1500 });
          }, 400);
        });
      }
      // between potfolio pages
      const mainNames = ['index', 'about', 'blog', 'works', 'location'];
      if (
        mainNames.some(name => name === from.name.split('___')[0]) &&
        mainNames.some(name => name === to.name.split('___')[0])
      ) {
        return false;
      }
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 300);
      });
      // if (
      //   to.matched.some(r => r.components.default.options.scrollToTop !== false)
      // ) {
      //   return { x: 0, y: 0 };
      // }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    ['nuxt-i18n', i18n],
    '@nuxtjs/sitemap'
  ],

  googleAnalytics: {
    id: 'UA-145311670-1',
    dev: false
  },

  sitemap: {
    gzip: true
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://res.cloudinary.com/oliancho/image/upload/.*',
        handler: 'cacheFirst'
      },
      {
        urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst'
      },
      {
        urlPattern: '/.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30
          }
        }
      }
    ]
  },

  styleResources: {
    scss: ['@assets/scss/_variables.scss', '@assets/scss/_mixins.scss']
  },

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      });
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: false }
        }
      }
    }
  },

  generate: {
    routes: [
      '/about',
      '/location',
      '/works',
      '/blog',
      '/blog-posts',
      '/ja',
      '/ja/about',
      '/ja/location',
      '/ja/works',
      '/ja/blog',
      '/ja/blog-posts',
      '/contact',
      '/ja/contact'
    ]
      .concat(postsEn.map(post => `/blog-posts/${post.slug}`))
      .concat(postsJa.map(post => `ja/blog-posts/${post.slug}`)),
    subFolder: false
  },

  ssr: false,

  resourceHints: true
};
