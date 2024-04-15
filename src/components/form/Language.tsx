import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";
import { Input } from "@/components/ui/input";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeBuilderContext);
  const skillType = "languages";
  const title = "Languages";
  const placeholder = "Language";

  const handleSkills = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      [skillType]: [...resumeData[skillType], ""],
    });
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2 space-y-4 mb-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col space-y-4">
          <Input
            type="text"
            placeholder={placeholder}
            name="skill"
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkills(e, index, skillType)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData[skillType].length}
        add={addSkill}
        remove={removeSkill}
      />
    </div>
  );
};

export default Language;
