import { useState } from "react";
import { Button } from "@/components/ui/button";
import FileImporter from "../FileImporter";
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

export default function ResumeUpload() {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <Card className="mx-auto ">
      <div className="space-y-2">
        <CardHeader>
          <CardTitle className="text-xl">Resume</CardTitle>
          <CardDescription>Upload Your Resume</CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <div className="space-y-4">
          <FileImporter
            setHtmlContent={setHtmlContent}
            setSelectedFile={setSelectedFile}
            selectedFile={selectedFile}
          />
        </div>
        {htmlContent && (
          <div className="space-y-4">
            <div className="py-4 text-xs">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
}
