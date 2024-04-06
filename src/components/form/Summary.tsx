import React, { useContext } from "react";
import { ResumeBuilderContext } from "../../pages/ResumeBuilder";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const Summary = () => {
  const { resumeData, setResumeData, handleChange } =
    useContext(ResumeBuilderContext);
  return (
    <div className="flex-col-gap-2 mt-4">
      <div className="space-y-2">
        <Label htmlFor="name">Summary</Label>
        <Textarea
          type="text"
          placeholder="Summary"
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
