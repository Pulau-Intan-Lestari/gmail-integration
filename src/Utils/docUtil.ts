import wkhtmltopdf from "wkhtmltopdf";
import * as fs from 'fs';
import * as XLSX from 'xlsx';


type PageSizeOptions = "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" |
    "B0" | "B1" | "B10" | "B2" | "B3" | "B4" | "B5" | "B6" | "B7" | "B8" | "B9" |
    "C5E" | "Comm10E" | "DLE" | "Executive" | "Folio" | "Ledger" | "Legal" | "Letter" | "Tabloid" | undefined;

export const createPDF = (html: string, fileName: string, pageSize: PageSizeOptions = 'A4') => {
    return new Promise((resolve, reject) => {
        wkhtmltopdf(html, { pageSize: pageSize }, ((err, stream) => {
            if (err) {
                reject(err)
            }
            resolve(stream);
        })).pipe(fs.createWriteStream(fileName));
    })
}

export const createExcel = () => {
    XLSX.set_fs(fs);
    
}