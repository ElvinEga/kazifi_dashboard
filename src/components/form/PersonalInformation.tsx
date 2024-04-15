import React, { useContext } from "react";
import { ResumeBuilderContext } from "@/components/context/ResumeBuilderContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const PersonalInformation = ({}) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeBuilderContext);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Personal Information</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            className="pi"
            value={resumeData?.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Job Title</Label>
          <Input
            type="text"
            placeholder="Full Name"
            name="position"
            className="pi"
            value={resumeData.position}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={resumeData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Phone"
            type="tel"
            name="contactInformation"
            value={resumeData.contactInformation}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Address"
            name="address"
            value={resumeData.address}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Profile Picture</Label>
          <Input
            id="profilePicture"
            type="file"
            accept="image/*"
            onChange={handleProfilePicture}
            placeholder="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
