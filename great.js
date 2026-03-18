function calculate() {

    let name = document.getElementById("name").value;

    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let s4 = Number(document.getElementById("s4").value);
    let s5 = Number(document.getElementById("s5").value);

    let result = document.getElementById("result");

    // Validation
    if (name === "" || !s1 || !s2 || !s3 || !s4 || !s5) {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter all details correctly!";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) grade = "A 🏆";
    else if (percentage >= 75) grade = "B 🎯";
    else if (percentage >= 60) grade = "C 👍";
    else if (percentage >= 50) grade = "D ⚠️";
    else grade = "Fail ❌";

    result.style.display = "block";

    result.innerHTML = `
        👤 Name: <span class="highlight">${name}</span><br>
        📊 Total: <span class="highlight">${total}</span><br>
        📈 Percentage: <span class="highlight">${percentage.toFixed(2)}%</span><br>
        🏅 Grade: <span class="highlight">${grade}</span>
    `;
}