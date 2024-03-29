import React from "react";
import { Eye, FileUp, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

export function ResumeBuilder() {
  return (
    <MainDashboard>
      <main className="flex gap-4 overflow-auto w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] w-full rounded-lg border"
        >
          <ResizablePanel defaultSize={30}>
            <Card>
              <CardHeader>
                <CardTitle>Senior Front End Developer</CardTitle>
                <CardDescription>
                  Google · Bengaluru, Karnataka, India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex-1 grid w-full ">
                  <div className="grid gap-4  md:gap-4 ">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" placeholder="Email" type="email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="Address" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Education</h3>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                          <Plus className="mr-2 h-4 w-4" /> Add
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="school-1">School</Label>
                          <Input id="school-1" placeholder="School" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="degree-1">Degree</Label>
                          <Input id="degree-1" placeholder="Degree" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="field-1">Field of Study</Label>
                          <Input id="field-1" placeholder="Field of Study" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="graduation-1">Graduation Year</Label>
                          <Input
                            id="graduation-1"
                            placeholder="Graduation Year"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Work Experience</h3>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                          <Plus className="mr-2 h-4 w-4" /> Add
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-1">Company</Label>
                          <Input id="company-1" placeholder="Company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title-1">Job Title</Label>
                          <Input id="title-1" placeholder="Job Title" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="start-1">Start Date</Label>
                          <Input
                            id="start-1"
                            placeholder="Start Date"
                            type="date"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-1">End Date</Label>
                          <Input
                            id="end-1"
                            placeholder="End Date"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="description-1">Description</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="description-1"
                        placeholder="Enter a description"
                        defaultValue={""}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Skills</h3>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                          <Plus className="mr-2 h-4 w-4" /> Add
                        </button>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills</Label>
                        <Input id="skills" placeholder="Enter your skills" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Projects</h3>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                          <Plus className="mr-2 h-4 w-4" /> Add
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-1">Project</Label>
                          <Input id="project-1" placeholder="Project" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="link-1">Link</Label>
                          <Input id="link-1" placeholder="Link" />
                        </div>
                      </div>
                      <div className="space-y-2 w-full">
                        <Label htmlFor="description-1">Description</Label>
                        <Textarea
                          id="description-1"
                          className="min-h-[100px]"
                          placeholder="Enter a description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update</Button>
              </CardFooter>
            </Card>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <Button variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button>
                    <FileUp className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <div className="overflow-y-auto h-full">
                <div className="w-full">
                  <CardContent>
                    <div className="flex flex-col gap-2 min-h-40 justify-center max-w-3xl mx-auto text-center">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                          Jane Cooper
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                          jane@example.com
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          555-123-4567
                        </p>
                      </div>
                    </div>
                    <div className="mx-auto max-w-3xl grid gap-8 lg:gap-12 lg:max-w-5xl">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Education</h2>
                        <div className="space-y-0.5">
                          <h3 className="text-xl font-bold">
                            Bachelor of Science in Computer Science
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            University of Example (2010-2014)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Work Experience</h2>
                        <div className="space-y-4">
                          <div className="space-y-0.5">
                            <h3 className="text-xl font-bold">
                              Senior Software Engineer
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Company Example (2018-Present)
                            </p>
                          </div>
                          <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Lead team of engineers developing web applications.
                            Oversee the design of the front-end user interface,
                            back-end server infrastructure, and database
                            management. Collaborate with product managers to
                            define feature requirements and project timelines.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <ul className="grid gap-2 md:grid-cols-2">
                          <li>JavaScript</li>
                          <li>TypeScript</li>
                          <li>React</li>
                          <li>Node.js</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Projects</h2>
                        <ul className="grid gap-2 md:grid-cols-2">
                          <li>Project Example 1</li>
                          <li>Project Example 2</li>
                          <li>Project Example 3</li>
                          <li>Project Example 4</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>
                  Select a template to update your resume.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/assets/img/templates/template1.png"
                    alt="Resume Template 1"
                    width={170}
                    height={240}
                    style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/templates/template2.png"
                    alt="Resume Template 2"
                    width={170}
                    height={240}
                    style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/templates/template3.png"
                    alt="Resume Template 3"
                    width={170}
                    height={240}
                    style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/templates/template3.png"
                    alt="Resume Template 3"
                    width={170}
                    height={240}
                    style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                  />
                </div>
                <div className="space-y-4 py-4">
                  <p className="text-lg font-semibold">Template Settings</p>

                  <div className="space-y-2">
                    <Label htmlFor="font">Font</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fonts</SelectLabel>
                          <SelectItem value="apple">Poppins</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="font">Accent Color</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fonts</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </MainDashboard>
  );
}
