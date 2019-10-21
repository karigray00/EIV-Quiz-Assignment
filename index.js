const STORE = [
    {
      question: 'A site is financed by multiple programs, including the Low Income Housing Tax Credit (LIHTC) program.  An LIHTC monitoring agent is auditing the site’s files.  Which of the following statements is correct? ',
      answers: [
        'The LIHTC monitoring agent can view the EIV data, but cannot use it to calculate income for the file review.',
        'The LIHTC monitoring agent can view the EIV data, but only if he/she signs a Rules of Behavior certification.',
        'The LIHTC monitoring agent is prohibited from viewing any EIV data.',
        'The LIHTC monitoring agent must view the EIV data and use it to calculate income for the file review.'
      ],
      correctAnswer:
        'The LIHTC monitoring agent is prohibited from viewing any EIV data.'
    },
    {
      question:
        'Which of the following reports are management agents NOT required to run?',
      answers: [
        'Deceased Tenants Report',
        'Income Discrepancy Report',
        'Multiple Subsidy Report',
        'No Income Report'
      ],
      correctAnswer:
        'No Income Report'
    },
    {
      question:
        'The EIV Income Report obtains employment and income information from what two databases?',
      answers: [
        'Social Security Administration (SSA) and National Directory of New Hires (NDNH)',
        'Real Estate Assessment Center (REAC) and Tenant Rental Assistance Certification System (TRACS)',
        'Tenant Rental Assistance Certification System (TRACS) and Social Security Administration (SSA)',
        'National Database of New Hires (NDNH) and Tenant Rental Assistance Certification System (TRACS)'
      ],
      correctAnswer: 'Social Security Administration (SSA) and National Directory of New Hires (NDNH)'
    },
    {
      question: 'What type of income is does NOT get reported on an EIV Income Report?',
      answers: [
        'Social Security Benefits',
        'Employment Income',
        'Unemployment Benefits',
        'Public Assistance Benefits'
      ],
      correctAnswer: 'Public Assistance Benefits'
    },
    {
      question:
        'An EIV Income Discrepancy Report identifies households where there is a difference of $________ or more in wages, unemployment compensation and/or Social Security Administration benefits for the Period of Income (POI) as a result of the match between the data in TRACS and EIV?',
      answers: [
        '$1,200',
        '$2,400',
        '$3,600',
        '$5,000'
      ],
      correctAnswer:
        '$2,400'
    }
];

const sectionIds = ['startQuizBox', 'questionBox', 'correctAnswer', 'incorrectAnswer', 'finalScore'];
let currentQuestion = 0;
let currentScore = 0;

function showSection(idToShow) {
    sectionIds.forEach((sectionId) => {
        if (sectionId === idToShow) {
            $('#' + idToShow).show();
        }
        else {
            $('#' + sectionId).hide();
        }
    });
}

function updateHeader() {
    $('.currentScore').text(currentScore)
    $('#currentQuestion').text(currentQuestion);
}

function setupPage() {
    updateHeader();
    $('#totalQuestions').text(STORE.length);
    showSection('startQuizBox');
    $("form").submit(function(event) {
        let selected = $('#questionBox input:checked').val();
        let correct = STORE[currentQuestion-1].correctAnswer;
        if (selected === correct) {
            showSection('correctAnswer');
            $('.correct').text(correct);
            currentScore++;
            updateHeader();
        }
        else {
            showSection('incorrectAnswer');
            $('.correct').text(correct);
        }
        event.preventDefault();
    });
}

function showNext() {
    if (currentQuestion < STORE.length) {
        showNextQuestion();
    }
    else {
        showFinalScore();
        $('#totalPoints').text(currentScore);
        $('#correctQuestions').text(currentScore);
    }
}
function showNextQuestion() {
    showSection('questionBox');
    currentQuestion++;
    setUpAnswers();
    setUpQuestions();
    updateHeader();
    $('#questionBox').find("input:checked").prop("checked", false)
}

function setUpQuestions() {
    const question = STORE[currentQuestion - 1].question;
    $('.questionText').text(question);
}
function setUpAnswers() {
    const answer1 = STORE[currentQuestion - 1].answers[0] 
    const answer2 = STORE[currentQuestion - 1].answers[1]
    const answer3 = STORE[currentQuestion - 1].answers[2]
    const answer4 = STORE[currentQuestion - 1].answers[3]
    $('.answer1').text(answer1);
    $('#1').val(answer1);
    $('.answer2').text(answer2);
    $('#2').val(answer2);
    $('.answer3').text(answer3);
    $('#3').val(answer3);
    $('.answer4').text(answer4);
    $('#4').val(answer4);
}

function showFinalScore() {
    showSection('finalScore');
}

function retakeQuiz() {
    currentQuestion = 0;
    currentScore = 0;
    updateHeader();
    showNextQuestion();
}
setupPage();

//variables to store the quiz score and question number

//function to generate each question

//update score

//update question number

//begin quiz

//submits a selected answer and compares it to the correct answer
//run answer function accordingly

//feedback for correct answer

//feedback for incorrect answer

//determines how many questions were correct and gives final score  at the end of the quiz

//restart quiz