import {
  incomeStream,
  marketingStrategies,
  impact, partnerType,
} from '../models/business.model';

export const PARTNERTYPES_OPTIONS: partnerType[] = [
  {
    title: 'client',
    subtitle: 'become a',
    body: 'Enhance your financial literacy and build the confidence to shape your financial destiny. Explore our financial strategies to secure your family’s future and embark on the path to retirement and wealth creation.',
  },
  {
    title: 'Referral Partner',
    subtitle: 'work with us',
    body: 'Become a referral partner and take advantage of a simple yet rewarding opportunity. By obtaining the necessary license, you can refer individuals you know to our financial services and, in return, earn referral income for helping them secure their financial future.',
  },
  {
    title: 'Revenue Sharing',
    subtitle: 'work with us',
    body: 'Join us as a revenue-sharing partner and leverage your expertise in professions such as CPA, accounting, real estate, law, and more to benefit your clients. By partnering with us, you can provide comprehensive financial solutions to your clients and share in the revenue generated, enhancing the value you bring to their financial well-being.',
  },
  {
    title: 'Part-Time',
    subtitle: 'work with us',
    body: 'Explore part-time opportunities as a financial professional where you can work from anywhere, on your own terms. Begin making a difference by assisting families with their financial goals as you work towards yours.',
  },
  {
    title: 'Full-Time',
    subtitle: 'work with us',
    body: 'Unlock the potential of a full-time career in financial services with GFI, where you’ll discover numerous incentives, a proven system, and unwavering support to help you thrive.',
  },
  {
    title: 'Agency Owner',
    subtitle: 'become an',
    body: 'Become an agency owner with GFI and secure your future by building your own brand, with an opportunity to gain equity in the company, and unlocking unlimited potential in the financial industry.',
  },
];

export const INCOMESTREAM_OPTIONS: incomeStream[] = [
  {
    title: 'Personal Income',
    description:
      'When you generate new business, you not only earn a commission, but your commission percentage also increases as you reach predefined levels.',
  },
  {
    title: 'Residuals & Renewals income',
    description:
      'Continue to earn income from your past efforts. With GFI, your financial rewards can keep growing over time as you build and nurture your book of business.',
  },
  {
    title: 'Agency Income',
    description:
      'As you expand your agency, you have the opportunity to mentor and coach newly licensed agents, and as they generate new business, you can earn override commissions. You have the opportunity to earn a supervisory override without impacting the agents’ earnings.',
  },
  {
    title: 'Expansion Income',
    description:
      'We aim to empower you not only to assist and nurture agents but also to provide financial incentives that motivate individuals in Agency Owner positions to mentor others, helping them establish their own businesses and become Agency Owners as well.',
  },
  {
    title: 'Bonus Income',
    description:
      'We provide exceptional bonus incentives to reward both performance and the positive impact we have on the lives of families. We firmly believe in recognizing hard work through bonuses.',
  },
  {
    title: 'Stock Options & Profit Sharing',
    description:
      'The platform is designed to empower entrepreneurs with the opportunity to create something they can truly call their own, whether through stock options or even the potential to own a percentage of the company itself.',
  },
];

export const MARKETING_STRATEGIES: marketingStrategies[] = [
  {
    title: '1. Business Ownership Opportunity',
    description: `At GFI, our primary mission is to provide individuals with a remarkable opportunity to not only succeed but to become genuine owners of their businesses. 
    In a landscape where many similar ventures no longer offer the invaluable prospect of business ownership, we stand apart.\n
    We firmly believe that your hard work should translate into actual ownership of your enterprise. With GFI, you’re not merely constructing a business; you’re crafting an asset that you can proudly call your own. 
    It’s about investing your time in something that can fulfill your dreams, make a lasting impact, and serve as a legacy for your family—a true testament to generational wealth. 
    This unique ability to own and control your business sets us apart and makes GFI the most appealing choice.`,
  },
  {
    title: '2. Millionaire Mentorship',
    description: `Learn everything you need to know to build a prosperous business with guidance from our dedicated mentors. 
    Access valuable resources to nurture your personal and professional development, empowering you to achieve your goals and secure your financial future. 
    You’re in business for yourself, but not by yourself.`,
  },
  {
    title: '3. Agency Owner Platform',
    description: `Experience the power of our platform, a cutting-edge technology that revolutionizes your business operations. 
    With seamless integration and robust features, our platform is designed to optimize your workflow while providing you with unparalleled back-office support. 
    It’s the ultimate tool to supercharge your success as an agency owner at GFI.`,
  },
  {
    title: '4. Industry-Leading Products',
    description: `Leverage our industry-leading product portfolio that empowers you to assist clients in building, securing, and transferring their wealth. 
    We provide top-notch solutions to help them achieve peace of mind – working with 80+ top financial companies in the industry.`,
  },
  {
    title: '5. Competitive Contracts',
    description: `Harness the power of the industry’s most competitive personal and builder’s contracts, providing you with the means to not only thrive but also achieve your business goals. 
    With these contracts, you’ll find unparalleled opportunities for financial growth and success in your business endeavors.`,
  },
  {
    title: '6. Proven System',
    description: `Utilize the proven system that has propelled GFI to unparalleled success, providing you with a reliable blueprint for achieving your business objectives. 
    Join our agency and leverage this time-tested system to accelerate your own financial empowerment journey by using our 10 industry trade secrets that make us the best!`,
  },
];
