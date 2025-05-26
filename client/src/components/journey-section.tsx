import { Card, CardContent } from "@/components/ui/card";

export default function JourneySection() {
  const timelineItems = [
    {
      period: "Feb 2025 - Present",
      title: "Automation Test Engineer",
      company: "Insurity",
      achievements: [
        "Designed and developed automated test cases for complex insurance workflows",
        "Automated key user journeys including quote generation, policy creation, endorsements, renewals, and claims processing",
        "Built robust test scripts using Selenium with Java following Page Object Model architecture",
        "Implemented automatic rerun logic for flaky tests improving overall test reliability",
        "Added support for automatic subsequent scenario failure skipping, reducing cascading failure noise",
        "Integrated AI-based failure analysis with lightweight log parsing module",
        "Built intelligent failure classification system for environment issues, locator failures, and service timeouts",
        "Performed comprehensive end-to-end UI testing ensuring seamless user experience"
      ],
      color: "border-green-500",
      dotColor: "bg-green-500",
      position: "right"
    },
    {
      period: "July 2022 - Feb 2025",
      title: "Automation Test Engineer",
      company: "GlobalLogic",
      achievements: [
        "Developed and maintained automated test scripts using Selenium, TestNG, and Cypress",
        "Applied Page Object Model structure for reusable and organized code architecture",
        "Executed test suites through Jenkins CI/CD and analyzed failures with detailed reporting",
        "Conducted comprehensive regression testing ensuring core feature stability",
        "Converted manual test cases into automated scripts improving testing efficiency",
        "Contributed to framework enhancements with utility functions and features",
        "Maintained test execution reports and provided status updates during daily stand-ups",
        "Reported bugs with clear logs and screenshots in PPM for efficient resolution"
      ],
      color: "border-primary",
      dotColor: "bg-primary",
      position: "left"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Career Journey</h2>
          <p className="text-lg text-gray-600">
            My professional evolution in automation testing and quality assurance
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {item.position === "right" ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <Card className={`bg-white shadow-sm border-l-4 ${item.color}`}>
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-medium mb-1">{item.period}</div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-3">{item.company}</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>• {achievement}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.dotColor} rounded-full border-4 border-white shadow z-10`}></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.dotColor} rounded-full border-4 border-white shadow z-10`}></div>
                    <div className="flex-1 pl-8">
                      <Card className={`bg-white shadow-sm border-l-4 ${item.color}`}>
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-medium mb-1">{item.period}</div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-3">{item.company}</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>• {achievement}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
