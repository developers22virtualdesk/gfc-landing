import { FORM_TYPE } from "../enums/form.enum";
import { INSURANCE_OPTION } from "../enums/service.enum";
import { ICardOption } from "../models/form.model";
import { IOptionList } from "../models/generic.model";

export const FORM_TITLES: Map<FORM_TYPE, string> = new Map([
    [FORM_TYPE.None, 'Start Your Insurance Application!'],
    [FORM_TYPE.Client, 'Get Started with Your Personalized Coverage'],
    [FORM_TYPE.Partner, 'Become a Strategic Partner in Financial Protection'],
    [FORM_TYPE.General, 'Share Your Details for Better Financial Solutions']
]);

export const FORM_BOOLEAN: Map<boolean, string> = new Map([
    [true, 'Yes'],
    [false, 'No']
]);

export const INSURANCE_TYPE_MAP: Map<INSURANCE_OPTION, string> = new Map([
    [INSURANCE_OPTION.Life, 'Life Insurance'],
    [INSURANCE_OPTION.Estate, 'Estate Planning'],
    [INSURANCE_OPTION.Wealth, 'Wealth Accumulation Strategies & Rollovers']
]);

export const SERVICE_OPTIONS: ICardOption[] = [
    { title: 'I want to become a GFI partner', icon: 'real_estate_agent', label: 'Become a partner' },
    { title: 'I want to become a client', icon: 'family_restroom', label: 'Become a client' },
    { title: 'I have a general question', icon: 'help_outline', label: 'I have a question' }
];

export const INSURANCE_OPTIONS: ICardOption[] = [
    { title: 'Life Insurance', icon: 'volunteer_activism', label: 'Life Insurance' },
    { title: 'Estate Planning', icon: 'assured_workload', label: 'Estate Planning' },
    { title: 'Wealth Acummulation Strategies & Rollovers', icon: 'shield_with_heart', label: 'Wealth Acummulation Strategies & Rollovers' }
];

export const INSURANCE_MATTERS_OPTIONS: ICardOption[] = [

    { title: 'Lifetime Income', icon: 'currency_exchange', label: 'Lifetime Income', isClicked: false },
    { title: 'Accumulation for retirement', icon: 'elderly_woman', label: 'Accumulation for retirement', isClicked: false },
    { title: 'Leaving a Legacy', icon: 'yard', label: 'Leaving a Legacy', isClicked: false }
];

export const PARTNER_TIME_OPTIONS: ICardOption[] = [

    { title: 'Part Time', icon: 'history_toggle_off', label: 'Part Time', isClicked: false },
    { title: 'Full Time', icon: 'access_time', label: 'Full Time', isClicked: false },
    { title: 'Referred a partner', icon: 'people', label: 'Referred a partner', isClicked: false }
];

export const INSURANCE_INTEREST_OPTIONS: ICardOption[] = [

    { title: 'Term Life', icon: 'favorite_border', label: 'Term Life', isClicked: false },
    { title: 'Whole Life', icon: 'favorite', label: 'Whole Life', isClicked: false },
    { title: 'Final Expense', icon: 'savings', label: 'Final Expense', isClicked: false },
    { title: 'Indexed Universal Life', icon: 'assured_workload', label: 'Indexed Universal Life', isClicked: false },
    { title: 'Get Instant Approval', icon: 'verified_user', label: 'Get Instant Approval', isClicked: false },
    { title: 'Not sure yet', icon: 'sentiment_neutral', label: 'Not sure yet', isClicked: false }
];

export const GENDER_OPTIONS: IOptionList[] = [
    { title: 'Male', value: 'Male' },
    { title: 'Female', value: 'Female' },
    { title: 'Non-binary', value: 'Non-binary' },
    { title: 'Prefer not to say', value: 'Prefer not to say' },
    { title: 'Other', value: 'Other' }
];

export const MARITAL_OPTIONS: IOptionList[] = [
    { title: 'Single', value: 'Single' },
    { title: 'Married', value: 'Married' },
    { title: 'Divorced', value: 'Divorced' },
    { title: 'Widowed', value: 'Widowed' },
    { title: 'Separated', value: 'Separated' },
    { title: 'Prefer Not to Say', value: 'Prefer Not to Say' }
];

export const HEAR_ABOUT_OPTIONS: IOptionList[] = [
    { title: 'Facebook', value: 'Facebook' },
    { title: 'Instagram', value: 'Instagram' },
    { title: 'Google', value: 'Google' },
    { title: 'Friend', value: 'Friend' },
    { title: 'Family', value: 'Family' },
    { title: 'LinkedIn', value: 'LinkedIn' }
];

export const CURRENT_SAVING_OPTIONS: IOptionList[] = [
    { title: '401(k)/403(b)/457/etc.', value: '401(k)/403(b)/457/etc.' },
    { title: 'Roth', value: 'Roth' },
    { title: 'IRA', value: 'IRA' },
    { title: 'CD', value: 'CD' },
    { title: 'Stocks', value: 'Stocks' },
    { title: 'Bonds', value: 'Bonds' },
    { title: 'Mutual Funds', value: 'Mutual Funds' },
    { title: 'Annuities', value: 'Annuities' },
    { title: 'Other', value: 'Other' }
];

export const PREFERRED_LANGUAGE_OPTIONS: IOptionList[] = [
    { title: 'English', value: 'English'},
    { title: 'Spanish', value: 'Spanish'}
];