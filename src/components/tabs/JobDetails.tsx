import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export interface LinkedinJob {
  companyName: string;
  title: string;
  url: string;
  location: string;
  datePosted: string;
  jobDescriptionText: string;
  skills: string;
  jobDetails: string;
}

export default function JobDetails() {
  const [jobDescription, setJobDescription] = useState("");
  const [jobName, setJobName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [jobDetails, setJobDetails] = useState<LinkedinJob | null>(null);
  const handleScan = () => {
    const inputData = {
      jobDescription: jobDescription,
      jobName: jobName,
      companyName: companyName,
      jobUrl: jobUrl,
    };
    // navigate("/scan", { state: inputData });
  };

  const handleEditoChange = (html: string) => {
    setJobDescription(html);
  };

  return (
    <Card className="mx-auto ">
      <div className="space-y-2">
        <CardHeader>
          <CardTitle className="text-xl">Job Details</CardTitle>
          <CardDescription>
            Enter the job details and description
          </CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="job-title">Job Title</Label>
              <Input
                id="job-title"
                defaultValue={jobDetails?.title}
                onChange={(e) => setJobName(e.target.value)}
                placeholder="Job Title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                defaultValue={jobDetails?.companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter the company name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="job-url">Job URL</Label>
            <Input
              id="job-url"
              defaultValue={jobDetails?.url}
              onChange={(e) => setJobUrl(e.target.value)}
              placeholder="Enter the job URL"
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label>Job Description</Label>
            <div className="mt-4 w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
              <ReactQuill
                theme="snow"
                style={{ height: "300px" }}
                defaultValue={jobDetails?.jobDescriptionText}
                onChange={handleEditoChange}
                placeholder="Job Description..."
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button onClick={handleScan}>Update</Button>
      </CardFooter>
    </Card>
  );
}
