import * as fs from 'fs';
import moment from 'moment';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export function createDirectoryASN(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'asn', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryWhrm(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'whrm', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryWeightTest(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'weight-test', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryKnitTest(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'knit-test', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryDyeingTest(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'dyeing-test', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryListSupplyItems(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'list-supply-items', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryReturGrpo(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'retur-grpo', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createSuratJalan(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'surat-jalan', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryPOYarnDyed(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'pdf', 'po-yarn-dyed', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectorySignatureASN(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'signature', 'asn', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectorySignatureWHRM(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'signature', 'whrm', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export function createDirectoryPhotoWHRM(date: string, month: string, year: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'photo', 'whrm', year, month, date);

        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dir);
                    }
                });
            } else {
                resolve(dir);
            }
        });
    });
}

export async function saveSignatureToFile(base64String: string): Promise<string> {
    // Ensure base64String is defined
    if (!base64String) {
        throw new Error("base64string is required!");
    }

    // Remove the data URL prefix if it exists
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

    // Set the file path
    const fileName = `${uuidv4()}.png`;
    const day = moment().format("DD")
    const month = moment().format("MM")
    const year = moment().format("YYYY")
    const pathDate = await createDirectorySignatureASN(day, month, year);
    const filePath = path.join(pathDate, fileName);

    // Convert base64 to image and save to file
    return new Promise<string>((resolve, reject) => {
        fs.writeFile(filePath, base64Data, { encoding: 'base64' }, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                reject(new Error("error saving images!"));
            } else {
                resolve(`/signature/asn/${year}/${month}/${day}/${fileName}`);
            }
        });
    });
}

export async function saveSignatureToFileWHRM(base64String: string): Promise<string> {
    // Ensure base64String is defined
    if (!base64String) {
        throw new Error("base64string is required!");
    }

    // Remove the data URL prefix if it exists
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

    // Set the file path
    const fileName = `${uuidv4()}.png`;
    const day = moment().format("DD")
    const month = moment().format("MM")
    const year = moment().format("YYYY")
    const pathDate = await createDirectorySignatureWHRM(day, month, year);
    const filePath = path.join(pathDate, fileName);

    // Convert base64 to image and save to file
    return new Promise<string>((resolve, reject) => {
        fs.writeFile(filePath, base64Data, { encoding: 'base64' }, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                reject(new Error("error saving images!"));
            } else {
                resolve(`/signature/whrm/${year}/${month}/${day}/${fileName}`);
            }
        });
    });
}

export async function savePhotoWhrm(base64String: string): Promise<string> {
    // Ensure base64String is defined
    if (!base64String) {
        throw new Error("base64string is required!");
    }

    // Remove the data URL prefix if it exists
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

    // Set the file path
    const fileName = `${uuidv4()}.png`;
    const day = moment().format("DD")
    const month = moment().format("MM")
    const year = moment().format("YYYY")
    const pathDate = await createDirectoryPhotoWHRM(day, month, year);
    const filePath = path.join(pathDate, fileName);

    // Convert base64 to image and save to file
    return new Promise<string>((resolve, reject) => {
        fs.writeFile(filePath, base64Data, { encoding: 'base64' }, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                reject(new Error("error saving images!"));
            } else {
                resolve(`/photo/whrm/${year}/${month}/${day}/${fileName}`);
            }
        });
    });
}