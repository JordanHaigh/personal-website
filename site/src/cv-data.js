// Public CV based on the NGM Starter profile. Keep client/employer names
// and detailed commercial metrics out of these descriptions.
export const experience = [
  {
    role: "Technical Lead & Senior Software Developer",
    context: "Cloud-native transformation · Financial administration",
    start: "2025-08", end: "2026-09", dates: ["Aug 2025", "Sep 2026"],
    points: [
      "Led a small team of senior developers, owning technical design, delivery planning, task decomposition and pull-request reviews.",
      "Designed a serverless foundation in C# and .NET on AWS, using event messaging, event sourcing and CQRS.",
      "Improved the system structure and development workflow so engineers could deliver work in parallel.",
      "Worked directly with client stakeholders through requirements workshops, design approvals and demonstrations.",
    ],
    technology: "C# · .NET · .NET Aspire · AWS Lambda, S3, RDS, SQS & DynamoDB · Terraform · Open Policy Agent",
    note: "The programme concluded before production release; production outcomes were not measured.",
  },
  {
    role: "Senior Software Developer",
    context: "Insurance processing automation",
    start: "2025-05", end: "2025-07", dates: ["May 2025", "Jul 2025"],
    points: [
      "Investigated processing failures and data-quality edge cases, improving logging and reducing the need for manual intervention.",
      "Developed an automated test framework and expanded unit-test coverage for insurance processing workflows.",
      "Supported development, testing, production releases and post-release support.",
    ],
    technology: "C# · .NET · Angular · AWS ECS, S3 & RDS · RabbitMQ · MySQL",
  },
  {
    role: "Full-Stack Software Developer",
    context: "Multi-tenant enterprise SaaS",
    start: "2023-04", end: "2025-05", dates: ["Apr 2023", "May 2025"],
    points: [
      "Built and maintained product features across the front end and back end, alongside technical-debt reduction and usability improvements.",
      "Delivered dynamic and scheduled reporting, custom fields, query search and event-data visualisation.",
      "Worked in focused delivery teams, documented technical decisions and mentored junior developers on a product serving Australia and North America.",
      "Supported product delivery across Azure App Service, Blob Storage, SQL Database, Redis, Front Door, Key Vault and Service Bus.",
    ],
    technology: "C# · .NET · React · Angular · TypeScript · GraphQL · SQL · Azure · AWS",
  },
  {
    role: "Software Developer",
    context: "Rail & geospatial data platforms",
    start: "2019-12", end: "2023-04", dates: ["Dec 2019", "Apr 2023"],
    points: [
      "Built the primary data-processing pipeline and an authenticated uploader for LiDAR, imagery, video and geospatial datasets.",
      "Created the initial React and Google Maps visualisation for exploring rail-network data geographically.",
      "Developed web tools for route inspection, asset management and train-clearance assessment, including map visualisations and synchronised train-location video.",
      "Contributed to production platforms used by rail customers in Australia, the United States and the United Kingdom.",
    ],
    technology: "C# · .NET · React · WPF · Java · Python · AWS · Azure DevOps · MongoDB",
  },
  {
    role: "Technical Officer",
    context: "Aviation & geospatial technology",
    start: "2018-07", end: "2019-12", dates: ["Jul 2018", "Dec 2019"],
    points: [
      "Processed LiDAR survey data and calibrated coordinate offsets and sensor drift for internal teams and external surveyors.",
      "Resolved defects in C# and WPF tools and wrote onboarding documentation and release-testing guidance.",
      "Progressed from a casual technical role to a full-time junior software development role.",
    ],
    technology: "C# · WPF · Git · LiDAR processing",
  },
  {
    role: "Lab Demonstrator",
    context: "Higher education · Introduction to Procedural Programming",
    start: "2017-02", end: "2019-02", dates: ["Feb 2017", "Feb 2019"],
    points: [
      "Guided students through programming labs covering variables, conditions, loops, functions, arrays and file handling.",
      "Helped individuals and groups troubleshoot code, and marked assignments and practical exams with constructive feedback.",
    ],
    technology: "C · MATLAB · Visual Studio",
  },
];

export const cv = {
  "name": "Jordan Haigh",
  "title": "Technical Lead / Senior Engineer",
  "profile": [
    "I'm a hands-on technical lead and full-stack engineer with experience across financial services, SaaS and geospatial data platforms. I work across architecture and implementation, with a focus on maintainable, testable software in C#, .NET, React and cloud environments.",
    "I lead small engineering teams, turn requirements into deliverable work, review code and work directly with stakeholders. My experience spans cloud-native services, APIs, automated testing and data-processing pipelines."
  ],
  "skills": [
    {
      "label": "Languages & frameworks",
      "description": "C#, .NET, React, Angular, TypeScript, JavaScript, Java, Spring Boot, Python, GraphQL"
    },
    {
      "label": "Cloud",
      "description": "AWS: Lambda, ECS, S3, RDS, SQS, DynamoDB. Azure. Terraform."
    },
    {
      "label": "Data",
      "description": "SQL Server, MySQL, PostgreSQL, MongoDB, Redis"
    },
    {
      "label": "Engineering",
      "description": "API design, event-driven systems, CQRS, automated testing, test-driven development, CI/CD, data engineering"
    },
    {
      "label": "Leadership & management",
      "description": "Team leadership, delivery planning, stakeholder collaboration, mentoring, architecture ownership, technical communication"
    }
  ],
  "industries": "Financial services & insurance, financial administration, enterprise SaaS, rail & geospatial data, aviation technology, higher education.",
  "contacts": [
    {
      "label": "jordan@jordanhaigh.dev",
      "url": "mailto:jordan@jordanhaigh.dev"
    },
    {
      "label": "linkedin.com/in/jordanhaigh",
      "url": "https://www.linkedin.com/in/jordanhaigh/"
    },
    {
      "label": "github.com/JordanHaigh",
      "url": "https://github.com/JordanHaigh"
    },
    {
      "label": "jordanhaigh.dev",
      "url": "https://jordanhaigh.dev/"
    }
  ],
  "education": {
    "qualification": "Bachelor of Computer Science with Distinction",
    "specialisation": "Computer Systems and Robotics",
    "institution": "University of Newcastle",
    "dates": "2016–2019"
  },
  "anonymityNote": "Client and employer names are omitted; roles are described by industry and project."
};
