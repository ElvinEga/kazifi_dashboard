import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";

export default function ResumeEditor() {
  // resume data
  const {
    resumeData,
    selectedTemplate,
    selectedFont,
    fontOptions,
    bgValue,
    handleTemplateSelect,
    handleBgChange,
    handleFontChange,
  } = useContext(ResumeBuilderContext);

  return (
    <form>
      <Card>
        <Tabs defaultValue="profile">
          <CardHeader>
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
                  {resumeData?.skills?.map((skill, index) => (
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
                      <h3 className="text-lg font-medium">Templates</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        className={`p-1  rounded-xl ${
                          selectedTemplate === 1 ? "bg-slate-500" : ""
                        }`}
                        src="/assets/img/templates/template1.png"
                        alt="Resume Template 1"
                        onClick={() => handleTemplateSelect?.(1)}
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
                        onClick={() => handleTemplateSelect?.(2)}
                        width={170}
                        height={240}
                        style={{
                          aspectRatio: "170 / 240",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="space-y-4 py-4">
                      <p className="text-lg font-semibold">Template Settings</p>

                      <div className="space-y-2">
                        <Label htmlFor="font">Font</Label>
                        <Select
                          value={selectedFont?.value}
                          onValueChange={handleFontChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Fonts</SelectLabel>
                              {fontOptions?.map((option) => (
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
  );
}
