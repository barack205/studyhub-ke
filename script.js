// StudyHub KE — Form-based revision quizzes. All questions here are original practice questions.
const quizBank = {
  1: {
    mathematics: { title: "Mathematics", questions: [
      { q: "Simplify: 4a + 3a", options: ["7", "7a", "12a", "a"], answer: 1, explanation: "These are like terms, so 4a + 3a = 7a." },
      { q: "Evaluate: 6²", options: ["12", "18", "36", "64"], answer: 2, explanation: "6² means 6 × 6 = 36." },
      { q: "Write 0.4 as a fraction in its simplest form.", options: ["1/4", "2/5", "4/5", "1/5"], answer: 1, explanation: "0.4 = 4/10 = 2/5." }
    ]},
    biology: { title: "Biology", questions: [
      { q: "What is the basic unit of life?", options: ["Tissue", "Organ", "Cell", "Organ system"], answer: 2, explanation: "The cell is the basic structural and functional unit of life." },
      { q: "Which instrument is used to view tiny cells?", options: ["Telescope", "Microscope", "Periscope", "Thermometer"], answer: 1, explanation: "A microscope magnifies small objects such as cells." },
      { q: "Which of these is a characteristic of living things?", options: ["Rusting", "Growth", "Melting", "Evaporation"], answer: 1, explanation: "Growth is one of the characteristics of living organisms." }
    ]},
    chemistry: { title: "Chemistry", questions: [
      { q: "Which apparatus measures the volume of a liquid?", options: ["Measuring cylinder", "Tripod stand", "Spatula", "Filter funnel"], answer: 0, explanation: "A measuring cylinder is used to measure liquid volume." },
      { q: "Which state of matter has a fixed shape and fixed volume?", options: ["Gas", "Liquid", "Solid", "Vapour"], answer: 2, explanation: "A solid normally has a fixed shape and a fixed volume." },
      { q: "Which one is a mixture?", options: ["Pure copper", "Air", "Pure oxygen", "Distilled water"], answer: 1, explanation: "Air contains several gases mixed together." }
    ]},
    english: { title: "English", questions: [
      { q: "Choose the correct sentence.", options: ["They is ready.", "They are ready.", "They am ready.", "They be ready."], answer: 1, explanation: "Use 'are' with the subject 'they'." },
      { q: "What is the plural of 'child'?", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2, explanation: "The standard plural of child is children." },
      { q: "Which word is a noun?", options: ["Quickly", "Beautiful", "Teacher", "Run"], answer: 2, explanation: "Teacher names a person, so it is a noun." }
    ]}
  },
  2: {
    mathematics: { title: "Mathematics", questions: [
      { q: "Solve: 3x + 5 = 20", options: ["x = 3", "x = 5", "x = 8", "x = 15"], answer: 1, explanation: "Subtract 5 to get 3x = 15, then divide by 3." },
      { q: "Find the area of a triangle with base 10 cm and height 6 cm.", options: ["60 cm²", "30 cm²", "16 cm²", "32 cm²"], answer: 1, explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30 cm²." },
      { q: "Simplify the ratio 12:18.", options: ["6:9", "3:2", "2:3", "4:9"], answer: 2, explanation: "Divide both terms by 6 to get 2:3." }
    ]},
    biology: { title: "Biology", questions: [
      { q: "Which cell part controls most cell activities?", options: ["Cell wall", "Nucleus", "Vacuole", "Cytoplasm"], answer: 1, explanation: "The nucleus contains genetic material and helps control cell activities." },
      { q: "Which process moves water vapour out of plant leaves?", options: ["Digestion", "Transpiration", "Pollination", "Germination"], answer: 1, explanation: "Transpiration is the loss of water vapour from a plant, mainly through leaf stomata." },
      { q: "Which blood cells help defend the body against infection?", options: ["Red blood cells", "White blood cells", "Platelets only", "Plasma only"], answer: 1, explanation: "White blood cells help protect the body against pathogens." }
    ]},
    chemistry: { title: "Chemistry", questions: [
      { q: "What is the chemical symbol for sodium?", options: ["S", "So", "Na", "N"], answer: 2, explanation: "Sodium's chemical symbol is Na." },
      { q: "A solution with pH 3 is:", options: ["Acidic", "Neutral", "Alkaline", "Always pure water"], answer: 0, explanation: "A pH below 7 indicates an acidic solution." },
      { q: "Which method separates an insoluble solid from a liquid?", options: ["Filtration", "Distillation", "Crystallisation only", "Sublimation"], answer: 0, explanation: "Filtration traps the insoluble solid in a filter." }
    ]},
    english: { title: "English", questions: [
      { q: "Choose the correct past tense: 'She ___ the book yesterday.'", options: ["read", "reads", "reading", "has readed"], answer: 0, explanation: "The past tense of read is spelled read, though pronounced 'red'." },
      { q: "Which word is closest in meaning to 'reluctant'?", options: ["Unwilling", "Excited", "Careless", "Certain"], answer: 0, explanation: "Reluctant means unwilling or hesitant." },
      { q: "Identify the adverb: 'He spoke softly.'", options: ["He", "Spoke", "Softly", "None"], answer: 2, explanation: "Softly describes how he spoke, so it is an adverb." }
    ]}
  },
  3: {
    mathematics: { title: "Mathematics", questions: [
      { q: "Factorise: x² − 9", options: ["(x − 9)(x + 1)", "(x − 3)(x + 3)", "(x − 3)²", "x(x − 9)"], answer: 1, explanation: "Use the difference of two squares: x² − 3² = (x − 3)(x + 3)." },
      { q: "Find the gradient of the line through (1, 2) and (3, 8).", options: ["2", "3", "4", "6"], answer: 1, explanation: "Gradient = (8 − 2)/(3 − 1) = 6/2 = 3." },
      { q: "Solve simultaneously: x + y = 9 and x − y = 3. Find x.", options: ["3", "6", "9", "12"], answer: 1, explanation: "Adding the equations gives 2x = 12, so x = 6." }
    ]},
    biology: { title: "Biology", questions: [
      { q: "Which process releases energy from food in cells?", options: ["Photosynthesis", "Respiration", "Transpiration", "Excretion"], answer: 1, explanation: "Cellular respiration releases usable energy from food substances." },
      { q: "Which structure is the main site of photosynthesis in a leaf?", options: ["Root hair", "Chloroplast", "Xylem vessel", "Stigma"], answer: 1, explanation: "Chloroplasts contain chlorophyll and are the main sites of photosynthesis." },
      { q: "Which vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries only", "Lymph vessels"], answer: 1, explanation: "Arteries carry blood away from the heart." }
    ]},
    chemistry: { title: "Chemistry", questions: [
      { q: "What is the formula of calcium carbonate?", options: ["CaCO₃", "CaCl₂", "CO₂", "CaO"], answer: 0, explanation: "Calcium carbonate has the formula CaCO₃." },
      { q: "Oxidation can be described as:", options: ["Gain of electrons", "Loss of electrons", "Gain of neutrons", "Loss of protons"], answer: 1, explanation: "In electron-transfer terms, oxidation is loss of electrons." },
      { q: "Which gas turns limewater milky?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 2, explanation: "Carbon dioxide reacts with limewater to form insoluble calcium carbonate." }
    ]},
    english: { title: "English", questions: [
      { q: "Choose the correctly punctuated sentence.", options: ["After lunch we, went home.", "After lunch, we went home.", "After, lunch we went home.", "After lunch we went, home."], answer: 1, explanation: "The introductory phrase is followed by a comma." },
      { q: "A person who writes plays is a:", options: ["Biographer", "Playwright", "Editor", "Publisher"], answer: 1, explanation: "A playwright writes plays for the stage." },
      { q: "Which is the passive form of 'The boy kicked the ball'?", options: ["The ball kicked the boy.", "The ball was kicked by the boy.", "The boy was kicked by the ball.", "The ball has kick."], answer: 1, explanation: "In the passive voice, the object becomes the subject: The ball was kicked by the boy." }
    ]}
  },
  4: {
    mathematics: { title: "Mathematics", questions: [
      { q: "Solve: 2x² − 8 = 0 for the positive value of x.", options: ["1", "2", "4", "8"], answer: 1, explanation: "2x² = 8, so x² = 4 and the positive solution is x = 2." },
      { q: "A bag has 3 red and 2 blue balls. What is the probability of picking a blue ball at random?", options: ["2/3", "3/5", "2/5", "1/2"], answer: 2, explanation: "There are 2 blue balls out of 5 balls in total, so the probability is 2/5." },
      { q: "Find the distance between (0, 0) and (3, 4).", options: ["4", "5", "6", "7"], answer: 1, explanation: "Distance = √(3² + 4²) = √25 = 5 units." }
    ]},
    biology: { title: "Biology", questions: [
      { q: "Which hormone lowers blood glucose concentration?", options: ["Adrenaline", "Insulin", "Thyroxine", "Oestrogen"], answer: 1, explanation: "Insulin helps lower blood glucose by promoting uptake and storage of glucose." },
      { q: "In a food chain, green plants are usually:", options: ["Primary consumers", "Producers", "Decomposers", "Parasites"], answer: 1, explanation: "Green plants produce organic food using light energy." },
      { q: "Which type of cell division produces gametes with half the chromosome number?", options: ["Mitosis", "Meiosis", "Binary fission", "Budding"], answer: 1, explanation: "Meiosis reduces the chromosome number by half when forming gametes." }
    ]},
    chemistry: { title: "Chemistry", questions: [
      { q: "Which particles are transferred in ionic bonding?", options: ["Protons", "Electrons", "Neutrons", "Whole nuclei"], answer: 1, explanation: "Ionic bonding involves electron transfer, forming oppositely charged ions." },
      { q: "What is the oxidation state of oxygen in most compounds?", options: ["−2", "−1", "+1", "+2"], answer: 0, explanation: "Oxygen usually has oxidation state −2, with some exceptions." },
      { q: "Which process is used to obtain a soluble salt from an acid and an insoluble base?", options: ["Titration only", "Add excess base, filter, then crystallise", "Decant without reaction", "Sublime the acid"], answer: 1, explanation: "Excess insoluble base neutralises the acid; filter off the excess and crystallise the salt solution." }
    ]},
    english: { title: "English", questions: [
      { q: "Which literary device gives human qualities to non-human things?", options: ["Hyperbole", "Personification", "Irony", "Alliteration"], answer: 1, explanation: "Personification gives human qualities or actions to non-human things." },
      { q: "Choose the correct reported speech: She said, 'I am tired.'", options: ["She said that I am tired.", "She said that she was tired.", "She says she was tired yesterday.", "She said that she is tiring."], answer: 1, explanation: "In standard reported speech, 'I am' changes to 'she was' when the reporting verb is past." },
      { q: "A brief reference to a well-known person, story, or event is called:", options: ["Alliteration", "Allusion", "Onomatopoeia", "Oxymoron"], answer: 1, explanation: "An allusion is an indirect reference to a known person, story, or event." }
    ]}
  }
};


// Additional original practice questions, grouped by Form and subject.
// Topic labels are broad revision areas; compare them with the current KICD design before publishing as fully aligned.
const extraQuestionBank = {
  1: {
    mathematics: [
      { topic: "Integers", q: "Evaluate: −7 + 12.", options: ["−19", "−5", "5", "19"], answer: 2, explanation: "Starting at −7 and moving 12 units right gives 5." },
      { topic: "Fractions", q: "Calculate 3/4 − 1/4.", options: ["1/2", "2/8", "1", "1/4"], answer: 0, explanation: "The denominators are equal, so (3 − 1)/4 = 2/4 = 1/2." },
      { topic: "Perimeter", q: "A rectangle is 8 cm long and 3 cm wide. What is its perimeter?", options: ["11 cm", "22 cm", "24 cm", "16 cm"], answer: 1, explanation: "Perimeter = 2 × (8 + 3) = 22 cm." }
    ],
    biology: [
      { topic: "Classification", q: "Which feature is commonly used to classify flowering plants?", options: ["Presence of flowers", "Body temperature", "Number of legs", "Type of blood"], answer: 0, explanation: "Flowering plants are characterised by producing flowers, which aid reproduction." },
      { topic: "The Cell", q: "Which structure forms a selectively permeable boundary around a cell?", options: ["Cell membrane", "Cell wall only", "Nucleus", "Chloroplast"], answer: 0, explanation: "The cell membrane regulates movement of substances into and out of the cell." },
      { topic: "Nutrition", q: "Which nutrient is the body's main immediate source of energy?", options: ["Vitamins", "Carbohydrates", "Mineral salts", "Water"], answer: 1, explanation: "Carbohydrates are broken down to provide energy for cellular activities." }
    ],
    chemistry: [
      { topic: "Laboratory Safety", q: "What should you do first if a chemical splashes onto your skin during a school practical?", options: ["Tell the teacher and rinse with plenty of water", "Rub it into the skin", "Taste it to identify it", "Cover it and continue"], answer: 0, explanation: "Alert the teacher immediately and rinse the affected skin with plenty of running water, following lab safety instructions." },
      { topic: "Matter", q: "Which change of state occurs when liquid water becomes water vapour?", options: ["Freezing", "Condensation", "Vaporisation", "Deposition"], answer: 2, explanation: "Vaporisation is the change from liquid to gas." },
      { topic: "Separation", q: "Which method can separate iron filings from sand?", options: ["Magnetic separation", "Filtration", "Distillation", "Evaporation"], answer: 0, explanation: "A magnet attracts iron filings but not ordinary sand." }
    ],
    english: [
      { topic: "Parts of Speech", q: "In the sentence 'The bright moon shone', which word is the adjective?", options: ["The", "bright", "moon", "shone"], answer: 1, explanation: "Bright describes the noun moon, so it is an adjective." },
      { topic: "Subject-Verb Agreement", q: "Choose the correct sentence.", options: ["The girls sings well.", "The girls sing well.", "The girls singing well.", "The girls is sing well."], answer: 1, explanation: "The plural subject girls takes the verb sing in the simple present." },
      { topic: "Vocabulary", q: "Which word is an antonym of 'scarce'?", options: ["Rare", "Limited", "Abundant", "Insufficient"], answer: 2, explanation: "Scarce means not plentiful; abundant means plentiful." }
    ]
  },
  2: {
    mathematics: [
      { topic: "Percentages", q: "Find 15% of 200.", options: ["15", "20", "30", "45"], answer: 2, explanation: "15% of 200 = 0.15 × 200 = 30." },
      { topic: "Angles", q: "Two angles on a straight line are x and 65°. Find x.", options: ["25°", "65°", "115°", "125°"], answer: 2, explanation: "Angles on a straight line add to 180°, so x = 180° − 65° = 115°." },
      { topic: "Indices", q: "Simplify 2³ × 2².", options: ["2⁵", "4⁶", "2⁶", "4⁵"], answer: 0, explanation: "For the same base, add the powers: 2³ × 2² = 2⁵." }
    ],
    biology: [
      { topic: "Nutrition in Plants", q: "Which gas is taken in by green plants during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 1, explanation: "Plants use carbon dioxide and water to make food during photosynthesis." },
      { topic: "Transport in Plants", q: "Which tissue transports water and mineral salts from roots upwards?", options: ["Phloem", "Xylem", "Epidermis", "Palisade tissue"], answer: 1, explanation: "Xylem transports water and dissolved mineral salts from roots to the rest of the plant." },
      { topic: "Human Nutrition", q: "Which enzyme in saliva begins the digestion of starch?", options: ["Pepsin", "Amylase", "Lipase", "Trypsin"], answer: 1, explanation: "Salivary amylase begins breaking starch into smaller carbohydrate molecules." }
    ],
    chemistry: [
      { topic: "Atomic Structure", q: "The atomic number of an element equals the number of:", options: ["Neutrons only", "Protons", "Protons plus neutrons", "Electron shells"], answer: 1, explanation: "Atomic number is defined as the number of protons in the nucleus." },
      { topic: "Acids and Bases", q: "What colour does blue litmus paper turn in an acidic solution?", options: ["Blue", "Green", "Red", "White"], answer: 2, explanation: "Acids turn blue litmus paper red." },
      { topic: "Mixtures", q: "Which method is most suitable for obtaining pure water from salt solution?", options: ["Filtration", "Simple distillation", "Using a magnet", "Sieving"], answer: 1, explanation: "Water is vaporised and then condensed, leaving most dissolved salt behind." }
    ],
    english: [
      { topic: "Tenses", q: "Complete the sentence: 'By the time we arrived, the film ___. '", options: ["starts", "has started", "had started", "starting"], answer: 2, explanation: "The past perfect 'had started' shows an event completed before another past event." },
      { topic: "Direct and Reported Speech", q: "Choose the correct reported form of: He said, 'I will come.'", options: ["He said that he would come.", "He said that I will come.", "He says he would came.", "He said that he comes tomorrow."], answer: 0, explanation: "In reported speech after a past reporting verb, 'will' commonly changes to 'would' and 'I' to 'he'." },
      { topic: "Prepositions", q: "Choose the correct preposition: 'The teacher was pleased ___ our progress.'", options: ["at", "with", "on", "by"], answer: 1, explanation: "The natural expression is 'pleased with our progress'." }
    ]
  },
  3: {
    mathematics: [
      { topic: "Quadratic Expressions", q: "Factorise x² + 5x + 6.", options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x − 2)(x − 3)", "x(x + 5) + 6x"], answer: 1, explanation: "The numbers 2 and 3 multiply to 6 and add to 5, so the factorisation is (x + 2)(x + 3)." },
      { topic: "Trigonometry", q: "In a right-angled triangle, sin θ is the ratio of:", options: ["Adjacent ÷ hypotenuse", "Opposite ÷ hypotenuse", "Opposite ÷ adjacent", "Hypotenuse ÷ opposite"], answer: 1, explanation: "Sine of an acute angle in a right triangle is opposite side divided by hypotenuse." },
      { topic: "Statistics", q: "Find the mean of 4, 6, 8 and 10.", options: ["6", "7", "8", "28"], answer: 1, explanation: "Mean = (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7." }
    ],
    biology: [
      { topic: "Ecology", q: "Which organisms break down dead organic matter and recycle nutrients?", options: ["Producers", "Decomposers", "Primary consumers", "Predators only"], answer: 1, explanation: "Decomposers such as many bacteria and fungi break down dead matter and release nutrients." },
      { topic: "Respiration", q: "Which substance is released as a waste product during aerobic respiration?", options: ["Carbon dioxide", "Starch", "Chlorophyll", "Nitrate"], answer: 0, explanation: "Aerobic respiration breaks down food using oxygen and produces carbon dioxide and water." },
      { topic: "Transport in Humans", q: "Which component of blood is mainly responsible for clotting?", options: ["Red blood cells", "Platelets", "Plasma water only", "White blood cells"], answer: 1, explanation: "Platelets help initiate blood clotting to reduce blood loss." }
    ],
    chemistry: [
      { topic: "Chemical Equations", q: "Which equation is balanced for the reaction of hydrogen with oxygen to form water?", options: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → H₂O", "2H₂ + 2O₂ → H₂O"], answer: 1, explanation: "There are four hydrogen atoms and two oxygen atoms on each side of 2H₂ + O₂ → 2H₂O." },
      { topic: "Acids and Metals", q: "When a typical reactive metal reacts with dilute hydrochloric acid, which gas is often produced?", options: ["Chlorine", "Hydrogen", "Carbon dioxide", "Ammonia"], answer: 1, explanation: "A reactive metal and dilute hydrochloric acid commonly form a chloride salt and hydrogen gas." },
      { topic: "Rates of Reaction", q: "Which change generally increases the rate of a reaction between particles?", options: ["Lowering temperature", "Reducing concentration", "Increasing temperature", "Using larger solid pieces only"], answer: 2, explanation: "Higher temperature generally increases particle kinetic energy and the frequency of effective collisions." }
    ],
    english: [
      { topic: "Figures of Speech", q: "Which figure of speech is used in 'The wind whispered through the trees'?", options: ["Personification", "Simile", "Pun", "Understatement"], answer: 0, explanation: "Whispering is a human action attributed to the wind, which is personification." },
      { topic: "Sentence Structure", q: "Which sentence is a complex sentence?", options: ["The bell rang.", "The bell rang, and we left.", "When the bell rang, we left.", "The bell rang; we left."], answer: 2, explanation: "It contains a dependent clause ('When the bell rang') and an independent clause ('we left')." },
      { topic: "Vocabulary", q: "A person who compiles a dictionary is called a:", options: ["Lexicographer", "Cartographer", "Choreographer", "Biographer"], answer: 0, explanation: "A lexicographer writes or edits dictionaries." }
    ]
  },
  4: {
    mathematics: [
      { topic: "Sequences", q: "An arithmetic sequence begins 5, 9, 13, 17. What is the 6th term?", options: ["21", "25", "29", "30"], answer: 1, explanation: "The common difference is 4. The fifth term is 21 and the sixth is 25." },
      { topic: "Probability", q: "A fair six-sided die is rolled once. What is the probability of getting an even number?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explanation: "The even outcomes are 2, 4 and 6: 3 out of 6, which simplifies to 1/2." },
      { topic: "Coordinate Geometry", q: "Find the gradient of the line y = 4x − 7.", options: ["−7", "−4", "4", "7"], answer: 2, explanation: "In y = mx + c, the coefficient of x is the gradient, so m = 4." }
    ],
    biology: [
      { topic: "Genetics", q: "A gene is best described as a section of DNA that:", options: ["Carries information for a functional product", "Digests food in the stomach", "Forms the cell wall in all organisms", "Transports oxygen in blood"], answer: 0, explanation: "A gene is a DNA sequence that contains information used to make a functional RNA or protein product." },
      { topic: "Evolution", q: "Natural selection is more likely to favour inherited traits that:", options: ["Always make organisms larger", "Improve survival or reproduction in a given environment", "Appear because an organism wants them", "Never vary between individuals"], answer: 1, explanation: "Traits that improve reproductive success in a particular environment can become more common over generations." },
      { topic: "Homeostasis", q: "Which organ produces insulin to help regulate blood glucose?", options: ["Pancreas", "Lung", "Kidney only", "Stomach"], answer: 0, explanation: "Cells in the pancreas produce insulin, which helps regulate blood glucose concentration." }
    ],
    chemistry: [
      { topic: "Electrolysis", q: "During electrolysis, positive ions move towards the:", options: ["Anode", "Cathode", "Electrolyte surface only", "Power switch"], answer: 1, explanation: "Positive ions (cations) move towards the negatively charged cathode." },
      { topic: "Organic Chemistry", q: "What is the general formula of alkanes with open chains?", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ", "CₙH₂ₙ₋₂"], answer: 1, explanation: "Acyclic alkanes have the general formula CₙH₂ₙ₊₂." },
      { topic: "Chemical Energetics", q: "In an exothermic reaction, energy is transferred overall:", options: ["From the surroundings into the reacting system", "From the reacting system to the surroundings", "Only between atoms without energy change", "Only when light is absorbed"], answer: 1, explanation: "An exothermic reaction releases energy to its surroundings, often as heat." }
    ],
    english: [
      { topic: "Argumentative Writing", q: "Which feature most strengthens an argumentative essay?", options: ["Unsupported claims repeated many times", "Relevant evidence with reasoned explanations", "Insults directed at opposing views", "A conclusion unrelated to the topic"], answer: 1, explanation: "Relevant evidence and clear reasoning help support a claim and address other viewpoints." },
      { topic: "Grammar", q: "Choose the correct sentence.", options: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither answers is correct.", "Neither of answers are correct."], answer: 1, explanation: "In formal standard English, 'neither' is singular and takes 'is' in this construction." },
      { topic: "Literary Analysis", q: "What is the main purpose of a theme in a literary work?", options: ["To list every character", "To express a central idea explored by the work", "To provide the page numbers", "To replace the plot summary"], answer: 1, explanation: "A theme is a central idea or concern developed through a literary work." }
    ]
  }
};
Object.keys(extraQuestionBank).forEach(form => {
  Object.keys(extraQuestionBank[form]).forEach(subject => {
    quizBank[form][subject].questions.push(...extraQuestionBank[form][subject]);
  });
});

const subjectCards = document.querySelectorAll(".subject-card");
const formSelect = document.getElementById("form-select");
const titleEl = document.getElementById("quiz-title");
const descriptionEl = document.getElementById("quiz-description");
const countEl = document.getElementById("question-count");
const scoreEl = document.getElementById("current-score");
const progressFill = document.getElementById("quiz-progress-fill");
const questionText = document.getElementById("question-text");
const optionsEl = document.getElementById("answer-options");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const questionArea = document.getElementById("question-area");
const resultArea = document.getElementById("result-area");
const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const finalScore = document.getElementById("final-score");
const retryButton = document.getElementById("retry-button");
let activeForm = "1";
let activeSubject = "mathematics";
let questionIndex = 0;
let score = 0;
let answered = false;

function currentQuiz() { return quizBank[activeForm][activeSubject]; }
function startQuiz(subject = activeSubject) {
  activeSubject = subject;
  activeForm = formSelect.value;
  questionIndex = 0; score = 0; answered = false;
  const quiz = currentQuiz();
  titleEl.textContent = `Form ${activeForm} ${quiz.title} quiz`;
  descriptionEl.textContent = `Six practice questions for Form ${activeForm}. Topics are shown with each question. Choose an answer to see feedback.`;
  questionArea.hidden = false; resultArea.hidden = true;
  scoreEl.textContent = "SCORE: 0";
  subjectCards.forEach(card => {
    const selected = card.dataset.subject === activeSubject;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });
  renderQuestion();
}
function renderQuestion() {
  const quiz = currentQuiz(); const item = quiz.questions[questionIndex];
  answered = false;
  countEl.textContent = `QUESTION ${questionIndex + 1} OF ${quiz.questions.length}`;
  progressFill.style.width = `${((questionIndex + 1) / quiz.questions.length) * 100}%`;
  questionText.textContent = item.topic ? `${item.topic}: ${item.q}` : item.q; optionsEl.innerHTML = "";
  feedbackEl.textContent = ""; feedbackEl.className = "feedback";
  nextButton.disabled = true;
  nextButton.textContent = questionIndex === quiz.questions.length - 1 ? "See results →" : "Next question →";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button"; button.className = "answer-option";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener("click", () => chooseAnswer(index));
    optionsEl.appendChild(button);
  });
}
function chooseAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const item = currentQuiz().questions[questionIndex];
  const buttons = [...optionsEl.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && selectedIndex !== item.answer) button.classList.add("incorrect");
  });
  if (selectedIndex === item.answer) {
    score++; feedbackEl.textContent = `Correct! ${item.explanation}`; feedbackEl.classList.add("good");
  } else {
    feedbackEl.textContent = `Not quite. ${item.explanation}`; feedbackEl.classList.add("bad");
  }
  scoreEl.textContent = `SCORE: ${score}`; nextButton.disabled = false;
}
function showResults() {
  const total = currentQuiz().questions.length; const percent = Math.round(score / total * 100);
  questionArea.hidden = true; resultArea.hidden = false; finalScore.textContent = `${score}/${total}`;
  if (percent === 100) { resultTitle.textContent = "Excellent work!"; resultSummary.textContent = `Perfect score in Form ${activeForm}. Try another subject to keep learning.`; }
  else if (percent >= 60) { resultTitle.textContent = "Good progress!"; resultSummary.textContent = "Review any tricky answers and try again."; }
  else { resultTitle.textContent = "Keep practising!"; resultSummary.textContent = "Read the explanations and give it another try. Every attempt helps."; }
  document.getElementById("result-icon").textContent = percent >= 60 ? "✓" : "↻";
}
subjectCards.forEach(card => {
  card.setAttribute("aria-pressed", String(card.dataset.subject === activeSubject));
  card.addEventListener("click", () => {
    startQuiz(card.dataset.subject);
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
formSelect.addEventListener("change", () => startQuiz(activeSubject));
nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (questionIndex < currentQuiz().questions.length - 1) { questionIndex++; renderQuestion(); }
  else showResults();
});
retryButton.addEventListener("click", () => startQuiz(activeSubject));
document.getElementById("year").textContent = new Date().getFullYear();
startQuiz(activeSubject);
