import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1cekKMIiWojBoWvjx9YZiO7WtSGl5CS-6/view?usp=sharing"; // Google Drive shareable link
    link.download = "Vaibhav_Bhatt_Resume2025.docx"; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Software Development Engineer In Test
              <span className="block text-primary">Building Quality at Scale</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating robust test automation frameworks and ensuring software quality through innovative testing strategies. Currently at Insurity as SDET developing AI-powered failure analysis systems and insurance workflow automation with 3 years of comprehensive automation testing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://automatenow.io/wp-content/uploads/2024/01/jenkins-test-automation.webp"
                alt="Vaibhav Bhatt - Software Development Engineer In Test"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-float">
                <i className="fas fa-robot text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
