interface IRenderPdfOptions {
    printLogs?: boolean;
    printErrors?: boolean;
    chromeBinary?: string;
    noMargins?: boolean;
    landscape?: boolean;
    includeBackground?: boolean;
}

interface IJobPair {
    url: string;
    pdf: string;
}

export default class RenderPDF {
    static generateSinglePdf(url: string, filename: string, options?: IRenderPdfOptions): Promise<void>;
    static generateMultiplePdf(pairs: IJobPair[], options?: IRenderPdfOptions): Promise<void>;
}
