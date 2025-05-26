import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Testing Frameworks",
      skills: [
        "Selenium WebDriver",
        "Cypress",
        "Playwright"
      ],
      color: "bg-primary"
    },
    {
      title: "Programming",
      skills: [
        "Java",
        "Python"
      ],
      color: "bg-green-500"
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Jenkins",
        "Docker",
        "Git"
      ],
      color: "bg-purple-600"
    },
    {
      title: "Methodologies",
      skills: [
        "Agile/Scrum",
        "CI/CD",
        "API Testing"
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
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${category.color} rounded-full`}></div>
                    <span className="text-gray-700 text-sm font-medium">{skill}</span>
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
