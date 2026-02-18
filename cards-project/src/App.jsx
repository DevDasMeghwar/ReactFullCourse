import Card from "./components/cards";

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandLogo:
        "https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-1306063.png?f=webp&w=512",
      companyName: "Amazon",
      postedAgo: "5 days ago",
      post: "Senior UI/UX Designer",
      tag: "Full Time",
      tag2: "Senior Level",
      payPerHour: 120,
      location: { state: "California", country: "USA" },
    },
    {
      id: 2,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_(2012).svg",
      companyName: "Microsoft",
      postedAgo: "10 days ago",
      post: "Frontend React Developer",
      tag: "Full Time",
      tag2: "Mid Level",
      payPerHour: 95,
      location: { state: "Washington", country: "USA" },
    },
    {
      id: 3,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      postedAgo: "2 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      payPerHour: 85,
      location: { state: "California", country: "USA" },
    },
    {
      id: 4,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      postedAgo: "1 week ago",
      post: "iOS Application Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      payPerHour: 130,
      location: { state: "Texas", country: "USA" },
    },
    {
      id: 5,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      postedAgo: "3 days ago",
      post: "Backend Node.js Engineer",
      tag: "Part Time",
      tag2: "Senior Level",
      payPerHour: 110,
      location: { state: "California", country: "USA" },
    },
    {
      id: 6,
      brandLogo:
        "https://cdn.iconscout.com/icon/free/png-512/free-meta-icon-svg-download-png-10919038.png?f=webp&w=512",
      companyName: "Meta",
      postedAgo: "8 days ago",
      post: "AR/VR Software Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      payPerHour: 105,
      location: { state: "New York", country: "USA" },
    },
    {
      id: 7,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      postedAgo: "2 weeks ago",
      post: "Cloud Solutions Architect",
      tag: "Full Time",
      tag2: "Senior Level",
      payPerHour: 90,
      location: { state: "Ontario", country: "Canada" },
    },
    {
      id: 8,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      postedAgo: "6 days ago",
      post: "Database Performance Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      payPerHour: 88,
      location: { state: "Texas", country: "USA" },
    },
    {
      id: 9,
      brandLogo:
        " https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo-768x505.png",
      companyName: "Salesforce",
      postedAgo: "4 days ago",
      post: "CRM Platform Developer",
      tag: "Part Time",
      tag2: "Junior Level",
      payPerHour: 75,
      location: { state: "Dublin", country: "Ireland" },
    },
    {
      id: 10,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      postedAgo: "9 days ago",
      post: "AI & Automation Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      payPerHour: 140,
      location: { state: "Berlin", country: "Germany" },
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((ele, idx) => {
        return (
          <div key={idx}>
            <Card arr={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
