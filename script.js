 const form = document.getElementById("chat-form");
            const input = document.getElementById("user-input");
            const chatBox = document.getElementById("chat-box");

const yamkela = {
  name: "Yamkela Lusithi",
  email: "lusithiyamkela@gmail.com",
  phone: "+27 66 543 0254",
  location: "Braamfontein, Johannesburg, Gauteng, South Africa",
  title: "Full Stack Web Developer & Cybersecurity Enthusiast",
  github: "https://github.com/Yamkela4458",
  linkedin: "https://www.linkedin.com/in/yamkela-lusithi-8793912a4",
  education: [
    "Artificial Intelligence in the 4IR – B.Ed(Hons), University of Johannesburg (2025)",
    "Bachelor of Education – Walter Sisulu University (2024)"
  ],
  certifications: [
    "Full Stack Web Development – FNB App Academy",
    "AWS Cloud Practitioner – Amazon Web Services",
    "Basics of Data Visualization Using Python – UniAthena",
    "Python Web Development – Udemy",
    "CompTIA A+ (Core 2) – Coursera"
  ],
  skills: [
    "HTML5", "CSS3", "JavaScript", "PHP", "Python",
    "Bootstrap", "Tailwind CSS", "React.js",
    "WordPress", "WIX", "Git", "GitHub", "VS Code",
    "UI/UX", "Canva", "Chrome DevTools"
  ],
  projects: [
    {
      name: "Academic Research Website",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "A responsive and accessible website offering over 50+ academic resources, improving research efficiency by 70%."
    },
    {
      name: "Cybersecurity Blog",
      tech: ["Wix"],
      desc: "An educational site teaching online safety, privacy, and ethical hacking to the public with secure forms and SEO optimization."
    }
  ],
  experience: [
    "Freelance Web Developer – built a live academic research platform from scratch.",
    "Cybersecurity Job Simulations (Mastercard, TATA Consultancy) – handled phishing threats, SIEM tools, and created risk reports."
  ]
};

function getBotReply(userInput) {
  const input = userInput.toLowerCase();

  // Greetings and fun
  if (["hi", "hello", "yo", "hey"].some(word => input.includes(word)))
    return "Hey there! 👋 Ready to geek out about Web Dev?";
  if (input.includes("How are you", "How", "are", "you?"))
    return "I'm doing wonderful😊 . What about you?";
  if (input.includes("joke"))
    return "Why don't skeletons fight each other? Because they don't have the guts! 💀😂";

  // Info replies
  if (input.includes("name")) return `I'm ${yamkela.name}, nice to meet you!`;
  if (input.includes("email")) return `Sure! You can reach me at: ${yamkela.email}`;
  if (input.includes("phone") || input.includes("contact")) return `📞 Here's my number: ${yamkela.phone}`;
  if (input.includes("location") || input.includes("where")) return `I’m based in beautiful ${yamkela.location}`;
  if (input.includes("github")) return `Here's my GitHub: ${yamkela.github}`;
  if (input.includes("linkedin")) return `LinkedIn? Of course! ${yamkela.linkedin}`;
  if (input.includes("title") || input.includes("who are you"))
    return `I'm ${yamkela.title} – building the web, one tag at a time!`;

  // Skills, education, experience
  if (input.includes("skills")) return `These are my tech superpowers:\n- ${yamkela.skills.join("\n- ")}`;
  if (input.includes("education") || input.includes("study"))
    return `Here's my educational journey:\n- ${yamkela.certifications.join("\n- ")}`;
  if (input.includes("certifications") || input.includes("course"))
    return `I've completed:\n- ${yamkela.certifications.join("\n- ")}`;
  if (input.includes("experience") || input.includes("worked"))
    return yamkela.experience.map(e => `• ${e}`).join("\n");

  // Projects
  if (input.includes("projects")) {
    return yamkela.projects.map(p => `📁 ${p.name}:\n${p.desc}`).join("\n\n");
  }

  // Unknown input fallback
  return "Hmm... I didn’t catch that. Try asking about my projects, skills, experience, or ask me for a joke! 😄";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage("user", userInput);
  const response = getBotReply(userInput);
  setTimeout(() => addMessage("bot", response), 400);
  input.value = "";
});

function addMessage(sender, message) {
  const msg = document.createElement("p");
  msg.className = sender;
  msg.textContent = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
            }
            
            
            tablink.classList.remove("active-link");


