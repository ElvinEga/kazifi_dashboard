import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeBuilderContext);

  // social media
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace(
      "https://",
      ""
    );
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="space-y-4 mt-5">
      <h3 className="text-lg font-medium">Social Media</h3>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Social Media"
              name="socialMedia"
              className="other-input"
              value={socialMedia.socialMedia}
              onChange={(e) => handleSocialMedia(e, index)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Link"
              name="link"
              className="other-input"
              value={socialMedia.link}
              onChange={(e) => handleSocialMedia(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={removeSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
