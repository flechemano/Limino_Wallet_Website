import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    { path: '/', component: '@/pages/index.jsx', routes: [
      {
        path:"/",component:"@/pages/homepage/homepage.jsx"
      },
      {
        path:"/features",component:"@/pages/features/features.jsx"
      },
      {
        path:"/support",component:"@/pages/support/support.jsx"
      },
      {
        path:"/about",component:"@/pages/about/about.jsx"
      },
      {
        path:"/other1",component:"@/pages/other/other1.jsx"
      },
      {
        path:"/other2",component:"@/pages/other/other2.jsx"
      },
      {
        path: '/privacyPolicy',
        component: '@/pages/privacy/privacyPolicy.jsx',
      },
      {
        path: '/termsService',
        component: '@/pages/privacy/termsService.jsx',
      },
      { path: '/error', component: '@/pages/other/other2.jsx' },
      { path: '/404', component: '@/pages/other/other2.jsx' },
    ] },
    { path: '/error', component: '@/pages/other/other2.jsx' },
    { path: '/404', component: '@/pages/other/other2.jsx' },
  ],
  theme: {
    '@primary-color': '#037CD6',
    '@border-radius-base': '10px',
    '@collapse-panel-border-radius': '10px',
    '@table-border-radius-base': '10px',
    '@avatar-border-radius': '10px',
    '@border-color-base': 'rgba(151, 166, 186, 0.6)',
  },
  fastRefresh: {},
});
