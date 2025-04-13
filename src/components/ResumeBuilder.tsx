
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Download, Plus, Trash2, FilePlus, FileCheck, FileText } from 'lucide-react';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const [formData, setFormData] = useState({
    personal: {
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '555-123-4567',
      location: 'New York, NY',
      title: 'Full Stack Developer',
      about: 'Passionate software engineer with expertise in web development and cloud technologies.'
    },
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        location: 'San Francisco, CA',
        startDate: '2018-09',
        endDate: '2022-05',
        gpa: '3.8'
      }
    ],
    experience: [
      {
        title: 'Software Engineer Intern',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        startDate: '2021-06',
        endDate: '2021-08',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with the team to improve user experience and performance.'
      }
    ],
    skills: [
      'JavaScript', 'React', 'Node.js', 'TypeScript', 'CSS', 'HTML', 'Git', 'MongoDB', 'SQL'
    ],
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Built a responsive personal portfolio website using React and Tailwind CSS.',
        link: 'https://example.com/portfolio',
        technologies: 'React, Tailwind CSS, Framer Motion'
      }
    ]
  });
  
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value
      }
    }));
  };
  
  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: '',
          institution: '',
          location: '',
          startDate: '',
          endDate: '',
          gpa: ''
        }
      ]
    }));
  };
  
  const updateEducation = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  
  const removeEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  
  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    }));
  };
  
  const updateExperience = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  
  const removeExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  
  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim()).filter(Boolean);
    setFormData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };
  
  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: '',
          description: '',
          link: '',
          technologies: ''
        }
      ]
    }));
  };
  
  const updateProject = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };
  
  const removeProject = (index: number) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-xl">Resume Builder</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 w-full rounded-none">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            
            <div className="p-6">
              <TabsContent value="personal" className="m-0">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.personal.name} 
                      onChange={handlePersonalChange} 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.personal.email} 
                        onChange={handlePersonalChange} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.personal.phone} 
                        onChange={handlePersonalChange} 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        name="location" 
                        value={formData.personal.location} 
                        onChange={handlePersonalChange} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Professional Title</Label>
                      <Input 
                        id="title" 
                        name="title" 
                        value={formData.personal.title} 
                        onChange={handlePersonalChange} 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="about">Professional Summary</Label>
                    <Textarea 
                      id="about" 
                      name="about" 
                      rows={4} 
                      value={formData.personal.about} 
                      onChange={handlePersonalChange} 
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="m-0">
                <div className="space-y-6">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="p-4 border rounded-md relative">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeEducation(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`degree-${index}`}>Degree/Certificate</Label>
                          <Input 
                            id={`degree-${index}`} 
                            value={edu.degree} 
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)} 
                          />
                        </div>
                        <div>
                          <Label htmlFor={`institution-${index}`}>Institution</Label>
                          <Input 
                            id={`institution-${index}`} 
                            value={edu.institution} 
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)} 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`edu-location-${index}`}>Location</Label>
                            <Input 
                              id={`edu-location-${index}`} 
                              value={edu.location} 
                              onChange={(e) => updateEducation(index, 'location', e.target.value)} 
                            />
                          </div>
                          <div>
                            <Label htmlFor={`edu-gpa-${index}`}>GPA (optional)</Label>
                            <Input 
                              id={`edu-gpa-${index}`} 
                              value={edu.gpa} 
                              onChange={(e) => updateEducation(index, 'gpa', e.target.value)} 
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                            <Input 
                              id={`edu-start-${index}`} 
                              type="month"
                              value={edu.startDate} 
                              onChange={(e) => updateEducation(index, 'startDate', e.target.value)} 
                            />
                          </div>
                          <div>
                            <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                            <Input 
                              id={`edu-end-${index}`} 
                              type="month"
                              value={edu.endDate} 
                              onChange={(e) => updateEducation(index, 'endDate', e.target.value)} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={addEducation}
                  >
                    <Plus size={16} className="mr-2" /> Add Education
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="experience" className="m-0">
                <div className="space-y-6">
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="p-4 border rounded-md relative">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeExperience(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                          <Input 
                            id={`job-title-${index}`} 
                            value={exp.title} 
                            onChange={(e) => updateExperience(index, 'title', e.target.value)} 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`company-${index}`}>Company</Label>
                            <Input 
                              id={`company-${index}`} 
                              value={exp.company} 
                              onChange={(e) => updateExperience(index, 'company', e.target.value)} 
                            />
                          </div>
                          <div>
                            <Label htmlFor={`exp-location-${index}`}>Location</Label>
                            <Input 
                              id={`exp-location-${index}`} 
                              value={exp.location} 
                              onChange={(e) => updateExperience(index, 'location', e.target.value)} 
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
                            <Input 
                              id={`exp-start-${index}`} 
                              type="month"
                              value={exp.startDate} 
                              onChange={(e) => updateExperience(index, 'startDate', e.target.value)} 
                            />
                          </div>
                          <div>
                            <Label htmlFor={`exp-end-${index}`}>End Date</Label>
                            <Input 
                              id={`exp-end-${index}`} 
                              type="month"
                              value={exp.endDate} 
                              onChange={(e) => updateExperience(index, 'endDate', e.target.value)} 
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor={`description-${index}`}>Description</Label>
                          <Textarea 
                            id={`description-${index}`} 
                            rows={4} 
                            value={exp.description} 
                            onChange={(e) => updateExperience(index, 'description', e.target.value)} 
                            placeholder="Describe your responsibilities and achievements"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={addExperience}
                  >
                    <Plus size={16} className="mr-2" /> Add Experience
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="m-0">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Textarea 
                      id="skills" 
                      rows={6} 
                      value={formData.skills.join(', ')} 
                      onChange={handleSkillsChange} 
                      placeholder="e.g., JavaScript, React, Node.js"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="projects" className="m-0">
                <div className="space-y-6">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-md relative">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeProject(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`project-title-${index}`}>Project Title</Label>
                          <Input 
                            id={`project-title-${index}`} 
                            value={project.title} 
                            onChange={(e) => updateProject(index, 'title', e.target.value)} 
                          />
                        </div>
                        <div>
                          <Label htmlFor={`project-desc-${index}`}>Description</Label>
                          <Textarea 
                            id={`project-desc-${index}`} 
                            rows={3} 
                            value={project.description} 
                            onChange={(e) => updateProject(index, 'description', e.target.value)} 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`project-link-${index}`}>Project Link (optional)</Label>
                            <Input 
                              id={`project-link-${index}`} 
                              value={project.link} 
                              onChange={(e) => updateProject(index, 'link', e.target.value)} 
                            />
                          </div>
                          <div>
                            <Label htmlFor={`project-tech-${index}`}>Technologies Used</Label>
                            <Input 
                              id={`project-tech-${index}`} 
                              value={project.technologies} 
                              onChange={(e) => updateProject(index, 'technologies', e.target.value)} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={addProject}
                  >
                    <Plus size={16} className="mr-2" /> Add Project
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="lg:mt-0 mt-4">
        <Card className="sticky top-4">
          <CardHeader className="border-b flex flex-row justify-between items-center">
            <CardTitle className="text-xl">Resume Preview</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <FilePlus size={14} className="mr-1" /> Save
              </Button>
              <Button size="sm" className="bg-campus-blue flex items-center">
                <Download size={14} className="mr-1" /> Download PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-6 border-b">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{formData.personal.name}</h2>
                <h3 className="text-lg text-gray-600">{formData.personal.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
                  {formData.personal.email && <span>{formData.personal.email}</span>}
                  {formData.personal.phone && <span>{formData.personal.phone}</span>}
                  {formData.personal.location && <span>{formData.personal.location}</span>}
                </div>
              </div>
              
              {formData.personal.about && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Summary</h3>
                  <p className="text-gray-700">{formData.personal.about}</p>
                </div>
              )}
              
              {formData.experience.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Experience</h3>
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex flex-wrap justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{exp.title}</h4>
                          <div className="text-gray-600">{exp.company}, {exp.location}</div>
                        </div>
                        {(exp.startDate || exp.endDate) && (
                          <div className="text-sm text-gray-500">
                            {exp.startDate && (
                              <>
                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                {exp.endDate ? ' - ' : ' - Present'}
                              </>
                            )}
                            {exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {formData.education.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Education</h3>
                  {formData.education.map((edu, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex flex-wrap justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <div className="text-gray-600">{edu.institution}, {edu.location}</div>
                          {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                        </div>
                        {(edu.startDate || edu.endDate) && (
                          <div className="text-sm text-gray-500">
                            {edu.startDate && (
                              <>
                                {new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                {edu.endDate ? ' - ' : ' - Present'}
                              </>
                            )}
                            {edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {formData.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {formData.projects.length > 0 && (
                <div className="mb-0">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Projects</h3>
                  {formData.projects.map((project, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold">{project.title}</h4>
                        {project.technologies && (
                          <div className="text-xs text-gray-600">{project.technologies}</div>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-campus-blue hover:underline">
                          {project.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <div className="flex items-center text-green-600">
                    <FileCheck size={16} className="mr-1" />
                    <span>ATS Friendly</span>
                  </div>
                  <div className="text-gray-600">Resume score: 85/100</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <FileText size={14} className="mr-1" /> Preview Full
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeBuilder;
