
 const navLinks = [
     {
         name: "Work",
         link: "#work",
     },
     {
         name: "Experience",
         link: "#experience",
     },
     {
         name: "Skills",
         link: "#skills",
     },
     {
         name: "Testimonials",
         link: "#testimonials",
     },
 ];

 const words = [
     { text: "Ideas", imgPath: "/images/ideas.svg" },
     { text: "Concepts", imgPath: "/images/concepts.svg" },
     { text: "Designs", imgPath: "/images/designs.svg" },
     { text: "Code", imgPath: "/images/code.svg" },
     { text: "Ideas", imgPath: "/images/ideas.svg" },
     { text: "Concepts", imgPath: "/images/concepts.svg" },
     { text: "Designs", imgPath: "/images/designs.svg" },
     { text: "Code", imgPath: "/images/code.svg" },
 ];

 // cfRating
 async function fetchCodeforcesRating(username) {
     const url = `https://codeforces.com/api/user.info?handles=${username}`;
     try {
         const res = await fetch(url);
         const data = await res.json();
         if (data.status === "OK") {
             return data.result[0].rating;
         }
     } catch (e) {
         console.error(e);
     }
     return 0;
 }
 const cfRating = await fetchCodeforcesRating("harshmehar50");

 // cfQuestions
 async function getCodeforcesSolvedCount(username) {
     const url = `https://codeforces.com/api/user.status?handle=${username}`;
     try {
         const res = await fetch(url);
         const data = await res.json();
         if (data.status !== "OK") return 0;

         const solved = new Set();

         for (const sub of data.result) {
             if (sub.verdict === "OK") {
                 const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
                 solved.add(problemId);
             }
         }

         return solved.size;
     } catch (err) {
         console.error(err);
         return 0;
     }
 }

 const solved = await getCodeforcesSolvedCount("harshmehar50");

 // lcquestions
 async function getLeetCodeStats(username) {
     const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
     const data = await res.json();
     return data.totalSolved;
 }
 const lcsolvedquestions = await getLeetCodeStats("altharsh");


 const counterItems = [

     { value: lcsolvedquestions, suffix: "+", imgPath: "/images/leetcode.png", link: "https://leetcode.com/u/altharsh/", label: "LeetCode Questions" },
     { value: 1817, imgPath: "/images/leetcode.png", link: "https://leetcode.com/u/altharsh/", label: "LeetCode Rating" },
     { value: solved, suffix: "+", imgPath: "/images/codeforces.png", link: "https://codeforces.com/profile/harshmehar50", label: "CodeForces Questions" },
     { value: cfRating, imgPath: "/images/codeforces.png", link: "https://codeforces.com/profile/harshmehar50", label: "CodeForces Rating" },
     { value: 70, suffix : "+" , imgPath: "/images/codechef.png", link: "https://www.codechef.com/users/altharsh49", label: "CodeChef Questions" },
     { value: 1585 , imgPath: "/images/codechef.png", link: "https://www.codechef.com/users/altharsh49", label: "CodeChef Rating" },
     { value: 3, suffix: "+", label: "Completed Projects" },
 ];

      

 const abilities = [
     {
         imgPath: "/images/seo.png",
         title: "Quality Focus",
         desc: "Delivering high-quality results while maintaining attention to every detail.",
     },
     {
         imgPath: "/images/chat.png",
         title: "Reliable Communication",
         desc: "Keeping you updated at every step to ensure transparency and clarity.",
     },
     {
         imgPath: "/images/time.png",
         title: "On-Time Delivery",
         desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
     },
 ];

 const techStackImgs = [
     {
         name: "React Developer",
         imgPath: "/images/logos/react.png",
     },
     {
         name: "Python Developer",
         imgPath: "/images/logos/python.svg",
     },
     {
         name: "Backend Developer",
         imgPath: "/images/logos/node.png",
     },
     {
         name: "Interactive Developer",
         imgPath: "/images/logos/three.png",
     },
     {
         name: "Project Manager",
         imgPath: "/images/logos/git.svg",
     },
 ];

 const techStackIcons = [
     {
         name: "React Developer",
         modelPath: "/models/react_logo-transformed.glb",
         scale: 1,
         rotation: [0, 0, 0],
     },
     {
         name: "Java",
         modelPath: "/models/java.glb",
         scale: 1.35,
         rotation: [0, 0, 0],
     },
     {
         name: "Backend Developer",
         modelPath: "/models/node-transformed.glb",
         scale: 5,
         rotation: [0, -Math.PI / 2, 0],
     },
     {
         name: "Interactive Developer",
         modelPath: "/models/three.js-transformed.glb",
         scale: 0.05,
         rotation: [0, 0, 0],
     },
     {
         name: "Project Manager",
         modelPath: "/models/git-svg-transformed.glb",
         scale: 0.05,
         rotation: [0, -Math.PI / 4, 0],
     },
 ];
 
 const socialImgs = [
     {
         name: "insta",
         url: "https://www.instagram.com/harsh_mehar_49",
         imgPath: "/images/insta.png",
     },
    
     {
         name: "linkedin",
         url: "https://www.linkedin.com/in/harsh-mehar-010853288",
         imgPath: "/images/linkedin.png",
     },
     {
         name: "github",
         url: "https://github.com/HarshMehar50",
         imgPath: "/images/github.png",
     }
 ];

 export {
     words,
     abilities,
     counterItems,
     socialImgs,
     techStackIcons,
     techStackImgs,
     navLinks,
 };

