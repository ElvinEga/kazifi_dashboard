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

import JobDetails from "../components/tabs/JobDetails";
import CoverLetter from "../components/tabs/CoverLetter";
import ResumeUpload from "../components/tabs/Resume";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ResumeScanner() {
  return (
    <MainDashboard>
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
                    Senior UI/UX Designer
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Triply.co · Nairobi County, Kenya
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
                            strokeDashoffset={100 - 72}
                          />
                        </g>
                      </svg>
                      {/* Percentage Text */}
                      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">
                          72%
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <p className="text-sm text-gray-600">
                        Needs improvement. Your resume is missing keywords and
                        is not well targeted to the job description. This could
                        result in your resume not getting past automated
                        screening software and recruiters.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        But don't worry! We've outlined the important skills
                        below to include into your resume. You should aim for a
                        score of at least 70.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex my-4 w-full">
                  <Tabs defaultValue="account">
                    <TabsList>
                      <TabsTrigger value="account">
                        MISSING KEYWORDS
                      </TabsTrigger>
                      <TabsTrigger value="password">
                        {" "}
                        FOUND KEYWORDS
                      </TabsTrigger>
                      <TabsTrigger value="description">
                        JOB DESCRIPTION
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        <div className="space-y-2">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              High Priority Words
                            </CardTitle>
                            <CardDescription>
                              We found the following keywords and skills in the
                              job description that were not found on your
                              resume. If you have these skills, add them into
                              your resume to increase your relevancy score. For
                              example, you can add them to your work experiences
                              or skills section. They've been highlighted on the
                              right so you can understand the context. You can
                              also exclude skills that you know aren't relevant
                              to the job.
                            </CardDescription>
                          </CardHeader>
                        </div>
                        <CardContent>
                          <div>
                            <div className="relative w-full overflow-auto">
                              <table className="w-full caption-bottom text-sm">
                                <tbody className="[&_tr:last-child]:border-0">
                                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                      Design
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      3/3
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-yellow-400"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </td>
                                  </tr>
                                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                      Languages
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      3
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                                  </tr>
                                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                      Software Development
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      2
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                                  </tr>
                                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                      Information Retrieval
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      2
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                                  </tr>
                                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                      Web
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                      2
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                      Change your password here.
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
              <Tabs defaultValue="job-details">
                <TabsList>
                  <TabsTrigger value="job-details">JOB DETAILS</TabsTrigger>
                  <TabsTrigger value="resume"> YOUR RESUME</TabsTrigger>
                  <TabsTrigger value="cover-letter"> COVER LETTER</TabsTrigger>
                </TabsList>
                <TabsContent value="job-details">
                  <JobDetails></JobDetails>
                </TabsContent>
                <TabsContent value="resume">
                  <ResumeUpload></ResumeUpload>
                </TabsContent>
                <TabsContent value="cover-letter">
                  <CoverLetter></CoverLetter>
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </MainDashboard>
  );
}
