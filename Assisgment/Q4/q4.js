// =====================================================
// GET HTML ELEMENTS
// =====================================================

const gradeForm =
    document.getElementById("gradeForm");

const resetBtn =
    document.getElementById("resetBtn");

const errorMessage =
    document.getElementById("errorMessage");

const resultSection =
    document.getElementById("resultSection");


// =====================================================
// SUBJECT DETAILS
// =====================================================

const subjects = [
    {
        id: "subject1",
        name: "Mathematics"
    },
    {
        id: "subject2",
        name: "Computer Science"
    },
    {
        id: "subject3",
        name: "Physics"
    },
    {
        id: "subject4",
        name: "Chemistry"
    },
    {
        id: "subject5",
        name: "English"
    }
];


// =====================================================
// FORM SUBMISSION
// =====================================================

gradeForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Hide previous error
        errorMessage.style.display = "none";


        // Get student name
        const studentName =
            document.getElementById("studentName")
            .value.trim();


        // Check name
        if (studentName === "") {

            showError(
                "Please enter the student's name."
            );

            return;
        }


        // Store marks
        let marks = [];

        let total = 0;


        // Get marks from all subjects
        for (let subject of subjects) {

            const input =
                document.getElementById(subject.id);

            const mark =
                Number(input.value);


            // Validate mark
            if (
                input.value === "" ||
                mark < 0 ||
                mark > 100 ||
                isNaN(mark)
            ) {

                showError(
                    subject.name +
                    " marks must be between 0 and 100."
                );

                return;
            }


            marks.push({
                name: subject.name,
                mark: mark
            });


            total += mark;
        }


        // =================================================
        // CALCULATIONS
        // =================================================

        const percentage =
            (total / 500) * 100;


        // Get grade
        const grade =
            calculateGrade(percentage);


        // Get pass/fail status
        const status =
            percentage >= 40
                ? "PASS"
                : "FAIL";


        // =================================================
        // DISPLAY RESULT
        // =================================================

        document.getElementById(
            "resultStudent"
        ).textContent =
            "Result for " + studentName;


        document.getElementById(
            "totalMarks"
        ).textContent =
            total;


        document.getElementById(
            "percentage"
        ).textContent =
            percentage.toFixed(2);


        document.getElementById(
            "gradeValue"
        ).textContent =
            grade;


        document.getElementById(
            "gradeText"
        ).textContent =
            grade;


        document.getElementById(
            "status"
        ).textContent =
            status;


        // Display subject performance
        displaySubjectPerformance(marks);


        // Display result message
        displayResultMessage(
            grade,
            percentage,
            status
        );


        // Show result section
        resultSection.style.display = "block";


        // Scroll to result
        resultSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


// =====================================================
// GRADE CALCULATION
// =====================================================

function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    }

    if (percentage >= 80) {
        return "A";
    }

    if (percentage >= 70) {
        return "B";
    }

    if (percentage >= 60) {
        return "C";
    }

    if (percentage >= 50) {
        return "D";
    }

    return "F";
}


// =====================================================
// DISPLAY SUBJECT PERFORMANCE
// =====================================================

function displaySubjectPerformance(marks) {

    const container =
        document.getElementById(
            "subjectResults"
        );


    // Clear old result
    container.innerHTML = "";


    for (let subject of marks) {

        const row =
            document.createElement("div");

        row.className =
            "subject-row";


        row.innerHTML = `
            <div class="subject-name">
                ${subject.name}
            </div>

            <div class="progress-bar">
                <div
                    class="progress"
                    style="width: ${subject.mark}%">
                </div>
            </div>

            <div class="subject-mark">
                ${subject.mark}/100
            </div>
        `;


        container.appendChild(row);
    }
}


// =====================================================
// RESULT MESSAGE
// =====================================================

function displayResultMessage(
    grade,
    percentage,
    status
) {

    const message =
        document.getElementById(
            "resultMessage"
        );


    if (status === "FAIL") {

        message.textContent =
            "Keep working hard. You can improve your " +
            "performance with consistent practice.";

        return;
    }


    if (grade === "A+" || grade === "A") {

        message.textContent =
            "Excellent performance! Keep up the " +
            "great work and continue aiming higher.";

    } else if (grade === "B") {

        message.textContent =
            "Good performance! With a little more " +
            "effort, you can reach the next grade.";

    } else {

        message.textContent =
            "You have passed. Focus on your weaker " +
            "subjects to improve your overall result.";
    }
}


// =====================================================
// ERROR MESSAGE
// =====================================================

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.style.display =
        "block";

    errorMessage.scrollIntoView({
        behavior: "smooth"
    });
}


// =====================================================
// RESET
// =====================================================

resetBtn.addEventListener(
    "click",
    function() {

        // Clear form
        gradeForm.reset();


        // Hide result
        resultSection.style.display =
            "none";


        // Hide error
        errorMessage.style.display =
            "none";


        // Scroll to form
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);