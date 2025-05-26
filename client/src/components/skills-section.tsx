import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Testing Frameworks",
      skills: [
        { name: "Selenium WebDriver", level: 95 },
        { name: "Cypress", level: 90 },
        { name: "Playwright", level: 85 },
        { name: "TestNG", level: 88 }
      ],
      color: "bg-primary"
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 }
      ],
      color: "bg-green-500"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Git", level: 95 }
      ],
      color: "bg-purple-600"
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "TDD/BDD", level: 88 },
        { name: "CI/CD", level: 90 },
        { name: "API Testing", level: 92 }
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">
            Comprehensive expertise across testing tools, frameworks, and methodologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
