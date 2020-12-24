function responseFromWit(data) {
    console.log("data from wit:");
    // console.log(JSON.stringify(data));
    console.log(data)
    const intent = data.intents.length > 0 && data.intents[0];
    console.log("Intent: ", intent)
    switch (intent.name) {
        case "Greetings":
            return handleGreetings(data);
        case "name":
            return handleName(data);
        case "SOIL":
            return handleSoilIntro(data);
        case "VBL":
            return handleVBLIntro(data);
        case "Labs":
            return handleLabsIntro(data);
        case "AILab":
            return handleAILabIntro(data);
        case "XAASLab":
            return handleXAASLabIntro(data);
        case "AIJournal":
            return handleAIJournalIntro(data);
        case "GenZTalks":
            return handleGenZTalksIntro(data);
        case "Age":
            return handleAge(data);
        case "ClassTimings":
            return classTimings(data);
        case "Position":
            return position(data);
        case "LabMentors":
            return labMentors(data);
        case "LabGain":
            return labGain(data);
        case "Leadership":
            return leadership(data);
        case "VBLSpecial":
            return vblSpecial(data);
        case "Curriculum":
            return curriculum(data);
        case "SubmitArticles":
            return submitArticles(data);
        case "PreviousArticles":
            return previousArticles(data);
        case "AdmissionProcess":
            return admissionProcess(data);
        case "FeeStructure":
            return feeStructure(data);
        case "JoiningSoil":
            return joiningSoil(data);
    }
    return handleGibberish();
}

function handleGibberish() {
    return Promise.resolve(
        "ask me something like 'what is SOIL?' or 'Our methodology(VBL)?'"
    );
}

function handleGreetings(data) {
    const greet = data.entities["wit$Greetings:Greetings"];
    return Promise.resolve(`Hello,this is AI bot,can you please provide your name..`
    );

}


function handleName(data) {
    const names = data.entities["person:person"][0].value; //obj.entities["person:person"][0].value (it will take 0 index value of array values present in entities)
    return Promise.resolve(
        `Hello ` +
        names +
        `, In this you come to know about:
->SOIL
->Our Methodology
->Our Labs
->Our Events
->Our Journal`
    );
}


//SOIL Intro
function handleSoilIntro(data) {
    const soil = data.entities["wit$SOIL:SOIL"];
    return Promise.resolve(`SOIL:
    The World is in the need of more Disruptive Innovators and Leaders than anytime in the History.
    Come, Let's Discover, Define, Design, Derive, Develop and Deliver the Future of our mother Planet.To look over our website,click below:
    https://www.soilcampus.com/
    
    We follow Venture Base Learning metholodology`);
}

//VBL Intro
function handleVBLIntro(data) {
    const vbl = data.entities["wit$VBL:VBL"];
    return Promise.resolve(`Venture Base Learning:
    A Venture Base Learning(VBL) is a  top-down approach towards problem-solving and product development,where converged learning of technology, innovation, management, and entrepreneurship skills is instilled with ease and efficiency while developing a product from scratch to meet a particular target market.

Steps in VBL:  
  Discover: Explore the problem around us
  Define: Define problem statement for discovered  problem
  Design: Design a solution for problem statement
  Derive: Derive technology & Embrace the building blocks
  Develop: Develop the model or prototype
  Deliver: Deliver the product

     We follow this methodology in our Labs`);
}

//Labs Intro
function handleLabsIntro(data) {
    const lab = data.entities["wit$Labs:Labs"];
    return Promise.resolve(`Our Labs:
    Every lab at SOIL is a workspace where you get to work with the global subject matter experts and solve the problems, small-to-big Industry and Society is always over flooded with Problems, Requirements, Needs and Gaps.
    They need solutions to the never ending Problems Understand what it takes to CREATE Products, Services and Ventures Master the art of Designing and Delivering the Solutions
    Be those Problem Solvers - Bright Career awaits you...
        
    We have AI & XAAS Labs`);
}

//AI Lab Intro
function handleAILabIntro(data) {
    const ail = data.entities["wit$AILab:AILab"];
    return Promise.resolve(`AI Lab:
    Create Bots with Brain easing our lives at work, home and society.‍
    This comprehensive program designed to cover an entire skill track to help you take your career to the next level and make yourself ready for the future job market.
    Discover, Define and Design a Cognitive Bot.
    
    To know more and to register for lab click on below link:
    https://www.soilcampus.com/ai-labs
    
    The other lab we have is XAAS Lab...`);
}

//Xaas Lab Intro
function handleXAASLabIntro(data) {
    const xaas = data.entities["wit$XAAS_Lab:XAAS_Lab"];
    return Promise.resolve(`XAAS Lab:
    Create Disruptive Next Gen GIG Economy Platforms.
‍    This comprehensive program is designed to cover an entire Skill Track of the Hi-Pay, Hi-Innovation Talent who are in  Hi-Demand at the top global brands.Discover, Define and Design a GIG Economy Platforms like UPWORK, FIVERR. UBER, ZOMATO, UDEMY, SWIGGY & more...
    Experience Venture Based Learning. Get SOIL'ED
    
    To know more and to register for lab click on below link:
    https://www.soilcampus.com/xaas-labs
  
    We are providing AI Journal for our GenZs to publish their views and thoughts to the world...`);
}

//AI Journal Intro
function handleAIJournalIntro(data) {
    const Aij = data.entities["wit$AIJournal:AIJournal"];
    return Promise.resolve(`AI Journal:
    AI Journal is a place For all the aspiring Tech Writers from Schools and Colleges, Subject matter experts, Leadership, Researchers and faculty in artificial intelligence aka AI space.Here they publish their articles...
    
    To know more about AI Journal click on below link:
    https://www.aijournal.soilcampus.com/
  
    Present we are conducting an event call "Fryday GenZ Talks" for our GenZs...`);
}

//events intro(GenZ talk)
function handleGenZTalksIntro(data) {
    const fgt = data.entities["wit$GenZTalks:GenZTalks"];
    return Promise.resolve(`Fryday GenZ Talk:
    Fryday GenZ talk is a platform where all the people share their views and thoughts on any fields to the world in form of seminars...
    
    To look for prevoius videos click on below link:
    https://www.soilcampus.com/events
  
    Is there any other queries regarding SOIL, I am here to assist you...`);
}

//eligibility at SOIL
function handleAge(data) {
    const age = data.entities["wit$Age:Age"];
    return Promise.resolve(`GenZs who are in the range of 13 to 22 years with innovative, passionate and committed mindset can be a part of SOIL.
    `);
}

//class timings at soil
function classTimings(data) {
    const classTime = data.entities["wit$ClassTimings:ClassTimings"];
    return Promise.resolve(
        `Actually SOIL works 24*7 everyday and the work time depends on the work assigned to you and mentors will be available for 24*7 everyday`
    );
}

//posiotion of person at SOIL
function position(data) {
    const position = data.entities["wit$Position:Position"];
    return Promise.resolve(
        `You will be treated as a Intern at SOIL, means you are a student or trainee who works, sometimes without pay, in order to gain work experience or satisfy requirements for a qualification.`
    );
}

//Mentors for AI & XAAS Lab
function labMentors(data) {
    const mentor = data.entities["wit$LabMentors:LabMentors"];
    return Promise.resolve(`
      For AI Lab:
      1) Mr. Srikanth Talluri
      https://www.linkedin.com/in/stalluri/
      2) Mrs. Usha Sripathineni
      https://www.linkedin.com/in/ustalluri/
      
      For XAAS Lab:
      1) Mr. Srikanth Talluri
      https://www.linkedin.com/in/stalluri/
      2) Mr. Satya.H Vakada
      https://www.linkedin.com/in/harishvakada/`);
}

//gain at labs
function labGain(data) {
    const position = data.entities["wit$LabGain:LabGain"];
    return Promise.resolve(`
  1)Every Participant shall be given clear assistance on how to prepare and apply for global jobs and career opportunities
  2)However, SOIL Campus never promises any placement to any participant in any lab.
  3)SOIL Campus commits to impart the necessary skills and competence to the participant(s), which will make them job/industry ready and thus fetch the relevant opportunities.
  4)Code of Conduct laid by SOIL Campus must be adhered by all applicants or students. These shall be briefed during on-boarding to every lab participant.
  
  Upon successful completion of this program, you’ll receive a Course Completion Certificate post review and Mentor Recommendation Letter based on your performance.`);
}

//Leadership at SOIL
function leadership(data) {
    const position = data.entities["wit$Leadership:Leadership"];
    return Promise.resolve(`
  Leadership of SOIL:
      1) Mr. J A Chowdary
      https://www.linkedin.com/in/jachowdary/
      2) Mr. Srikanth Talluri
      https://www.linkedin.com/in/stalluri/
      3) Mr. Satya.H Vakada
      https://www.linkedin.com/in/harishvakada/
      4) Mrs. Anju Shwetha
      https://www.linkedin.com/in/anjuj/
      5) Mrs. Usha Sripathineni
      https://www.linkedin.com/in/ustalluri/
      6) Mrs. Uma Kotthuru
      https://www.linkedin.com/in/uk2008/
      7) Dr Balaji Utla
      https://www.linkedin.com/in/dr-balaji-utla-7200501/
      8) Mrs. Kiran Yella
      https://www.linkedin.com/in/kiranyella/
      9) Mr. Bhavani Shanker
      https://www.linkedin.com/in/bhavani-shankar-849360128/
      10) Mr. Raja Vaddiparthi
      https://www.linkedin.com/in/raja-vaddiparti-a598019/`);
}

//VBL is special
function vblSpecial(data) {
    const position = data.entities["wit$VBLSpecial:VBLSpecial"];
    return Promise.resolve(
        `In Project Based Learning, teachers make learning come alive for students. In PBL students will learn first for certain period of time and later start working on what they learn. In VBL, students will learn and start working on it parallelly under guidance of mentors..`
    );
}

//Lab syllabus
function curriculum(data) {
    const position = data.entities["wit$VBLSpecial:VBLSpecial"];
    return Promise.resolve(`We follow Venture Based Learning Methodology and the work and learnings at SOIL depends on the Lab you are in..
      For AI Lab:
      https://www.soilcampus.com/ai-labs
      For XAAS Lab:
      https://www.soilcampus.com/xaas-labs`);
}

//Submit articles
function submitArticles(data) {
    const position = data.entities["wit$SubmitArticles:SubmitArticles"];
    return Promise.resolve(`You can write and submit your thoughts on any field in the form of articles, videos, memes...
      It is simple to publish your thoughts.. Just click on below link and go to content submission, fill the details and click register.. Then your article get published...
      https://www.aijournal.soilcampus.com/`);
}

//Previous articles
function previousArticles(data) {
    const position = data.entities["wit$PreviousArticles:PreviousArticles"];
    return Promise.resolve(`To look for previous articles click on below link...
      https://www.soilcampus.com/journal`);
}

//Admission process & to register
function admissionProcess(data) {
    const position = data.entities["wit$AdmissionProcess:AdmissionProcess"];
    return Promise.resolve(`Once you submit your application, an interview will be scheduled and there you can ask all your queries to the committee
      To register & to submit your application click on below link...
      https://forms.gle/AWt8S2eUfuTY1qnW9`);
}

//Fee structure
function feeStructure(data) {
    const position = data.entities["wit$FeeStructure:FeeStructure"];
    return Promise.resolve(`Annual subscription fee of,  INR 36,500 per annum (For Students within India) and USD 500 (For Students outside India).This Includes 365 days subscription to the campus offerings.
        Monthly subscription option  is also available with a fee of INR 7500 (For Students within India) and USD 100 (For Students outside India).
        We accept the fees only through single payment.
        We accept payment through all online modes like, NEFT, UPI, Debit or credit card
      `);
}

//purpose of joining SOIL
function joiningSoil(data) {
    const position = data.entities["wit$JoiningSoil:JoiningSoil"];
    return Promise.resolve(`When you join SOIL you will gain knowledge about cloud campus, venture base learning and it will more useful for your future as you are trained and practiced to the new things that are going on around you..
      Admissions are through the year.
However the applicant will have to submit their interest through a formal application. 
Admission Committee shall review each applicant and hold a Personal Interview (Online) before confirming the admission.
The usual admission process takes 2-4 weeks post application submission.
Admission acceptance is purely at the discretion of the committee.
Application Submission does not guarantee the Campus admit.`);
}
exports.responseFromWit = responseFromWit;
