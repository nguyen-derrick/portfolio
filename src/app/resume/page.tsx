"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">Derrick Nguyen</h1>
            </div>

            <Button
              className="mt-4 md:mt-0 bg-[#3B82F6] hover:bg-[#2563EB]"
              size="sm"
              asChild
            >
              <Link href="https://www.linkedin.com/in/nguyen-derrick/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                View on LinkedIn
              </Link>
            </Button>
          </div>

          <Separator className="mb-8 bg-gray-200" />

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

            <div className="space-y-8">
              {/* Keyloop (Present) */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Data Analyst</h3>
                  <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                    Nov 2024 - Present
                  </Badge>
                </div>
                <p className="text-lg text-primary mb-2">Keyloop</p>
                <p className="text-muted-foreground mb-4">Toronto, Ontario, Canada</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built recurring GTM reporting in Excel and Power BI to track KPIs, trends, and funnel performance.</li>
                  <li>Used SQL to pull, join, and validate data across sources, including Salesforce pipeline and lead flow.</li>
                  <li>Used Python to automate transforms, QA checks, and repeat reporting tasks.</li>
                </ul>
              </div>

              {/* Manulife (previous) */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Associate Software Developer</h3>
                  <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                    Apr 2024 - Nov 2024
                  </Badge>
                </div>
                <p className="text-lg text-primary mb-2">Manulife</p>
                <p className="text-muted-foreground mb-4">Toronto, Ontario, Canada</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed automated data pipelines and reporting solutions, improving operational efficiency.</li>
                  <li>Designed and implemented interactive dashboards in Power BI using SQL and Python for reporting.</li>
                  <li>Optimized data processing workflows, reducing manual work and enhancing data accessibility.</li>
                </ul>
              </div>

              {/* CIBC */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Analytics Engineer</h3>
                  <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                    Jan 2024 - Apr 2024
                  </Badge>
                </div>
                <p className="text-lg text-primary mb-2">CIBC</p>
                <p className="text-muted-foreground mb-4">Toronto, Ontario, Canada</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed and optimized data pipelines for marketing analytics and customer insights.</li>
                  <li>Collaborated with marketing teams to provide data-driven solutions for customer segmentation.</li>
                  <li>Improved reporting processes through automation, enhancing the accuracy and speed of insights.</li>
                </ul>
              </div>

              {/* Ripple */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Program Manager</h3>
                  <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                    May 2023 - Jan 2024
                  </Badge>
                </div>
                <p className="text-lg text-primary mb-2">Ripple</p>
                <p className="text-muted-foreground mb-4">Toronto, Ontario, Canada</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built partnerships within the XRPL community, organizing events to drive growth and engagement.</li>
                  <li>Created and managed program plans, focusing on students hackathons, residencies, and grants.</li>
                  <li>Tracked and analyzed program data, improving decisions and program results.</li>
                </ul>
              </div>

              {/* More roles collapsed for brevity */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">Previous Roles</h3>
                  <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                    2022 - 2023
                  </Badge>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Data Science Analyst at Loadlink Technologies (Sep 2023 - Dec 2023)</li>
                  <li>Systems Engineer at Veeam Software (May 2023 - Sep 2023)</li>
                  <li>Data Scientist at Scotiabank (Jan 2023 - April 2023)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Toronto Metropolitan University</h3>
                <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                  2019 - 2024
                </Badge>
              </div>
              <p className="text-lg text-primary mb-2">Bachelor of Commerce</p>
              <p className="text-muted-foreground mb-4">Global Management and Computer Science</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Graduated with Honors</li>
                <li>GPA: 3.8/4.0</li>
                <li>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>R</Badge>
                  <Badge>Java</Badge>
                  <Badge>SQL</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>VBA</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Redux-Saga</Badge>
                  <Badge>React Native</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>Scikit-learn</Badge>
                  <Badge>TensorFlow</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Azure</Badge>
                  <Badge>GCP</Badge>
                  <Badge>Docker</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Snowflake</Badge>
                  <Badge>Databricks</Badge>
                  <Badge>Datadog</Badge>
                  <Badge>Jira</Badge>
                  <Badge>Confluence</Badge>
                  <Badge>ServiceNow</Badge>
                  <Badge>Git</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>BitBucket</Badge>
                  <Badge>Terraform</Badge>
                  <Badge>DynamoDB</Badge>
                  <Badge>RDS Postgres</Badge>
                  <Badge>Lambda</Badge>
                  <Badge>EC2</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Data & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Power BI</Badge>
                  <Badge>Power Query</Badge>
                  <Badge>Tableau</Badge>
                  <Badge>Looker</Badge>
                  <Badge>Alteryx</Badge>
                  <Badge>Data Analysis</Badge>
                  <Badge>Visualization</Badge>
                  <Badge>Predictive Analytics</Badge>
                  <Badge>Statistical Modeling</Badge>
                  <Badge>A/B Testing</Badge>
                  <Badge>Salesforce</Badge>
                  <Badge>Excel</Badge>
                  <Badge>PowerPoint</Badge>
                  <Badge>Word</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Mining</Badge>
                  <Badge>Feature Engineering</Badge>
                  <Badge>Model Optimization</Badge>
                  <Badge>Natural Language Processing</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>UI/UX Design</Badge>
                  <Badge>Agile/Scrum</Badge>
                  <Badge>Project Management</Badge>
                  <Badge>Data Analysis</Badge>
                  <Badge>Problem Solving</Badge>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <ExternalLink className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">AWS Certified Developer - Associate</h3>
                  <p className="text-muted-foreground">Amazon Web Services, 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Professional Scrum Master I (PSM I)</h3>
                  <p className="text-muted-foreground">Scrum.org, 2022</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Google Data Analytics Professional Certificate</h3>
                  <p className="text-muted-foreground">Google, 2022</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
