import dynamic from 'next/dynamic';

export const components = {
  background: dynamic(() => import('./Background')),
  banner_video: dynamic(() => import('./BannerVideo')),
  button: dynamic(() => import('./Button')),
  description: dynamic(() => import('./discription')),
  pagination: dynamic(() => import('./Pagination')),
  icon: dynamic(() => import('./Icon')),
  image: dynamic(() => import('./Image')),
  link: dynamic(() => import('./Link')),
  text: dynamic(() => import('./Text')),
  title_complex: dynamic(() => import('./TitleComplex')),
  title_header: dynamic(() => import('./TitleHeader')),
  title_header_gradient: dynamic(() => import('./TitleHeaderGradient')),
  faq_v2: dynamic(() => import("./faqV2FAQ")),
  // faq_v2_f_a_q: dynamic(() => import("./faqV2FAQ")),
  support_v2: dynamic(() => import("./supportV2")),
  privacy_policy: dynamic(() => import("./privacyPolicyPrivacyPolicy")),
};
