export namespace GHL {
    export interface IAdditional {
        preferred_language: string;
        find_us: string;
        has_consent: boolean | string;
    }

    export interface IGeneral extends IAdditional {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        city: string;
        state: string;
        zip: string;
        message: string;
    }

    export interface IClient extends IGeneral{
        insurance_type: string;
        birthdate?: Date;
        gender?: string;
        marital_status?: string;
        children_under_18?: number;
        annual_income?: number;
        saving_per_month: number;
        save_more: number;
        current_saving?: number;
        matters?: string[];
        insurance_interests?: string[];
    }

    export interface IPartner extends IGeneral{
        time: string;
        current_income: number;
        is_clean: boolean | string;
        explanation: string;
        has_license: boolean | string;
    }
}