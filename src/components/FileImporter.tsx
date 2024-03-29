import mammoth from "mammoth";
import { pdfjs } from "react-pdf";
import {
  PDFDocumentProxy,
  TextItem,
  TextMarkedContent,
} from "pdfjs-dist/types/src/display/api";
import { formatBytes } from "../lib/filesize";
import React from "react";
import { Upload } from "lucide-react";
// Worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
type FileImporterProps = {
  setHtmlContent: (content: string) => void;
  setSelectedFile: (file: File | null) => void;
  selectedFile?: File | null;
};
const FileImporter: React.FC<FileImporterProps> = ({
  setHtmlContent,
  setSelectedFile,
  selectedFile,
}) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (file.name.endsWith(".docx")) {
      const result = await convertDocxToHtml(file); // Pass keywords here
      setHtmlContent(result);
    } else if (file.name.endsWith(".doc")) {
      alert("Sorry, .doc files are not supported.");
    } else if (file.name.endsWith(".pdf")) {
      setHtmlContent(""); // Reset HTML state
      displayPDF(file);
    } else {
      alert("Please select a .docx, .doc, or .pdf file");
    }

    setSelectedFile(file);
  };

  const convertDocxToHtml = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target?.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const result = await mammoth.convertToHtml({
            arrayBuffer: uint8Array,
          });
          resolve(result.value);
        } else {
          reject(new Error("Failed to read the file."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Failed to read the file."));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const displayPDF = async (file: File) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const url = reader.result;
      if (url) {
        const pdf = await pdfjs.getDocument(url).promise;
        const textContent = await getTextContentFromPDF(pdf);
        setHtmlContent(textContent);
      }
    };

    const getTextContentFromPDF = async (pdf: PDFDocumentProxy) => {
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items
          .map((s: TextItem | TextMarkedContent) => {
            if ("str" in s) {
              return s.str;
            }
            return ""; // Handle the case where 'str' does not exist on 's'
          })
          .join(" ");
      }
      return fullText;
    };
    reader.onerror = () => {
      alert("Failed to read the PDF file.");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="flex justify-center items-center px-16 py-8 mt-4 text-center text-gray-500  rounded-lg border border-dashed border-slate-400 leading-[138%]">
        {selectedFile ? (
          <div>
            {/* Uploading File Content */}
            <div className="mb-2 flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <span className="size-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                  <svg
                    className="flex-shrink-0 size-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0243 1.43996H7.08805C6.82501 1.43996 6.57277 1.54445 6.38677 1.73043C6.20077 1.91642 6.09631 2.16868 6.09631 2.43171V6.64796L15.0243 11.856L19.4883 13.7398L23.9523 11.856V6.64796L15.0243 1.43996Z"
                      fill="#21A366"
                    />
                    <path
                      d="M6.09631 6.64796H15.0243V11.856H6.09631V6.64796Z"
                      fill="#107C41"
                    />
                    <path
                      d="M22.9605 1.43996H15.0243V6.64796H23.9523V2.43171C23.9523 2.16868 23.8478 1.91642 23.6618 1.73043C23.4758 1.54445 23.2235 1.43996 22.9605 1.43996Z"
                      fill="#33C481"
                    />
                    <path
                      d="M15.0243 11.856H6.09631V21.2802C6.09631 21.5433 6.20077 21.7955 6.38677 21.9815C6.57277 22.1675 6.82501 22.272 7.08805 22.272H22.9606C23.2236 22.272 23.4759 22.1675 23.6618 21.9815C23.8478 21.7955 23.9523 21.5433 23.9523 21.2802V17.064L15.0243 11.856Z"
                      fill="#185C37"
                    />
                    <path
                      d="M15.0243 11.856H23.9523V17.064H15.0243V11.856Z"
                      fill="#107C41"
                    />
                    <path
                      opacity="0.1"
                      d="M12.5446 5.15996H6.09631V19.296H12.5446C12.8073 19.2952 13.0591 19.1904 13.245 19.0046C13.4308 18.8188 13.5355 18.567 13.5363 18.3042V6.1517C13.5355 5.88892 13.4308 5.63712 13.245 5.4513C13.0591 5.26548 12.8073 5.16074 12.5446 5.15996Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M11.8006 5.90396H6.09631V20.04H11.8006C12.0633 20.0392 12.3151 19.9344 12.501 19.7486C12.6868 19.5628 12.7915 19.311 12.7923 19.0482V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M11.8006 5.90396H6.09631V18.552H11.8006C12.0633 18.5512 12.3151 18.4464 12.501 18.2606C12.6868 18.0748 12.7915 17.823 12.7923 17.5602V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M11.0566 5.90396H6.09631V18.552H11.0566C11.3193 18.5512 11.5711 18.4464 11.757 18.2606C11.9428 18.0748 12.0475 17.823 12.0483 17.5602V6.8957C12.0475 6.6329 11.9428 6.38114 11.757 6.19532C11.5711 6.0095 11.3193 5.90475 11.0566 5.90396Z"
                      fill="black"
                    />
                    <path
                      d="M1.13604 5.90396H11.0566C11.3195 5.90396 11.5718 6.00842 11.7578 6.19442C11.9438 6.38042 12.0483 6.63266 12.0483 6.8957V16.8162C12.0483 17.0793 11.9438 17.3315 11.7578 17.5175C11.5718 17.7035 11.3195 17.808 11.0566 17.808H1.13604C0.873012 17.808 0.620754 17.7035 0.434765 17.5175C0.248775 17.3315 0.144287 17.0793 0.144287 16.8162V6.8957C0.144287 6.63266 0.248775 6.38042 0.434765 6.19442C0.620754 6.00842 0.873012 5.90396 1.13604 5.90396Z"
                      fill="#107C41"
                    />
                    <path
                      d="M2.77283 15.576L5.18041 11.8455L2.9752 8.13596H4.74964L5.95343 10.5071C6.06401 10.7318 6.14015 10.8994 6.18185 11.01H6.19745C6.27683 10.8305 6.35987 10.6559 6.44669 10.4863L7.73309 8.13596H9.36167L7.09991 11.8247L9.41897 15.576H7.68545L6.29489 12.972C6.22943 12.861 6.17387 12.7445 6.12899 12.6238H6.10817C6.06761 12.7419 6.01367 12.855 5.94748 12.9608L4.51676 15.576H2.77283Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {selectedFile?.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {formatBytes(selectedFile?.size as number)}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-x-2">
                <svg
                  className="flex-shrink-0 size-4 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <label className="size-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                  <Upload className="h-6 w-6" />
                  <input
                    id="hs-pro-deuuf"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".docx,.pdf"
                    name="hs-pro-deuuf"
                  />
                </label>
              </div>
            </div>
            {/* End Uploading File Content */}
            {/* Progress Bar */}
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <div
                className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="w-6 text-end">
                <span className="text-sm text-gray-800 dark:text-white">
                  100%
                </span>
              </div>
            </div>
            {/* End Progress Bar */}
          </div>
        ) : (
          <div className="flex flex-col items-center max-w-full w-[177px]">
            <label
              htmlFor="hs-pro-deuuf"
              className="relative cursor-pointer justify-center "
            >
              <div className="flex justify-center w-full  items-center">
                <Upload className="h-6 w-6" />
              </div>
              <div className="self-stretch mt-3 text-xs">
                Drag & drop your files here or
              </div>

              <span className="text-xs text-primary">Browse</span>
              <input
                id="hs-pro-deuuf"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept=".docx,.pdf"
                name="hs-pro-deuuf"
              />

              <div className="mt-2 text-xs">Max file size: 10 MB</div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileImporter;
