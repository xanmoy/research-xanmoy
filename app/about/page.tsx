import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <img
                    src="https://res.cloudinary.com/dg6vdv82c/image/upload/v1743506029/WhatsApp_Image_2025-03-22_at_14.55.44_wuv7h1.jpg"
                    alt="Researcher Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Tanmoy Ganguly
                  </h1>
                  <p className="text-indigo-500 mb-4">System Researcher</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "AI",
                      "Machine Learning",
                      "Distributed Systems",
                      "Quantum Computing",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-gray-800 text-indigo-400 border-indigo-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <SocialLink
                      href="mailto:tanmoy@xanmoy.in"
                      icon={<Mail className="h-5 w-5" />}
                      label="tanmoy@xanmoy.in"
                    />
                    <SocialLink
                      href="https://github.com"
                      icon={<Github className="h-5 w-5" />}
                      label="github.com/xanmoy"
                    />
                    <SocialLink
                      href="https://twitter.com"
                      icon={<Twitter className="h-5 w-5" />}
                      label="@xanmoy"
                    />
                    <SocialLink
                      href="https://linkedin.com"
                      icon={<Linkedin className="h-5 w-5" />}
                      label="linkedin.com/in/xanmoy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  {" "}
                  I'm Tanmoy Ganguly, a data-driven software engineer and
                  final-year Computer Science student, specializing in machine
                  learning, intelligent systems, and full-stack development.
                  With over 3 years of experience, I’ve built data-centric
                  applications using Python, scikit-learn, and SQL, and I'm
                  currently exploring deep learning, LLMs, and vector search
                  technologies.{" "}
                </p>{" "}
                <p>
                  {" "}
                  My work blends applied machine learning with modern web
                  engineering. Notable projects include{" "}
                  <strong>NearKart</strong>, a personalized shopping platform
                  using ML-based product recommendations and microservices, and{" "}
                  <strong>Medinova AI</strong>, a healthcare assistant
                  leveraging LangChain, LLaMA 2, and FAISS for contextual
                  medical insights.{" "}
                </p>{" "}
                <p>
                  {" "}
                  I'm passionate about building meaningful solutions that lie at
                  the intersection of AI and software engineering. As the Cloud
                  Computing Lead at GDSC, I’ve conducted workshops and mentored
                  peers in cloud-native architecture and scalable ML systems. My
                  goal is to contribute to open-source AI projects and help
                  shape technologies that are ethical, accessible, and
                  impactful.{" "}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
              <div className="space-y-4">
                <EducationCard
                  degree="Bachelor of Technology in Computer Science and Engineering"
                  institution="West Bengal University of Technology"
                  years="2021 - 2025"
                  description="Focus on Artificial Intelligence, Algorithms, Cloud Computing and Distributed Systems."
                />
                
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
              <div className="space-y-4">
                <ExperienceCard
                  title="Cloud Computing Lead"
                  company="Google Developer Groups"
                  years="2024 - Present"
                  description="Leading cloud computing initiatives, organizing workshops, and mentoring peers in cloud-native architecture and scalable ML systems."
                />
                {/* <ExperienceCard
                  title="Senior Research Scientist"
                  company="Tech Research Institute"
                  years="2016 - 2019"
                  description="Conducted research on distributed AI systems and published multiple papers in top-tier conferences."
                />
                <ExperienceCard
                  title="Research Intern"
                  company="Google Research"
                  years="Summer 2015"
                  description="Worked on machine learning optimization techniques for large-scale distributed systems."
                /> */}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory
                  title="Artificial Intelligence"
                  skills={[
                    "Machine Learning",
                    "Deep Learning",
                    "Reinforcement Learning",
                    "Computer Vision",
                    "Natural Language Processing",
                  ]}
                />
                <SkillCategory
                  title="Distributed Systems"
                  skills={[
                    "Cloud Computing",
                    "Distributed Algorithms",
                    "Fault Tolerance",
                    "Scalability",
                    "Consensus Protocols",
                  ]}
                />
                <SkillCategory
                  title="Quantum Computing"
                  skills={[
                    "Quantum Algorithms",
                    "Quantum Machine Learning",
                    "Quantum Simulation",
                    "Quantum Optimization",
                  ]}
                />
                <SkillCategory
                  title="Programming & Tools"
                  skills={[
                    "Python",
                    "TensorFlow",
                    "PyTorch",
                    "Rust",
                    "Go",
                    "Kubernetes",
                    "Docker",
                  ]}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function EducationCard({
  degree,
  institution,
  years,
  description,
}: {
  degree: string;
  institution: string;
  years: string;
  description: string;
}) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{degree}</h3>
          <span className="text-sm text-indigo-500">{years}</span>
        </div>
        <p className="text-lg text-gray-300 mb-2">{institution}</p>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function ExperienceCard({
  title,
  company,
  years,
  description,
}: {
  title: string;
  company: string;
  years: string;
  description: string;
}) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm text-indigo-500">{years}</span>
        </div>
        <p className="text-lg text-gray-300 mb-2">{company}</p>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="bg-gray-800 text-indigo-400 border-indigo-800"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
