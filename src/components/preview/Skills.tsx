import { useContext } from "react";
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";

const Skills = ({ title, skills }: { title: string; skills: [] }) => {
  const { resumeData, setResumeData } = useContext(ResumeBuilderContext);

  const handleTitleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const newSkills = [...resumeData!.skills];
    const foundSkill = newSkills.find((skillType) => skillType.title === title);
    if (foundSkill) {
      foundSkill.title = e.target.innerText;
    }
    if (setResumeData) {
      setResumeData({ ...resumeData!, skills: newSkills });
    }
  };

  return (
    skills.length > 0 && (
      <>
        <h2
          className="section-title mb-1 border-b-2 border-gray-300 editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTitleChange}
        >
          {title}
        </h2>
        <p className="sub-content">{skills.join(", ")}</p>
      </>
    )
  );
};

export default Skills;
