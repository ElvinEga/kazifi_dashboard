import React, { useState, createContext } from "react";
import { Download, Eye, FileUp, Plus, Printer, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainDashboard from "@/components/layout/MainDashboard";
import DefaultResumeData from "../data/DefaultResumeData";
import Preview from "../components/preview/Preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInformation from "@/components/form/PersonalInformation";
import SocialMedia from "@/components/form/SocialMedia";
import Summary from "@/components/form/Summary";
import Education from "@/components/form/Education";
import WorkExperience from "../components/form/WorkExperience";
import Projects from "../components/form/Projects";
import Skill from "../components/form/Skill";
import Language from "../components/form/Language";
import Certification from "../components/form/certification";
import PlainTemplate from "../components/templates/plain/PalinTemplate";
import WebFont from "webfontloader";

interface FontOption {
  value: string;
  label: string;
  fontFamily: string;
}

const ResumeBuilderContext = createContext(DefaultResumeData);

export function ResumeBuilder() {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<number | 1>(1);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  const handleTemplateSelect = (templateNumber: number) => {
    setSelectedTemplate(templateNumber);
  };

  const [selectedFont, setSelectedFont] = useState<FontOption>({
    value: "Arial",
    label: "Arial",
    fontFamily: "Arial, sans-serif", // Default font family
  });
  const [bgValue, setBgValue] = React.useState("white");

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
  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
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

  return (
    <MainDashboard>
      <ResumeBuilderContext.Provider
        value={{
          bgValue,
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <main className="flex gap-4 overflow-auto w-full">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] w-full rounded-lg border"
          >
            <ResizablePanel defaultSize={40}>
              <form>
                <Card>
                  <Tabs defaultValue="profile">
                    <CardHeader>
                      <CardTitle>Resume Builder</CardTitle>
                      <CardDescription>
                        Build your ATS Optimized Resume
                      </CardDescription>
                      <TabsList>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="work">Work</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="others">Others</TabsTrigger>
                        <TabsTrigger value="theme">Theme</TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    <CardContent>
                      <div className="flex-1 grid w-full ">
                        <div className="grid gap-4  md:gap-4 ">
                          <TabsContent value="profile">
                            <PersonalInformation />
                            <SocialMedia />
                            <Summary />
                          </TabsContent>
                          <TabsContent value="education">
                            <Education />
                          </TabsContent>
                          <TabsContent value="work">
                            <WorkExperience />
                          </TabsContent>
                          <TabsContent value="projects">
                            <Projects />
                          </TabsContent>
                          <TabsContent value="skills">
                            {resumeData.skills.map((skill, index) => (
                              <Skill title={skill.title} key={index} />
                            ))}
                          </TabsContent>
                          <TabsContent value="others">
                            <Language />
                            <Certification />
                          </TabsContent>
                          <TabsContent value="theme">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">
                                  Templates
                                </h3>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <img
                                  className={`p-1  rounded-xl ${
                                    selectedTemplate === 1 ? "bg-slate-500" : ""
                                  }`}
                                  src="/assets/img/templates/template1.png"
                                  alt="Resume Template 1"
                                  onClick={() => handleTemplateSelect(1)}
                                  width={170}
                                  height={240}
                                  style={{
                                    aspectRatio: "170 / 240",
                                    objectFit: "cover",
                                  }}
                                />
                                <img
                                  src="/assets/img/templates/template2.png"
                                  alt="Resume Template 2"
                                  className={`p-1  rounded-xl ${
                                    selectedTemplate === 2 ? "bg-slate-500" : ""
                                  }`}
                                  onClick={() => handleTemplateSelect(2)}
                                  width={170}
                                  height={240}
                                  style={{
                                    aspectRatio: "170 / 240",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="space-y-4 py-4">
                                <p className="text-lg font-semibold">
                                  Template Settings
                                </p>

                                <div className="space-y-2">
                                  <Label htmlFor="font">Font</Label>
                                  <Select
                                    value={selectedFont.value}
                                    onValueChange={handleFontChange}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Font" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>Fonts</SelectLabel>
                                        {fontOptions.map((option) => (
                                          <SelectItem
                                            key={option.value}
                                            value={option.value}
                                          >
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="font">Accent Color</Label>
                                  <ToggleGroup
                                    type="single"
                                    value={bgValue}
                                    onValueChange={handleBgChange}
                                  >
                                    <ToggleGroupItem
                                      value="white"
                                      aria-label="Toggle bold"
                                    >
                                      White
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="rose"
                                      aria-label="Toggle italic"
                                      className="bg-rose-100"
                                    >
                                      Rose
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="blue"
                                      aria-label="Toggle underline"
                                      className="bg-blue-100"
                                    >
                                      Blue
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="green"
                                      aria-label="Toggle underline"
                                      className="bg-green-100"
                                    >
                                      Green
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="orange"
                                      aria-label="Toggle underline"
                                      className="bg-orange-100"
                                    >
                                      Orange
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="violet"
                                      aria-label="Toggle underline"
                                      className="bg-purple-100"
                                    >
                                      Violet
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="yellow"
                                      aria-label="Toggle underline"
                                      className="bg-yellow-100"
                                    >
                                      Yellow
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                      value="slate"
                                      aria-label="Toggle underline"
                                      className="bg-slate-100"
                                    >
                                      Slate
                                    </ToggleGroupItem>
                                  </ToggleGroup>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update</Button>
                    </CardFooter>
                  </Tabs>
                </Card>
              </form>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between">
                    <div className="mr-auto flex items-center gap-2">
                      <Button size="sm" className="h-8 gap-1" variant="outline">
                        <Upload className="h-3.5 w-3.5" />
                        Upload
                      </Button>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Button size="sm" className="h-8 gap-1" variant="outline">
                        <Download className="h-3.5 w-3.5" />
                        JSON
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Printer className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Print
                        </span>
                      </Button>
                      <Button size="sm" className="h-8 gap-1">
                        <FileUp className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Export
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <div className="overflow-y-auto h-full">
                  <div
                    className="w-full"
                    style={{ fontFamily: selectedFont.fontFamily }}
                  >
                    <CardContent>
                      {selectedTemplate !== null && (
                        <div>
                          {selectedTemplate === 1 ? (
                            <Preview />
                          ) : (
                            <PlainTemplate />
                          )}
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </ResumeBuilderContext.Provider>
    </MainDashboard>
  );
}
export { ResumeBuilderContext };
