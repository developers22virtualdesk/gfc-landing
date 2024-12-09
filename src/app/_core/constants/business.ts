import {
  incomeStream,
  marketingStrategies,
  impact,
  partnerType,
  startingPoint,
} from '../models/business.model';
import { ICardOption } from '../models/form.model';
import { Icard } from '../models/generic.model';

export const PARTNERTYPES_OPTIONS: partnerType[] = [
  {
    title: 'Client',
    subtitle: 'Become A',
    body: 'Enhance your financial literacy and build the confidence to shape your financial destiny. Explore our financial strategies to secure your family’s future and embark on the path to retirement and wealth creation.',
  },
  {
    title: 'Referral Partner',
    subtitle: 'Work With Us',
    body: 'Become a referral partner and take advantage of a simple yet rewarding opportunity. By obtaining the necessary license, you can refer individuals you know to our financial services and, in return, earn referral income for helping them secure their financial future.',
  },
  {
    title: 'Revenue Sharing',
    subtitle: 'Work With Us',
    body: 'Join us as a revenue-sharing partner and leverage your expertise in professions such as CPA, accounting, real estate, law, and more to benefit your clients. By partnering with us, you can provide comprehensive financial solutions to your clients and share in the revenue generated, enhancing the value you bring to their financial well-being.',
  },
  {
    title: 'Part-Time',
    subtitle: 'Work With Us',
    body: 'Explore part-time opportunities as a financial professional where you can work from anywhere, on your own terms. Begin making a difference by assisting families with their financial goals as you work towards yours.',
  },
  {
    title: 'Full-Time',
    subtitle: 'Work With Us',
    body: 'Unlock the potential of a full-time career in financial services with GFI, where you’ll discover numerous incentives, a proven system, and unwavering support to help you thrive.',
  },
  {
    title: 'Agency Owner',
    subtitle: 'Wecome An',
    body: 'Become an agency owner with GFI and secure your future by building your own brand, with an opportunity to gain equity in the company, and unlocking unlimited potential in the financial industry.',
  },
];

export const INCOMESTREAM_OPTIONS: Icard[] = [
  {
    title: 'Personal Income',
    description:
      'Earn commissions as you generate new business, with increasing percentages as you hit predefined milestones.',
    image: 'dollar-sign',
  },
  {
    title: 'Residuals & Renewals Income',
    description:
      'Enjoy ongoing income from past efforts. With GFI, your financial rewards can grow over time as you cultivate and expand your book of business.',
    image: 'trending-up',
  },
  {
    title: 'Agency Income',
    description:
      'Build your agency by mentoring new agents. Earn supervisory override commissions from their business without impacting their earnings.',
    image: 'briefcase',
  },
  {
    title: 'Expansion Income',
    description:
      'Empower and mentor others to become Agency Owners. Receive financial incentives for nurturing new business leaders and helping them succeed.',
    image: 'user-plus',
  },
  {
    title: 'Bonus Income',
    description:
      'Get rewarded for your performance and positive impact through generous bonus programs designed to recognize your hard work.',
    image: 'award',
  },
  {
    title: 'Stock Options & Profit Sharing',
    description:
      'Take ownership with opportunities to receive stock options or even a share of the company, fostering true entrepreneurial success.',
    image: 'chart-pie',
  },
];


export const MARKETING_STRATEGIES: Icard[] = [
  {
    title: 'Business Ownership Opportunity',
    description: `At GFI, we offer a unique chance to own your business, turning hard work into an asset and a legacy for your family.`,
  },
  {
    title: 'Millionaire Mentorship',
    description: `Gain expert guidance and resources to grow your business and achieve financial success. You're in business for yourself, but not by yourself.`,
  },
  {
    title: 'Agency Owner Platform',
    description: `Leverage our cutting-edge platform to streamline operations and access robust back-office support for your success.`,
  },
  {
    title: 'Industry-Leading Products',
    description: `Work with top solutions from 80+ financial companies to help clients secure and grow their wealth with confidence.`,
  },
  {
    title: 'Competitive Contracts',
    description: `Benefit from industry-leading contracts that provide unmatched opportunities for financial growth and success.`,
  },
  {
    title: 'Proven System',
    description: `Use our proven system, powered by 10 trade secrets, to achieve financial empowerment and business growth.`,
  },
];

export const IMPACT_OPTIONS: impact[] = [
  {
    image:
      'assets/images/business6.webp',
    description:
      'Ready to embark on a thrilling journey to financial empowerment and fulfillment?',
  },
  {
    image:
      'assets/images/business5.webp',
    description:
      'Join our vibrant community of dream-chasers, wealth-builders, and impact-makers.',
  },
  {
    image:
      'assets/images/business8.webp',
    description:
      'Explore endless opportunities, personal growth, and financial success.',
  },
  {
    image:
      'assets/images/business7.webp',
    description:
      'Be part of something extraordinary, because we believe in living life to the fullest.',
  },
];

export const STARTING_POINTS: startingPoint[] = [
  {
    step: 'STEP 1',
    title: 'Complete The Request Form',
    description:
      'Begin your journey towards becoming a GFI business partner by submitting your application request.',
    image:
      'assets/images/form.webp',
  },
  {
    step: 'STEP 2',
    title: 'Explore The Business Model',
    description:
      'We’ll connect so you can gain a comprehensive understanding of the business model and compensation.',
    image:
      'assets/images/charts.webp',
  },
  {
    step: 'STEP 3',
    title: 'Meet The Team',
    description:
      'Get to know our dedicated team of professionals who will guide and support you on your path to success.',
    image:
      'assets/images/business5.webp',
  },
];

export const PARTNER_PERKS: Icard[] = [
  {
    title: 'Professional Growth',
    description:
      'Access to industry-leading training and development resources',
    image: 'chart-no-axes-column',
  },
  {
    title: 'Dynamic Community',
    description: 'Join a network of passionate financial professionals',
    image: 'users',
  },
  {
    title: 'Proven Success',
    description: 'Backed by years of experience and successful partnerships',
    image: 'shield',
  },
];
