import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Skills from "../../preview/Skills";
import DateRange from "../../../lib/DateRange";
import ContactInfo from "../../preview/ContactInfo";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { ResumeBuilderContext } from "../../../pages/ResumeBuilder";
import Language from "../../preview/Language";
import Certification from "../../preview/Certification";
import { Link } from "react-router-dom";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);
const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable;
    }),
  { ssr: false }
);
const PlainTemplate = () => {
  const { resumeData, setResumeData, bgValue } =
    useContext(ResumeBuilderContext);

  const icons = [
    { name: "github", icon: <FaGithub /> },
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "youtube", icon: <FaYoutube /> },
    { name: "website", icon: <CgWebsite /> },
  ];

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (source.droppableId === "work-experience") {
      const newWorkExperience = [...resumeData.workExperience];
      const [removed] = newWorkExperience.splice(source.index, 1);
      newWorkExperience.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
      const newWorkExperience = [...resumeData.workExperience];
      const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newWorkExperience[workExperienceIndex].keyAchievements =
        keyAchievements.join("\n");
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId === "skills") {
      const newSkills = [...resumeData.skills];
      const [removed] = newSkills.splice(source.index, 1);
      newSkills.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, skills: newSkills });
    }

    if (source.droppableId.includes("projects")) {
      const newProjects = [...resumeData.projects];
      const [removed] = newProjects.splice(source.index, 1);
      newProjects.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, projects: newProjects });
    }

    if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
      const newProjects = [...resumeData.projects];
      const projectIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newProjects[projectIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
      setResumeData({ ...resumeData, projects: newProjects });
    }
  };

  return (
    <div className={`flex preview rm-padding-print p-4 bg-${bgValue}-100`}>
      <A4PageWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-col gap-2 min-h-40 justify-center items-center max-w-3xl mx-auto text-center">
            {resumeData.profilePicture.length > 0 && (
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700">
                <img
                  src={resumeData.profilePicture}
                  alt="profile"
                  width={100}
                  height={100}
                  className="object-cover h-full w-full"
                />
              </div>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{resumeData.name}</h1>
              <h1 className="text-2xl font-semibold">{resumeData.position}</h1>
              <ContactInfo
                mainclass="grid grid-cols-3 gap-1 mb-1 contact"
                linkclass="inline-flex items-center gap-1"
                teldata={resumeData.contactInformation}
                emaildata={resumeData.email}
                addressdata={resumeData.address}
                telicon={<MdPhone />}
                emailicon={<MdEmail />}
                addressicon={<MdLocationOn />}
              />
              <div className="grid grid-cols-3 gap-1">
                {resumeData.socialMedia.map((socialMedia, index) => {
                  return (
                    <a
                      href={`http://${socialMedia.link}`}
                      aria-label={socialMedia.socialMedia}
                      key={index}
                      title={socialMedia.socialMedia}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 social-media"
                      // Prevent text overflowing, If the socialMedia.link string is longer than 32 characters, apply the wordWrap and display styles to this <a> tag.
                      // wordWrap: "break-word" breaks the text onto the next line if it's too long,
                      // display: "inline-block" is necessary for wordWrap to work on an inline element like <a>.
                      style={
                        socialMedia.link.length > 32
                          ? { wordWrap: "break-word", display: "inline-block" }
                          : {}
                      }
                    >
                      {icons.map((icon, index) => {
                        if (
                          icon.name === socialMedia.socialMedia.toLowerCase()
                        ) {
                          return <span key={index}>{icon.icon}</span>;
                        }
                      })}
                      {socialMedia.link}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mx-auto grid gap-4">
            <div className="space-y-2 pt-6">
              <h2 className="text-2xl font-bold">Summary</h2>
              <p className="content break-words">{resumeData.summary}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="space-y-0.5">
                {resumeData.education.map((item, index) => (
                  <div key={index} className="mb-1">
                    <p className="text-base font-bold">{item.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.school}
                    </p>
                    <DateRange
                      startYear={item.startYear}
                      endYear={item.endYear}
                      id={`education-start-end-date`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {resumeData.workExperience.length > 0 && (
              <div className="space-y-4">
                <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <h2
                        className="text-xl font-bold editable"
                        contentEditable
                        suppressContentEditableWarning
                      >
                        Work Experience
                      </h2>
                      {resumeData.workExperience.map((item, index) => (
                        <Draggable
                          key={`${item.company}-${index}`}
                          draggableId={`WORK_EXPERIENCE-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`my-4 ${
                                snapshot.isDragging &&
                                "outline-dashed outline-2 outline-gray-400 bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-base font-bold">
                                    {item.position}
                                  </p>
                                  <p className="content i-bold">
                                    {item.company}
                                  </p>
                                </div>
                                <div>
                                  <p className="content">{item.location}</p>
                                  <DateRange
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    id={`work-experience-start-end-date`}
                                  />
                                </div>
                              </div>

                              <p className="content hyphens-auto">
                                {item.description}
                              </p>
                              <Droppable
                                droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                                type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                              >
                                {(provided) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {typeof item.keyAchievements === "string" &&
                                      item.keyAchievements
                                        .split("\n")
                                        .map((achievement, subIndex) => (
                                          <Draggable
                                            key={`${item.company}-${index}-${subIndex}`}
                                            draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                            index={subIndex}
                                          >
                                            {(provided, snapshot) => (
                                              <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                            snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-gray-400 bg-white"
                                          }`}
                                              >
                                                {achievement}
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {provided.placeholder}
                                  </ul>
                                )}
                              </Droppable>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            )}

            {resumeData.projects.length > 0 && (
              <div className="space-y-4">
                <Droppable droppableId="projects" type="PROJECTS">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <h2
                        className="text-2xl font-bold editable"
                        contentEditable
                        suppressContentEditableWarning
                      >
                        Projects
                      </h2>
                      {resumeData.projects.map((item, index) => (
                        <Draggable
                          key={`${item.name}-${index}`}
                          draggableId={`PROJECTS-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-1 ${
                                snapshot.isDragging &&
                                "outline-dashed outline-2 outline-gray-400 bg-white"
                              }`}
                            >
                              <p className="content i-bold">{item.name}</p>
                              <DateRange
                                startYear={item.startYear}
                                endYear={item.endYear}
                                id={`work-experience-start-end-date`}
                              />
                              <Link
                                to={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="content"
                              >
                                {item.link}
                              </Link>
                              <p className="content">{item.description}</p>
                              <Droppable
                                droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                                type="PROJECTS_KEY_ACHIEVEMENT"
                              >
                                {(provided) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {typeof item.keyAchievements === "string" &&
                                      item.keyAchievements
                                        .split("\n")
                                        .map((achievement, subIndex) => (
                                          <Draggable
                                            key={`${item.name}-${index}-${subIndex}`}
                                            draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                            index={subIndex}
                                          >
                                            {(provided, snapshot) => (
                                              <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                            snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-gray-400 bg-white"
                                          }`}
                                              >
                                                {achievement}
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {provided.placeholder}
                                  </ul>
                                )}
                              </Droppable>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            )}

            <div className="space-y-4">
              <Droppable droppableId="skills" type="SKILLS">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {resumeData.skills.map((skill, index) => (
                      <Draggable
                        key={`SKILLS-${index}`}
                        draggableId={`SKILLS-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-1 ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-gray-400 bg-white"
                            }`}
                          >
                            <Skills title={skill.title} skills={skill.skills} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="space-y-4">
              <Language title="Languages" languages={resumeData.languages} />
              <Certification
                title="Certifications"
                certifications={resumeData.certifications}
              />
            </div>
          </div>
        </DragDropContext>
      </A4PageWrapper>
    </div>
  );
};

const A4PageWrapper = ({ children }) => {
  const alertA4Size = () => {
    const preview = document.querySelector(".preview");
    const previewHeight = preview.offsetHeight;
    console.log(previewHeight);
    if (previewHeight > 1122) {
      alert("A4 size exceeded");
    }
  };

  return (
    <div className="w-8.5in" onLoad={alertA4Size}>
      {children}
    </div>
  );
};

export default PlainTemplate;
