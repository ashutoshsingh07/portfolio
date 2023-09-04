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
        link: "https://drive.google.com/file/d/1qtdlR1f0mWRtQIuKcLU30qc6TsR5yPOM/view?usp=drivesdk",
    },
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEUAVtL///8AU9EAUdEAS9AASNAAStAAV9IAQs8ATtAARs8AT9EAMc60weyToOPr7PjEyu4AQc/f5vigrueXrefP2vT4+/6esuiDm+Ll6fgqW9Ty9fwAO87v8/taftrIze89ZNVEYdVMdNmPpeSuuup0jd7V3PRog9xCaNZ5leDL0/FScNhQe9q3v+qhq+aHoeNhetpjh914j99Aa9YpX9RXbdcAN840ZNVegtzJy+5DXNSa2e64AAAG90lEQVR4nO2YaXuiOhiGIRAkMLZCKypo3TdsR2s70zP+/x92QhZWe7V4zadznvuLkuXN+2R9E8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/hvxVY1bpb3vLpep/B+LZ8Ww3tzy7kUHJZR7bnl+keW4Gy7+Z+PY6+o9h+F68eBKyLNefL54Xc+bVVHKLl/mFUFpKEtVpubr0TJfzRQHfaA8JnrqjKDKjSX9JvFKGFZy6YcIzRr2zo8WzVY8zPeuWrPM0S3gJ/L34s/Ld9SYyNy437G6nk8jk3HcXQcmwFy9TnhEl4WDnart3WfXpA3PPvHrfEYnugnsmysUO2YoC6/YzwjuNzIIVyyeI91TKiJZqGDyZ+OBozx7E9/0PeyD+jMZp9jOghr8LS4ZTkvcJ65bTY5lOZWJ/3M9+fmZzhM36RbnjWBa4az2BK81lUk5ytAjrVTPCnXDFC2sKH6sKQyHQfLX8U83ws5zZbBFVM15pSWHaV9V5S/tKseHmNoXOxqyzFhLtsJFxyFykXyhUzA2rJsSM3rJZwF4bdodOoVAVnRHDW9br36KwE/TNJls+WF5TuRntyNdjqIq6dNWon/A6ZHelwSerpnDiG/b+SsH2CulD4VNS2LfK7UXFWIzs7yncdB89ZyL/T8/bpawSbnkHBfnaDtPNREv3Kwo33SUjs0JUZTK0U0g+tI3BzqbkVY5bNyZkoTO6B97ty3v1+ci+oXDzPubHzlx+9H5bhI1/8t5Zu9w3NtSWjHEw9k5qpqxooTAV1d1UWzvPSbwt9oR2Ch01k0Yzsdh9l0/9zYIfGHSqM8QOauvtKGJfr8NQbrpK4Ys4JbzVnS33KdlX0Yk30ukYlqdct3OFoTxW9BAexQFouVs9xdop9GW1JA8hvOWeZv7F0lpi64xAeXImX47hWu7+sZpbDzTgQQ2TiXpunHVtYkvJe0srPBHZJfJrqc9npmdVK4XkqeKTMCTqk7NqrbBGZWekwVdjmMQy3c334nT45jjSkiPXfcjeYwlRO0HPVQoTKcmVy7Xv5g54jzco9O/klBnXM1Rro1IcYquDffz5GMo/IxX8+GezYLR6pplnelLyOCVHaqaqzVBqUpPoXIrR7BsU2uqQdesZapmvSmGqpcbb/nwMlUKd4U7NMuGTd/X0lUyYjmlkpPpLdsS8cKDzO2yvkMoe7dFaemcsHflZhNcGeZOuWF8qzK15tWiJB3JXwgil0KooVOs1Katx+zeMoVzO/aCeocaw+60xzOPS2hhyMye95Use7U/HMKmOITnIMYzL3X7DGFpyHZqNWeq0WIeqmxrrUDTg7pb90nkdq3XY3Q81R8m+OobGXFZ4KsnxzPYKybOqVExTeZEj60YDVMYf+V660nWCzecKDX7aO9Z2pUUuXVlmM2Y5NrM5vlFVqJqbFp1P725QaDAVNr3pLSt4CQ9ZE83zUK2pNXGlolArtMzPFBI622eliDNWp1saHJSZUjd05K2sqjA/f3VBfxfdolAf0skpi6gMW8y4rmHrPSiPaewX+R3ZedtbJwtK8s+mQvrOff4lv4KJGjt1SqqYpsMjgXQyY02F+qg2z8Iz4j7rGLZl5P2u509vG3d2R3nMJnd6pXNXVgfiz446XF4ygx1VztrlkWWspDcUEjKIRKnAY3Yw02NobVX5QRzw6v6ehzTRljYUGoHeddMtccii2JZbKrTvzCskHYMWF4XS3SLMvI/1132abvK8hkLd56Pu42MvyjsoyLfXME1Dlf7oNxSS0v05Kl8u2t6Ag9pFXnDgRtxr98OPbMoGaTOnqdCu318zss3fur+S8dFQWL7YVWh9x6dNiSexLq7d8eWG9FFNja4qNGizIwaZ99Zs0sj4pzmG/HR4aZS7SaFRfXzgHu5UJGPXQpLwQ+24rBxxmkn9xNc7jVN/PujJHCuuZSQL8TpSV2ioo0WzuukVQ3T2W2lCRkuav9Zdf2vLfN8W7wGjWPox0Qrv81DPGxbFuIFh7ru7Lw/jSsTkWuGmFELSQ2keHX+ktyo0SHBYbZIoSka9vWNXMp66YcIX+v20muGzgdgkos3Q889/xHupa63Fn1XhAaPr3ijJXmJH06FdCnJ9b9275waiSf9oKEnsTlR/KBXTL7lREj7ENtlmBf7c8F6aWaKUXC5G5WlbZmRPzvMLa2Q4zuWweIsp94cF+s07UG/eBZbrkMtsHjOXVetbHrvsslf2Ij1/8645wOsb8s07sx/c8uZ9I4So3uxkVP5810D1+8vqLe0DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiP8C8YlH/AHqaNNwAAAABJRU5ErkJggg==",
        description: "Python Data Structures certificate of completion from coursera.",
        link: "https://drive.google.com/file/d/14-_e6s9FiRPOxNT-Mrbg4Fis-McYCLNy/view?usp=drivesdk",
    }
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
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