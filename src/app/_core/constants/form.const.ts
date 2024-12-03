import { ICardOption } from "../models/form.model";
import { IOptionList } from "../models/generic.model";

export const SERVICE_OPTIONS: ICardOption[] = [
    { title: 'I want to become a GFI partner', icon: 'handshake', label: 'Become a partner' },
    { title: 'I want to become a client', icon: 'family_restroom', label: 'Become a client' },
    { title: 'I have a general question', icon: 'question_mark', label: 'I have a question' }
];

export const INSURANCE_OPTIONS: ICardOption[] = [
    { title: 'Life Insurance', icon: 'volunteer_activism', label: 'Life Insurance' },
    { title: 'State Planning', icon: 'assured_workload', label: 'State Planning' },
    { title: 'Wealth Acummulation Strategies & Rollovers', icon: 'shield_with_heart', label: 'Wealth Acummulation Strategies & Rollovers' }
];
 
export const GENDER_OPTIONS: IOptionList[] = [
    { title: 'Male', value: 'Male' },
    { title: 'Female', value: 'Female' },
    { title: 'Non-binary', value: 'Non-binary' },
    { title: 'Prefer Not to say', value: 'Prefer Not to say' },
    { title: 'Other', value: 'Other' }
];

export const MARITAL_OPTIONS: IOptionList[] = [
    {title: 'Single', value: 'Single'},
    {title: 'Married', value: 'Married'},
    {title: 'Divorced', value: 'Divorced'},
    {title: 'Widowed', value: 'Widowed'},
    {title: 'Separated', value: 'Separated'},
    {title: 'Prefer Not to Say', value: 'Prefer Not to Say'}
];

export const HEAR_ABOUT_OPTIONS: IOptionList[] = [
    {title: 'Facebook', value: 'Facebook'},
    {title: 'Instagram', value: 'Instagram'},
    {title: 'Google', value: 'Google'},
    {title: 'Friend', value: 'Friend'},
    {title: 'Family', value: 'Family'},
    {title: 'LinkedIn', value: 'LinkedIn'}
]