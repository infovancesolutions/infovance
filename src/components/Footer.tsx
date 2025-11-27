import React from "react"; 
import { Clock, Mail, Phone } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#051439] text-white m-0 p-0">
      <div className="w-full py-12 space-y-8 px-4">
        
        {/* ---------------- ROW 1: 4 COLUMNS LAYOUT ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 ">
          {/* Column 1: Logo with Paragraph */}
          <ScrollAnimation delay={100}>
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/Info.png"
                alt="Infovance Logo"
                className="h-24 object-contain"
              />
              <p className="text-gray-300 text-sm leading-snug text-left">
                Empowering businesses through innovation, strategy, and technology delivering transformative digital experiences that inspire growth and long-term impact worldwide.
              </p>
            </div>
          </ScrollAnimation>

          {/* Column 2: Courses Section */}
          <ScrollAnimation delay={150}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500 text-left">Trainings</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/trainings/full-stack-development" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link to="/trainings/ai-ml" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/trainings/data-analytics" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Data Analytics and Power BI
                  </Link>
                </li>
                <li>
                  <Link to="/trainings/cloud-devops" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Cloud Computing & DevOps
                  </Link>
                </li>
                 <li>
                  <Link to="/trainings" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    ...more 
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Column 3: Company Section */}
          <ScrollAnimation delay={200}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500 text-left">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/about-infovance" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    About Infovance
                  </Link>
                </li>
                <li>
                  <Link to="/innovation" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Innovations
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/connect" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span>
                    Connect
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Column 4: Contact Section */}
          <ScrollAnimation delay={250}>
            <div className="text-left px-4 -ml-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 text-left ">Get In Touch</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed text-left">
                Have questions about our DevOps or AWS courses? Reach out to our support team for assistance.
              </p>
              
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-gray-300 text-sm">Email Us</p>
                    <a 
                      href="mailto:contact@infovance.com" 
                      className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
                    >
                      info@infovancesolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a 
                      href="tel:+447544476666" 
                      className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
                    >
                      +44 7544 476666
                    </a>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex  items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500"/>
                  <div>
                  <p className="text-gray-300 text-sm font-semibold">Support Hours</p>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9AM - 6PM</p>
                </div></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* ---------------- ROW 2: BOTTOM SECTION ---------------- */}
        <div className="border-t border-gray-400 pt-8 mt-6">
          {/* First Row: Copyright, Policies, Payment Methods */}
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-200 text-sm gap-4 mb-4">
            {/* Left: Copyright */}
            <div className="text-center md:text-left ">
              © 2024 Infovance. All rights reserved.
            </div>

            {/* Middle: Policy Links */}
            <div className="flex justify-center space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
            </div>

            {/* Right: Payment Methods */}
            <div className="flex items-center space-x-4 px-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 font-semibold text-sm">VISA</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300 font-semibold text-sm">M/C</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300 font-semibold text-sm">P.P</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300 font-semibold text-sm">URL</span>
              </div>
            </div>
          </div>

          {/* Second Row: Company Description - Centered */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm max-w-6xl mx-auto">
              Infovance is a modern training and project-enablement company delivering high-quality courses in technologies. We help learners build real-world skills while also supporting businesses with end-to-end project development and technical solutions. All trademarks and logos belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;