const students = [
    { roll: 1, name: "Student 1" },
    { roll: 2, name: "Student 2" },
    { roll: 3, name: "Student 3" },
    { roll: 4, name: "Student 4" },
    { roll: 5, name: "Student 5" },
    { roll: 6, name: "Student 6" },
    { roll: 7, name: "Student 7" },
    { roll: 8, name: "Student 8" },
    { roll: 9, name: "Student 9" },
    { roll: 10, name: "Student 10" },
    { roll: 11, name: "Student 11" },   
    { roll: 12, name: "Student 12" },
    { roll: 13, name: "Student 13" },
    { roll: 14, name: "Student 14" },
    { roll: 15, name: "Student 15" },
    { roll: 16, name: "Student 16" },
    { roll: 17, name: "Student 17" },
    { roll: 18, name: "Student 18" },
    { roll: 19, name: "Student 19" },
    { roll: 20, name: "Student 20" },
    { roll: 21, name: "Student 21" },
    { roll: 22, name: "Student 22" },
    { roll: 23, name: "Student 23" },
    { roll: 24, name: "Student 24" },
    { roll: 25, name: "Student 25" },
    { roll: 26, name: "Student 26" },
    { roll: 27, name: "Student 27" },
    { roll: 28, name: "Student 28" },
    { roll: 29, name: "Student 29" },
    { roll: 30, name: "Student 30" },
    { roll: 31, name: "Student 31" },
    { roll: 32, name: "Student 32" },
    { roll: 33, name: "Student 33" },
    { roll: 34, name: "Student 34" },
    { roll: 35, name: "Student 35" },
    { roll: 36, name: "Student 36" },
    { roll: 37, name: "Student 37" },
    { roll: 38, name: "Student 38" },
    { roll: 39, name: "Student 39" },
    { roll: 40, name: "Student 40" },
    { roll: 41, name: "Student 41" },
    { roll: 42, name: "Student 42" },
    { roll: 43, name: "Student 43" },
    { roll: 44, name: "Student 44" },
    { roll: 45, name: "Student 45" },
    { roll: 46, name: "Student 46" },
    { roll: 47, name: "Student 47" },
    { roll: 48, name: "Student 48" }
];

const punishments = [
    "Write a 500-word essay on a historical event.",
    "Complete an additional math problem set.",
    "Prepare and deliver a presentation on a science topic.",
    "Write a book report on a classic novel.",
    "Research and write a biography of an influential person.",
    "Complete a detailed project on an environmental issue.",
    "Solve a set of advanced math puzzles.",
    "Write a persuasive essay on a social issue.",
    "Develop a research proposal on a scientific topic.",
    "Write a script for a play on a historical event.",
    "Create a model of a scientific concept.",
    "Write a detailed report on a famous invention.",
    "Complete a comprehensive geography quiz.",
    "Organize a cleanup of the school grounds.",
    "Volunteer to help in the school library.",
    "Assist a teacher with grading papers.",
    "Help set up for a school event.",
    "Mentor a younger student.",
    "Organize a book drive for the school.",
    "Volunteer at a local community center.",
    "Create educational posters for the classroom.",
    "Help organize classroom materials.",
    "Assist in organizing a school assembly.",
    "Participate in a peer mediation program.",
    "Help maintain the school's garden.",
    "Assist with school event planning.",
    "Volunteer to tutor students in a subject you're good at.",
    "Help with the school's recycling program.",
    "Create a bulletin board display for a classroom.",
    "Organize a school-wide recycling initiative.",
    "Help in the school cafeteria.",
    "Plan and lead a group study session.",
    "Create a mural for the school hallway.",
    "Write a journal entry reflecting on your behavior.",
    "Develop a personal improvement plan.",
    "Create a daily schedule to improve time management.",
    "Participate in a workshop on conflict resolution.",
    "Write a list of goals and steps to achieve them.",
    "Practice mindfulness and write about the experience.",
    "Write a letter of apology to anyone affected by your actions.",
    "Develop a healthy living plan.",
    "Write a report on the importance of empathy.",
    "Participate in a leadership training program.",
    "Create a vision board for your future aspirations.",
    "Write a letter to yourself about your goals.",
    "Develop a presentation on effective communication.",
    "Write about a time you learned from a mistake.",
    "Create a plan to improve your academic performance.",
    "Participate in a team-building exercise.",
    "Write an essay on the value of honesty.",
    "Write a letter to a friend giving advice.",
    "Create a chart tracking your progress on personal goals.",
    "Write a short story with a moral lesson.",
    "Create a comic strip about a challenging situation.",
    "Develop a puzzle or game for the class.",
    "Write a poem about a personal experience.",
    "Create a poster on a historical figure.",
    "Develop a board game based on a subject you're studying.",
    "Write a script for a classroom skit.",
    "Create a detailed scrapbook of a historical event.",
    "Draw a detailed map of a fictional world.",
    "Write a song about a science concept.",
    "Create an art project representing a historical event.",
    "Develop a business plan for a hypothetical company.",
    "Write a play based on a book you've read.",
    "Create a detailed storyboard for a short film.",
    "Write a speech on an important issue.",
    "Develop a timeline of your personal achievements.",
    "Create a photo essay on a community issue.",
    "Write a letter to a historical figure.",
    "Develop a public service announcement on a health topic.",
    "Create a comic book based on a historical period.",
    "Organize a classroom exercise routine.",
    "Participate in a school sports team practice.",
    "Help with school maintenance tasks.",
    "Organize a school supply closet.",
    "Develop a personal fitness plan.",
    "Write a guide on staying healthy.",
    "Participate in a community service project.",
    "Help in the school's technology department.",
    "Create a manual for new students.",
    "Volunteer at a local charity.",
    "Assist in a school workshop or lab.",
    "Help organize a school field trip.",
    "Develop a presentation on the importance of physical activity.",
];

let pickedNumbers = [];

document.getElementById('pickButton').addEventListener('click', () => {
    if (pickedNumbers.length === students.length) {
        alert('All roll numbers have been picked!');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * students.length);
    } while (pickedNumbers.includes(students[randomIndex].roll));

    const picked = students[randomIndex];
    const includePunishment = document.getElementById('includePunishment').checked;
    const punishment = includePunishment ? 
        punishments[Math.floor(Math.random() * punishments.length)] : 
        null;
    pickedNumbers.push(picked.roll);

    // Animate the number change
    const numberDisplay = document.getElementById('number');
    const nameDisplay = document.getElementById('name');
    const punishmentDisplay = document.getElementById('punishment');
    
    // Show/hide punishment display based on checkbox
    punishmentDisplay.classList.toggle('hidden', !includePunishment);
    
    let count = 0;
    const animationDuration = 1000; // 1 second
    const fps = 60;
    const interval = animationDuration / fps;
    
    const animation = setInterval(() => {
        count++;
        numberDisplay.textContent = Math.floor(Math.random() * 48) + 1;
        
        if (count >= fps) {
            clearInterval(animation);
            numberDisplay.textContent = picked.roll;
            nameDisplay.textContent = picked.name;
            if (includePunishment) {
                punishmentDisplay.textContent = punishment;
            }
            
            // Add to history
            const historyList = document.getElementById('historyList');
            const listItem = document.createElement('li');
            listItem.innerHTML = includePunishment ? 
                `<span>Roll ${picked.roll} - ${picked.name}</span>
                 <span class="punishment-history">Punishment: ${punishment}</span>` :
                `<span>Roll ${picked.roll} - ${picked.name}</span>`;
            historyList.insertBefore(listItem, historyList.firstChild);
        }
    }, interval);
});
