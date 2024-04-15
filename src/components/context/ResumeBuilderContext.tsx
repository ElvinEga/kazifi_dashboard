// ResumeBuilderContext.tsx
import React, { createContext, useState } from "react";
import DefaultResumeData from "../../data/DefaultResumeData";
import WebFont from "webfontloader";

interface FontOption {
  value: string;
  label: string;
  fontFamily: string;
}

interface ResumeData {
  // Define the structure of resume data here
}

interface ResumeBuilderContextProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  selectedTemplate: number;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<number>>;
  formClose: boolean;
  setFormClose: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFont: FontOption;
  setSelectedFont: React.Dispatch<React.SetStateAction<FontOption>>;
  bgValue: string;
  setBgValue: React.Dispatch<React.SetStateAction<string>>;
  handleTemplateSelect: (templateNumber: number) => void;
  handleBgChange: (value: string) => void;
  handleFontChange: (value: string) => void;
  handleProfilePicture: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontOptions: FontOption[];
}

export const ResumeBuilderContext = createContext<
  Partial<ResumeBuilderContextProps>
>({});

export const ResumeBuilderProvider: React.FC = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(DefaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<number | 1>(1);
  const [formClose, setFormClose] = useState(false);
  const [selectedFont, setSelectedFont] = useState<FontOption>({
    value: "Arial",
    label: "Arial",
    fontFamily: "Arial, sans-serif",
  });
  const [bgValue, setBgValue] = useState("white");

  const handleTemplateSelect = (templateNumber: number) => {
    setSelectedTemplate(templateNumber);
  };

  const handleBgChange = (value: string) => {
    if (value) {
      setBgValue(value);
    }
  };

  const handleFontChange = (value: string) => {
    const fontValue = value;
    const font = fontOptions.find((option) => option.value === fontValue);
    if (font) {
      loadFont(font.fontFamily);
      setSelectedFont(font);
    }
  };

  const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({
          ...resumeData,
          profilePicture: event.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  const loadFont = (fontFamily: string) => {
    WebFont.load({
      google: {
        families: [fontFamily],
      },
    });
  };

  const fontOptions: FontOption[] = [
    { value: "Arial", label: "Arial", fontFamily: "Arial" },
    {
      value: "Times New Roman",
      label: "Times New Roman",
      fontFamily: "Times New Roman",
    },
    {
      value: "Playfair Display",
      label: "Playfair Display",
      fontFamily: "Playfair Display",
    },
    {
      value: "Geist Mono",
      label: "Geist Mono",
      fontFamily: "Geist Mono Variable",
    },
    { value: "Quicksand", label: "Quicksand", fontFamily: "Quicksand" },
    {
      value: "Montserrat",
      label: "Montserrat",
      fontFamily: "Montserrat",
    },
    {
      value: "Open Sans",
      label: "Open Sans",
      fontFamily: "Open Sans",
    },
    {
      value: "Bad Script",
      label: "Bad Script",
      fontFamily: "Bad Script",
    },
    {
      value: "Pinyon Script",
      label: "Pinyon Script",
      fontFamily: "Pinyon Script",
    },
    {
      value: "Lato",
      label: "Lato",
      fontFamily: "Lato",
    },
    { value: "PT Sans", label: "PT Sans", fontFamily: "PT Sans" },
    {
      value: "IBM Plex Sans",
      label: "IBM Plex Sans",
      fontFamily: "IBM Plex Sans",
    },
    { value: "Poppins", label: "Poppins", fontFamily: "Poppins" },
    { value: "Ubuntu", label: "Ubuntu", fontFamily: "Ubuntu" },
    // Add more font options here
  ];
  // Include any additional context values or functions needed

  return (
    <ResumeBuilderContext.Provider
      value={{
        resumeData,
        setResumeData,
        selectedTemplate,
        setSelectedTemplate,
        formClose,
        setFormClose,
        selectedFont,
        setSelectedFont,
        fontOptions,
        bgValue,
        setBgValue,
        handleTemplateSelect,
        handleBgChange,
        handleFontChange,
        handleProfilePicture,
        handleChange,
      }}
    >
      {children}
    </ResumeBuilderContext.Provider>
  );
};
