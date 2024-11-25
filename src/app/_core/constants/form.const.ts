import { ICardOption } from "../models/form.model";

export const SERVICE_OPTIONS: ICardOption[] = [
    { title: 'I want to become a GFI partner', icon: 'handshake', label: 'Become a partner' },
    { title: 'I want to become a client', icon: 'family_restroom', label: 'Become a client' },
    { title: 'I have a general question', icon: 'question_mark', label: 'I have a question' }
];

export const INSURANCE_OPTIONS: ICardOption[] = [
 { title: 'Complimentary Financial Roadmap', icon: 'road', label: ''},
 { title: 'Retirement Planning', icon: 'volunteer_activism', label: ''},
 { title: 'Life Insurance/Protection for my Family', icon: 'family_home', label: ''},
 { title: 'Estate Planning/Preserve Wealth', icon: '', label: ''},
 { title: '401(k) Rollover', icon: '', label: ''},
 { title: 'Tax Advantaged Products or Solutions', icon: '', label: ''},
 { title: 'College Funds/Child Accounts', icon: '', label: ''},
 { title: 'Pension Plan', icon: '', label: ''},
 { title: 'Other', icon: '', label: ''}
];