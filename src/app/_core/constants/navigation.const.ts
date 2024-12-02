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
    { displayName: 'Facebook', link: 'home', isActive: true },
    { displayName: 'LinkedIn', link: 'our-story', isActive: true },
    { displayName: 'Instagram', link: 'our-services', isActive: true },
    { displayName: 'Twitter', link: 'business-platform', isActive: true },
]