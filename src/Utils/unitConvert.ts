import moment, { isDate, isMoment } from "moment";

export class UnitConvert {
    static FormatCurrency = (amount?: number | string, currency?: "USD" | "IDR") => {
        if (amount && currency) {
            if (typeof amount === "string") {
                let newamount = parseFloat(amount)
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: currency }).format(newamount);
            } else {
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: currency }).format(amount);
            }
        } else {
            return "Rp 0,00"
        }
    }

    static FormatDate = (date?: string | Date | null) => {
        if (!date) {
            return "-";
        }

        const momentDate = moment(date);
        if (!momentDate.isValid()) {
            return "-";
        }
        return momentDate.format("DD/MM/YYYY HH:mm");
    }

    static FormatNumber(num: number): string {
        return new Intl.NumberFormat('id-ID').format(num);
    }

    static FormatUOM = (
        unit?: string | number | null,
        uomTarget?: "KG" | "KGM" | "Bale" | string,
        uomFrom?: "KG" | "KGM" | "Bale" | "BALE" | "Bales" | string,
        format = true
    ) => {
        let unit_fix = typeof unit === "string" ? parseFloat(unit) : typeof unit === "number" ? unit : 0
        const uomKG = ["KG", "KGM", null];
        const uomBales = ["Bale", "Bales", "BALE"];
        if (uomFrom && uomTarget) {
            // dari kg ke bale
            if (uomKG.includes(uomFrom) && uomBales.includes(uomTarget)) {
                return format ? `${this.FormatNumber(unit_fix / 181.44)} ${uomTarget}` : (unit_fix / 181.44)
            }
            // dari bale ke kg
            if (uomBales.includes(uomFrom) && uomKG.includes(uomTarget)) {
                return format ? `${this.FormatNumber(unit_fix * 181.44)} ${uomTarget}` : (unit_fix * 181.44)
            }
        }
        return format ? unit_fix ? `${this.FormatNumber(unit_fix)} ${uomTarget}` : "-" : unit_fix
    }
    
    static PadNumber(num: number | undefined, places: number | undefined): string {
        if (num && places) return String(num).padStart(places, '0')
        return "00"
    }

}