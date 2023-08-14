const projects = [
    {
        title: ".HACK to .ASM Converter",
        description: "A Python program used to convert files from assembly language to HACK programming language and vice versa. This emulates the role of the assembler.",
        link: "https://github.com/nathan20cain/HACK2ASM"
    },
    {
        title: "Personal Webpage",
        description: "A simple webpage personal webpage to showcase myself using HTML, CSS, and JavaScript.",
        link: "http://people.tamu.edu/~nathan20cain/"
    },
    {
        title: "Zombie Text Game with Real-Time AI Image Generation",
        description: "An exciting text-based narrative based in Python with AI Image Generation provided to immerse the player.",
        link: "https://github.com/baddestsupercec/Textgame"
    },
    {
        title: "Plot-based Angry Birds Game",
        description: "As one of my first ever Python projects created, this program holds a special role in serving as a marker in my coding journey. " +
        "This project uses a Python plotting package to mimic the popular bird-based game, Angry Birds. ",
        link: "https://i.ibb.co/vjjLJ97/bird.png"
    }
];

const projects2 = [
    {
        title: "ECOS Fellow/Coach",
        description: "Currently, I serve as a Coach for the Engineering Community of Scholars LLC for Engineering Honors students here at Texas A&M University. My roles include directing weekly professional development and community-building events, leading " +
        "program-wide tutoring and review sessions for computer science, math, and science courses, and serving as a mentor for new " +
        "incoming freshmen in their first year of college. I also stand as one of the main liaisons between the Engineering Honors " +
        "program and the ECOS residents. ",
        link: "https://engineering.tamu.edu/academics/eh/ecos/index.html"
    },
    {
        title: "Teaching Assistant for CLEN 181",
        description: "In the 2021-2022 school year, I served as a teaching assistant for CLEN 181 in the College of Engineering at Texas A&M " +
        "University. This class focused on providing first-semester freshmen with a small community in a class while providing " +
        "essential engineering and campus resources, focusing on mental health and identity. My roles included directing and " +
        "assisting classes in lecture and small-group assignments; building college readiness, mental health, and reflection; " +
        "and promoting student engagement through individualized meetings.  ",
        link: "https://engineering.tamu.edu/information/instructor-application/index.html"
    },
    {
        title: "Volunteer English Teacher",
        description: " In the summer of 2019, I volunteered with an association to teach English abroad to children in disadvantaged regions of " +
        "Taiwan. This experience lead me to a city school in Chiayi, Taiwan, where I taught English to elementary school children " + 
        "for 4 weeks. Here, I bridged the gap between Mandarin and English and fostered a rich learning environment for students " +
        "to better understand English. ",
        link: "http://aidsummer.net/aidsummer/2019/bin1/InfoAdm1.aspx?pg=1&Index=1&ID=201"
    },
];

const projectsContainer = document.getElementById("pf");

function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.className = "project";

    const titleElement = document.createElement("h2");
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement("a");
    linkElement.href = project.link;
    linkElement.target = "_blank";
    linkElement.appendChild(titleElement);
    linkElement.appendChild(descriptionElement);
    projectCard.appendChild(linkElement);

    return projectCard;
} 

function createServiceCard2(project) {
    const projectCard = document.createElement("div");
    projectCard.className = "project2";

    const titleElement = document.createElement("h2");
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement("a");
    linkElement.href = project.link;
    linkElement.target = "_blank";
    linkElement.textContent = "View Program";

    projectCard.appendChild(titleElement);
    projectCard.appendChild(descriptionElement);
    projectCard.appendChild(linkElement);

    return projectCard;
}

function loadProjectsForSection2() {
    const projectsContainer2 = document.getElementById("service-container");
    for (const project of projects2) {
        const projectCard = createServiceCard2(project);
        projectsContainer2.appendChild(projectCard);
    }
}

function loadProjects() {
    for (const project of projects) {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    }
}

loadProjects();
loadProjectsForSection2();
