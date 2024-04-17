//@ts-nocheck
import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext(ResumeBuilderContext);

  const handleWorkExperience = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newworkExperience = [...resumeData!.workExperience];
    //@ts-ignore
    newworkExperience[index][e.target.name] = e.target.value;

    if (setResumeData) {
      setResumeData({ ...resumeData!, workExperience: newworkExperience });
    }
  };

  const addWorkExperience = () => {
    //@ts-ignore
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData!.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index: number) => {
    const newworkExperience = [...resumeData!.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    if (setResumeData) {
      setResumeData({ ...resumeData!, workExperience: newworkExperience });
    }
  };

  return (
    <div className="flex-col-gap-2 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Work Experience</h3>
      </div>
      {resumeData?.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col space-y-4">
          <Input
            type="text"
            placeholder="Company"
            name="company"
            className="w-full other-input"
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Input
            type="text"
            placeholder="Job Title"
            name="position"
            className="w-full other-input"
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Textarea
            placeholder="Description"
            name="description"
            className="w-full other-input h-32"
            value={workExperience.description}
            maxLength={250}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Textarea
            placeholder="Key Achievements"
            name="keyAchievements"
            className="w-full other-input h-40"
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <Input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData?.workExperience.length || 0}
        add={addWorkExperience}
        remove={removeWorkExperience}
      />
    </div>
  );
};

export default WorkExperience;
