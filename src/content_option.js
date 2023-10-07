const logotext = "ASHUTOSH";
const meta = {
    title: "Ashutosh Singh",
    description: "I’m Ashutosh Singh_ Web devloper,Aiml enthusiast,currently based in Bangalore",
};

const introdata = {
    title: "I’m Ashutosh Singh",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I am also a part-time competitive coder",
    },
    description: "I'm a passionate  web developer and competitive programmer with a deep love for problem solving and coding.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hello, I'm a final year engineering student pursuing a degree in Information Science and Engineering. I have a deep passion for coding and a knack for creative problem-solving. Throughout my academic journey, I've dedicated myself to mastering the art of software development and honing my problem-solving skills."

   
};
const worktimeline= [{
        jobtitle: "High School(10th std)",
        where: "Children College,Azamgarh",
        date: "2017",
    },
    {
        jobtitle: "Intermediate(12th std.)",
        where: "Hope Hall Foundation School,New Delhi",
        date: "2019",
    },
    {
        jobtitle: "Bachelor of Engineering(ongoing)",
        where: "RNS Institute of technology,Bengaluru",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "C++",
        value: 95,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Java",
        value: 85,
    },
];

const services = [{
        title: "Website Development",
        description: "Harness the power of cutting-edge technology to bring your online vision to life. Our web development services are driven by innovation and expertise, ensuring that your digital presence stands out in today's competitive landscape. From elegant design to seamless functionality, we create websites that leave a lasting impression on your audience. Let us transform your ideas into a dynamic and user-friendly web experience..",
    }
    // {
    //     title: "Mobile Apps",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
    // {
    //     title: "Wordpress Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
];

const dataportfolio = [{
        img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
        description: "I've leveraged the capabilities of React to build a responsive and interactive user interface that closely resembles the Netflix browsing experience. .",
        link: "https://netflix-clone-2d02f.web.app/",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsmhvXuafZoAjKUcFjADYmDUJRwFN9tBaKA&usqp=CAU",
        description: " I'm thrilled to showcase an engaging and interactive Android game developed using Android Studio and the Java programming language—2048. .",
        link: "#",
    },
    {
        img: "data:image/png;base64,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",
        description: "Programming for everybody(python) certificate of completion from Coursera.",
        link: "https://www.coursera.org/account/accomplishments/verify/EDAL4APRBFZD",
    },
    {
        img: "data:image/png;base64,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",
        description: "Python Data Structures certificate of completion from coursera.",
        link: "https://www.coursera.org/account/accomplishments/verify/6C5TDGLY27JQ",
    },
    {
         img: "data:image/jpeg;base64,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",
        description: "Machine Learning With Python(Research Based)",
        link: "https://v.certiefy.com/S0VZR0VOMuKLhRleGfm5QBb7iV1xpXshrsul7rX_35PbO3m9PjQ3h676W3gZ9KDQAGNtmi18V2q1yhyq2v60coGV2jsZp751gV9la2yZeFaoGfk9CRMudO9Jo00PJHDQiE2LZBkuw5QWrj1mr99h2WG1QbpIzrFiPtB70WHChgxYivgntxQzF0ZimCbcg4k7jmjABBNSVmpBbzjJgapPzPqvpJW88aFfBGz4DoNdh9rln8ictuqEQcA_ZQ9N0qAOR0DiRnX7T-DyRQcrbgcmazqRSTV0WWKzde5FxrCiuAzwoWGxhkpsBSJlUHS-DK9CMRbIxH2xlwStquKLhQqYYeuDyUumpCJ-Otr1rYC51pE4uQkB-H9HBFRWctrf",
     },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "singh.ashutoshdec@gmail.com",
    YOUR_FONE: "9958377829",
    description: " To get in touch with me or you have any queries regarding the services,please contact on the details mentioned above. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/",
   // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/ashutosh-singh-011428204/",
   // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};