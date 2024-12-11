import { INavitagionList } from "../models/navigation.model";

export const NAVITAGION_ITEMS: INavitagionList[] = [
    { displayName: 'Home', link: 'home', isActive: true },
    { displayName: 'Our Story', link: 'our-story', isActive: false },
    { displayName: 'Services', link: 'our-services', isActive: true },
    { displayName: 'Business Platform', link: 'business-platform', isActive: true },
    { displayName: 'Charity', link: 'charity', isActive: false },
    { displayName: 'GFC Lifestyle', link: 'gfc-lifestyle', isActive: false },
    { displayName: 'Contact', link: 'contact', isActive: true },
];

export const SOCIAL_MEDIA_ITEMS: INavitagionList[] = [
    { displayName: 'Facebook', link: 'https://www.facebook.com/globalfinancialcatalyst', isActive: true },
    { displayName: 'Instagram', link: 'https://www.instagram.com/joebmorales/', isActive: true },
    { displayName: 'TikTok', link: 'https://www.tiktok.com/@joebmorales', isActive: true },
    { displayName: 'LinkedIn', link: 'https://www.linkedin.com/in/joebmorales?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', isActive: true },
]