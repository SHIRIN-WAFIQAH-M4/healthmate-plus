const questions = [
    "How often do you feel tired?",
    "How is your sleep quality?",
    "Do you exercise?",
    "How frequently do you consume junk food?",
    "Do you smoke or consume alcohol?",
    "How much water do you drink daily?",
    "Do you experience headaches?",
    "How is your stress level?",
    "Do you feel shortness of breath?",
    "How often do you fall sick?",
    "Do you have back or joint pain?",
    "How is your digestion?",
    "How often do you eat fruits/vegetables?",
    "Do you take medicines regularly?",
    "How is your mood usually?"
];

const options = [
    ["Very Often", "Sometimes", "Rarely"],
    ["Poor", "Average", "Good"],
    ["Never", "Sometimes", "Regularly"],
    ["Very Often", "Occasionally", "Rarely"],
    ["Yes", "Occasionally", "Never"],
    ["Less than 1L", "1–2L", "More than 2L"],
    ["Often", "Sometimes", "Rarely"],
    ["High", "Moderate", "Low"],
    ["Yes", "Sometimes", "No"],
    ["Very Often", "Sometimes", "Rarely"],
    ["Often", "Sometimes", "No"],
    ["Poor", "Normal", "Healthy"],
    ["Rarely", "Sometimes", "Daily"],
    ["Yes", "Sometimes", "Rarely"],
    ["Low / Irritated", "Neutral", "Happy / Stable"]
];

const riskValues = ["High Risk", "Medium Risk", "Low Risk"];

const form = document.getElementById("assessmentForm");

questions.forEach((question, index) => {
    const container = document.createElement("div");
    container.classList.add("question");

    container.innerHTML = `<p>${index + 1}. ${question}</p>`;

    options[index].forEach((option, optIndex) => {
        container.innerHTML += `
            <label>
                <input type="radio" name="q${index+1}" value="${riskValues[optIndex]}">
                ${option}
            </label>
        `;
    });

    form.appendChild(container);
});

document.getElementById("generateBtn").addEventListener("click", () => {
    const answers = new FormData(form);
    let high = 0, medium = 0, low = 0;

    for (let entry of answers) {
        if (entry[1] === "High Risk") high++;
        else if (entry[1] === "Medium Risk") medium++;
        else low++;
    }

    let result = "";
    if (high >= 6) result = "⚠️ High Risk: Immediate lifestyle changes and medical advice recommended.";
    else if (medium >= 6) result = "⚠ Moderate Risk: Improve diet, exercise, water intake, and reduce stress.";
    else result = "✅ Low Risk: You seem healthy. Maintain good habits!";

    const report = document.getElementById("report");
    report.innerHTML = `<strong>Health Report:</strong><br><br>${result}`;
    report.style.display = "block";

    setTimeout(() => {
        report.scrollIntoView({ behavior: "smooth" });
    }, 300);
});
