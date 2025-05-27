import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send to a backend API
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "corporatevaibhav24@gmail.com",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "8010416933",
      bgColor: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/vaibhav-bhatt-b361001a5/",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      label: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
          If you find my profile suitable, I’d love to connect and discuss automation testing opportunities
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Get In Touch</h3>
          <div className="flex flex-col gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center shadow`}>
                  <div className={info.iconColor}>{info.icon}</div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">{info.value}</p>
                  <p className="text-sm text-gray-600">{info.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  size="icon"
                  asChild
                  className={`w-14 h-14 text-white rounded-full shadow-lg transition-transform duration-200 hover:scale-110 ${link.bgColor}`}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
