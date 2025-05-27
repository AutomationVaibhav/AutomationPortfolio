import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web-UI Automation",
      description: "Selenium with Java,Playwright and Cypress. Specialized in insurance workflow automation including policy creation, Endorsements, and renewal workflows.",
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-primary"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "AI-Powered Testing",
      description: "Developed intelligent failure analysis systems with automatic log parsing and classification. Implemented smart test reliability features reducing cascading failures.",
      gradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Innovation Focus",
      description: "Built automatic rerun logic for flaky tests and intelligent failure classification systems for environment issues, locator failures, and service timeouts.",
      gradient: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated SDET with a passion for quality assurance and continuous improvement in software development processes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className={`bg-gradient-to-br ${highlight.gradient} border-0 hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${highlight.iconBg} text-white rounded-lg flex items-center justify-center mb-6`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
