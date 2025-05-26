import { Card, CardContent } from "@/components/ui/card";

export default function JourneySection() {
  const timelineItems = [
    {
      period: "2022 - Present",
      title: "Senior Automation Test Engineer",
      company: "TechCorp Solutions",
      achievements: [
        "Led automation strategy for 3 major product lines",
        "Implemented CI/CD pipelines reducing release time by 60%",
        "Mentored team of 5 junior automation engineers"
      ],
      color: "border-primary",
      dotColor: "bg-primary",
      position: "right"
    },
    {
      period: "2020 - 2022",
      title: "Automation Test Engineer",
      company: "InnovateIT Inc.",
      achievements: [
        "Developed comprehensive test automation framework",
        "Achieved 95% test coverage for web applications",
        "Integrated automated testing with Jenkins CI/CD"
      ],
      color: "border-green-500",
      dotColor: "bg-green-500",
      position: "left"
    },
    {
      period: "2019 - 2020",
      title: "QA Engineer",
      company: "StartupXYZ",
      achievements: [
        "Transitioned from manual to automation testing",
        "Created test cases and documentation standards",
        "Collaborated with dev team on testing best practices"
      ],
      color: "border-purple-600",
      dotColor: "bg-purple-600",
      position: "right"
    },
    {
      period: "2018 - 2019",
      title: "Junior QA Analyst",
      company: "Digital Solutions Ltd.",
      achievements: [
        "Performed manual testing for web applications",
        "Learned automation testing fundamentals",
        "Participated in agile development processes"
      ],
      color: "border-orange-500",
      dotColor: "bg-orange-500",
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
