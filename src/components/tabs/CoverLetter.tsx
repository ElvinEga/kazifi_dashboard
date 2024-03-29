import { useState } from "react";
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
import { WandSparkles } from "lucide-react";

export default function CoverLetter() {
  const [jobCoverLetter, setJobCoverLetter] = useState("");

  const handleEditoChange = (html: string) => {
    setJobCoverLetter(html);
  };

  return (
    <Card className="mx-auto ">
      <div className="space-y-2">
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle className="text-xl">Cover Letter</CardTitle>
              <CardDescription>
                Use AI Powered Cover Letter Writter
              </CardDescription>
            </div>
            <Button>
              <WandSparkles className="mr-2 h-4 w-4" />
              AI Cover Maker
            </Button>
          </div>
        </CardHeader>
      </div>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
              <ReactQuill
                theme="snow"
                style={{ height: "500px" }}
                onChange={handleEditoChange}
                placeholder="Write Cover Letter..."
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
}
