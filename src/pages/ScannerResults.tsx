import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MainDashboard from "../components/layout/MainDashboard";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  CircleX,
  CircleCheck,
  WholeWord,
  NotebookPen,
  Mail,
} from "lucide-react";
import PlainTemplate from "../components/templates/plain/PalinTemplate";
import { ExternalLink } from "lucide-react";
import React, { useState, createContext, useEffect } from "react";
import DefaultResumeData from "../data/DefaultResumeData";
import { JobData, ScoreData } from "../data/JobData";
import axios from "axios";
import { Badge } from "@/components/ui/badge";

const ResumeBuilderContext = createContext(DefaultResumeData);

export function ScannerResults() {
  const [resumeData, setResumeData, bgValue, handleChange] =
    useState(DefaultResumeData);
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [softSkills, setSoftSkills] = useState<string[]>([]);
  const [phrases, setPhrases] = useState<string[]>([]);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const job_id = "4"; // Replace '123' with the actual job ID
        const response = await axios.get<JobData>(
          `http://127.0.0.1:8000/jobs/${job_id}`
        );
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    const fetchJobScores = async () => {
      try {
        const job_id = "4";
        const response = await axios.get<ScoreData>(
          `http://127.0.0.1:8000/jobs/job_scores/${job_id}`
        );
        setScoreData(response.data);
      } catch (error) {
        console.error("Error fetching job score:", error);
      }
    };

    fetchJobData();
    fetchJobScores();
  }, []);

  useEffect(() => {
    const keywordArray = jobData?.keywords.split(",");
    setKeywords(keywordArray || []);

    const softSkillsArray = jobData?.soft_skills.split(",");
    setSoftSkills(softSkillsArray || []);

    const phrasesArray = jobData?.missing_keywords.split(",");
    setPhrases(phrasesArray || []);
  }, [jobData]);

  return (
    <MainDashboard>
      <ResumeBuilderContext.Provider
        value={{
          bgValue,
          resumeData,
          setResumeData,
          handleChange,
        }}
      >
        <main className="flex gap-4 overflow-auto w-full">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] w-full rounded-lg border"
          >
            <ResizablePanel defaultSize={40}>
              <div className="relative flex-col items-start p-4 gap-8 md:flex">
                <div className="flex-col w-full">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {jobData?.job_title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2">
                      {jobData?.company_name}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="relative size-40">
                        <svg
                          className="size-full"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Background Circle */}
                          <circle
                            cx={18}
                            cy={18}
                            r={16}
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-gray-700"
                            strokeWidth={3}
                          />
                          {/* Progress Circle inside a group with rotation */}
                          <g className="origin-center -rotate-90 transform">
                            <circle
                              cx={18}
                              cy={18}
                              r={16}
                              fill="none"
                              className="stroke-current text-slate-800 dark:text-lime-500"
                              strokeWidth={3}
                              strokeDasharray={100}
                              strokeDashoffset={
                                100 - Number(jobData?.jd_match.replace("%", ""))
                              }
                            />
                          </g>
                        </svg>
                        {/* Percentage Text */}
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">
                            {jobData?.jd_match}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 ml-4">
                        <p className="text-xs text-gray-600">
                          {jobData?.profile_summary}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex my-4 w-full">
                    <Tabs defaultValue="keywords">
                      <TabsList>
                        <TabsTrigger value="keywords">
                          <WholeWord className="mr-2 h-8" />
                          Keywords
                        </TabsTrigger>
                        <TabsTrigger value="content">
                          <NotebookPen className="mr-2 h-5" /> Content
                        </TabsTrigger>
                        <TabsTrigger value="cover_letter">
                          <Mail className="mr-2 h-5" /> Cover Letter
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="keywords" className="space-y-4">
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                High Priority Words
                              </CardTitle>
                              <CardDescription>
                                We found the following keywords and skills in
                                the job description that were not found on your
                                resume. If you have these skills, add them into
                                your resume to increase your relevancy score.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div>
                              <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                  <tbody className="[&_tr:last-child]:border-0">
                                    {keywords.map((word, index) => (
                                      <tr
                                        key={index}
                                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                      >
                                        <td className="align-start w-full [&:has([role=checkbox])]:pr-0 font-medium">
                                          {word}
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                          1/3
                                        </td>
                                        <td className="p-4 align-end [&:has([role=checkbox])]:pr-0">
                                          <CircleCheck color="#65BA74" />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Soft Skill
                              </CardTitle>
                              <CardDescription>
                                We found the following keywords and skills in
                                the job description that were not found on your
                                resume. If you have these skills, add them into
                                your resume to increase your relevancy score.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div>
                              <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                  <tbody className="[&_tr:last-child]:border-0">
                                    {softSkills.map((word, index) => (
                                      <tr
                                        key={index}
                                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                      >
                                        <td className="align-start w-full [&:has([role=checkbox])]:pr-0 font-medium">
                                          {word}
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                          1/3
                                        </td>
                                        <td className="p-4 align-end [&:has([role=checkbox])]:pr-0">
                                          <CircleX color="#E54D2E" />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Work Phrases
                              </CardTitle>
                              <CardDescription>
                                We found the following keywords and skills in
                                the job description that were not found on your
                                resume. If you have these skills, add them into
                                your resume to increase your relevancy score.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div>
                              <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                  <tbody className="[&_tr:last-child]:border-0">
                                    {phrases.map((word, index) => (
                                      <tr
                                        key={index}
                                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                      >
                                        <td className=" align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                          {word}
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0"></td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                          <CircleX color="#E54D2E" />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="content" className="space-y-4">
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Resume Length
                              </CardTitle>
                              <CardDescription>
                                The length of your resume should be based on the
                                relevant experience you have for a job, the
                                number of years of experience, and the job
                                you’re applying for.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="space-y-2">
                              <CardTitle className="text-xl">
                                {scoreData?.word_count.word_count} Words
                              </CardTitle>
                              <Progress value={33} />
                              <CardDescription>
                                The ideal resume size is between 400 and 800
                                words, anything above 800 is considered too
                                long.
                              </CardDescription>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Essential Section
                              </CardTitle>
                              <CardDescription>
                                We’ve found the following essential sections in
                                your resume:
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="space-y-2">
                              {scoreData?.standard_sections_present.found_sections.map(
                                (section, index) => (
                                  <Alert key={index}>
                                    <CircleCheck className="h-5 w-5" />
                                    <AlertDescription>
                                      {section}
                                    </AlertDescription>
                                  </Alert>
                                )
                              )}
                              {scoreData?.standard_sections_present.missing && (
                                <div>
                                  {scoreData?.standard_sections_present.missing_sections.map(
                                    (section, index) => (
                                      <Alert variant="destructive" key={index}>
                                        <CircleX className="h-5 w-5" />
                                        <AlertDescription>
                                          {section}
                                        </AlertDescription>
                                      </Alert>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Contact Information
                              </CardTitle>
                              <CardDescription>
                                We’ve found the following contact information in
                                your resume:
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="space-y-2">
                              {scoreData?.phone_number_present ? (
                                <Alert>
                                  <CircleCheck className="h-5 w-5" />
                                  <AlertDescription>
                                    Phone Number
                                  </AlertDescription>
                                </Alert>
                              ) : (
                                <Alert variant="destructive">
                                  <CircleX className="h-5 w-5" />
                                  <AlertTitle>Phone Number</AlertTitle>
                                  <AlertDescription>
                                    You can add components to your app using the
                                    cli.
                                  </AlertDescription>
                                </Alert>
                              )}
                              {scoreData?.email_present ? (
                                <Alert>
                                  <CircleCheck className="h-5 w-5" />
                                  <AlertDescription>Email</AlertDescription>
                                </Alert>
                              ) : (
                                <Alert variant="destructive">
                                  <CircleX className="h-5 w-5" />
                                  <AlertTitle>Email</AlertTitle>
                                  <AlertDescription>
                                    You can add components to your app using the
                                    cli.
                                  </AlertDescription>
                                </Alert>
                              )}
                              {scoreData?.linkedin_profile_present ? (
                                <Alert>
                                  <CircleCheck className="h-5 w-5" />
                                  <AlertDescription>Linkldin</AlertDescription>
                                </Alert>
                              ) : (
                                <Alert variant="destructive">
                                  <CircleX className="h-5 w-5" />
                                  <AlertTitle>Linkldin</AlertTitle>
                                  <AlertDescription>
                                    You can add components to your app using the
                                    cli.
                                  </AlertDescription>
                                </Alert>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Repetition
                              </CardTitle>
                              <CardDescription>
                                Using the same words over and over again in your
                                resume can be perceived as a sign of poor
                                language understanding.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="space-y-2">
                              <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>
                                  implemented{" "}
                                  <Badge
                                    variant="secondary"
                                    className="px-2 text-xs"
                                  >
                                    4
                                  </Badge>
                                </li>
                                <li>
                                  contributed{" "}
                                  <Badge
                                    variant="secondary"
                                    className="px-2 text-xs"
                                  >
                                    6
                                  </Badge>
                                </li>
                                <li>
                                  developed{" "}
                                  <Badge
                                    variant="secondary"
                                    className="px-2 text-xs"
                                  >
                                    3
                                  </Badge>
                                </li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Buzzwords & Cliches
                              </CardTitle>
                              <CardDescription>
                                sing buzzwords and jargon in your resume is a
                                sure-fire way to lose the interest of recruiters
                                quickly. Buzzwords make information that should
                                be easily understandable unclear.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="space-y-2">
                              <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>communication skills</li>
                                <li>customer-centric</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Long Bullet Points
                              </CardTitle>
                              <CardDescription>
                                Using bullet points to communicate experience
                                and achievements on your resume is a sure way to
                                grab the hiring manager’s attention. Bullet
                                points improve the structure of your resume and
                                make your point easily.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <Card>
                              <div className="space-y-2">
                                <CardContent className="pt-4">
                                  <p className="text-sm">
                                    Independent * Developed custom websites for
                                    various clients, utilizing front-end tools
                                    such as Laravel and Vue.js to create dynamic
                                    and responsive user interfaces ensuring a
                                    tailored approach to each project, meeting
                                    diverse client requirements. * Designed
                                    visually appealing brand guidelines and web
                                    standards, enhancing the overall user
                                    experience for client websites. PROJECTS
                                    Bitpulse | Python, Fast Api, React, NextJs,
                                    PostgreSQL
                                  </p>
                                </CardContent>
                              </div>
                            </Card>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="description">
                        <Card>
                          <div className="space-y-2">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                Job Description
                              </CardTitle>
                              <CardDescription>
                                Requirements for the job.
                              </CardDescription>
                            </CardHeader>
                          </div>
                          <CardContent>
                            <div className="text-sm">
                              <div className="whitespace-pre-line">
                                {jobData?.description}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
              <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl p-4 lg:col-span-2">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Resume Scanner</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Customize your resume for the perfect job title and
                      experience level.
                    </p>
                  </div>
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Use Extension
                  </Button>
                </div>
                <PlainTemplate />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </ResumeBuilderContext.Provider>
    </MainDashboard>
  );
}
