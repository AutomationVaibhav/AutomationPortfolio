import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Clock, Smartphone, ServerCog, Gauge, Database, Github, ExternalLink, Book, Play, FileText, BarChart } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Test Framework",
      description: "Comprehensive automation framework for e-commerce platform testing with 300+ test cases covering user journeys, payment processing, and inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Selenium", "Java"],
      metric: "95% Coverage",
      icon: <BarChart3 className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <ExternalLink className="h-4 w-4" />, href: "#", label: "Live Demo" }
      ]
    },
    {
      title: "REST API Testing Suite",
      description: "Automated API testing suite with comprehensive validation for REST endpoints, including authentication, data validation, and performance testing.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Postman", "Newman"],
      metric: "50% Faster Testing",
      icon: <Clock className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <Book className="h-4 w-4" />, href: "#", label: "Documentation" }
      ]
    },
    {
      title: "Mobile App Testing",
      description: "Cross-platform mobile testing framework supporting iOS and Android applications with device farm integration and parallel execution capabilities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Appium", "Python"],
      metric: "Multi-Platform",
      icon: <Smartphone className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <Play className="h-4 w-4" />, href: "#", label: "Demo Video" }
      ]
    },
    {
      title: "CI/CD Test Integration",
      description: "Integrated testing pipeline with automated test execution, reporting, and deployment validation across multiple environments.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Jenkins", "Docker"],
      metric: "Auto Deploy",
      icon: <ServerCog className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <FileText className="h-4 w-4" />, href: "#", label: "Architecture" }
      ]
    },
    {
      title: "Performance Testing",
      description: "Comprehensive performance testing suite with load testing, stress testing, and monitoring capabilities for web applications.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["JMeter", "K6"],
      metric: "Load Testing",
      icon: <Gauge className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <BarChart className="h-4 w-4" />, href: "#", label: "Results" }
      ]
    },
    {
      title: "Test Data Management",
      description: "Automated test data generation and management system with data masking, synthetic data creation, and environment provisioning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["SQL", "Faker"],
      metric: "Data Gen",
      icon: <Database className="h-4 w-4" />,
      links: [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
        { icon: <FileText className="h-4 w-4" />, href: "#", label: "Documentation" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Showcasing automation testing frameworks and quality assurance solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    {project.icon}
                    <span className="ml-2">{project.metric}</span>
                  </div>
                  <div className="flex space-x-2">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-primary hover:text-blue-700 p-2"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                          {link.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary text-white hover:bg-blue-700">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              View All Projects
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
