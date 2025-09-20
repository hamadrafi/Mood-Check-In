const moods = {
  happy: {
    question: "Yay! What's making you so happy today? 🎀",
    options: [
      "🌸 Beautiful day",
      "💕 Love vibes",
      "🎉 Achievement",
      "😂 Funny moment",
      "🍰 Good food",
      "🎶 Favorite song playing",
    ],
    image: "imgs/happy-cat.jpg",
    message: "Yay! Keep shining bright 🌸✨",
  },
  sick: {
    question: "Oh no 😢 What’s bothering you?",
    options: [
      "🤧 Cold/Flu",
      "🤕 Headache",
      "🌡️ Fever",
      "🤢 Nausea",
      "😷 Cough",
      "🥶 Feeling weak",
    ],
    image: "imgs/sick-cat.jpg",
    message: "Sending healing vibes 💗 Please rest well!",
  },
  tired: {
    question: "You must be exhausted 😴 What made you tired?",
    options: [
      "💻 Work overload",
      "🛏️ No sleep",
      "🏃 Too much activity",
      "😵 Mental fatigue",
      "🚌 Long commute",
      "📚 Studied too much",
    ],
    image: "imgs/tired-cat.jpg",
    message: "Take a deep breath and recharge 🌙✨",
  },
  sad: {
    question: "Aww 💔 What's on your heart?",
    options: [
      "💔 Love issues",
      "😔 Bad day",
      "😢 Missing someone",
      "📉 Disappointment",
      "💭 Overthinking",
      "🥺 Just feeling low",
    ],
    image: "imgs/sad-cat.jpg",
    message: "You're not alone 💕 Big hugs for you 🤗",
  },
  angry: {
    question: "Grr 😠 What's making you upset?",
    options: [
      "👥 Someone annoyed me",
      "📅 Stressful day",
      "🚫 Plans ruined",
      "💻 Tech issues",
      "💸 Money stress",
      "🤯 Everything at once",
    ],
    image: "imgs/angry-cat.jpg",
    message: "Deep breaths 🌬️ Let's cool down together 💕",
  },
  stressed: {
    question: "Oof 😵 What's causing stress?",
    options: [
      "💼 Work",
      "📚 Exams",
      "👨‍👩‍👧 Family",
      "💰 Finances",
      "❤️ Relationship",
      "🤔 Uncertainty",
    ],
    image: "imgs/stressed-cat.jpg",
    message: "Remember: you are stronger than you think 💪💕",
  },
};

let currentMood = null;

function selectMood(mood) {
  currentMood = moods[mood];
  document.getElementById("welcome").style.display = "none";
  document.getElementById("followup").style.display = "block";
  document.getElementById("followupQuestion").textContent =
    currentMood.question;
  const container = document.getElementById("followupOptions");
  container.innerHTML = "";
  currentMood.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "followup-btn";
    btn.textContent = opt;
    btn.onclick = () => showResponse();
    container.appendChild(btn);
  });
}

function showResponse() {
  document.getElementById("followup").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("responseMessage").textContent = currentMood.message;
  document.getElementById("catImage").src = currentMood.image;
}

function resetApp() {
  document.getElementById("response").style.display = "none";
  document.getElementById("welcome").style.display = "block";
}
