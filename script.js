const filterState = {
  level: "all",
  duration: "all",
};

const ASSESSMENT_KEY = "arch2ai-assessment";

const QUESTION_TO_COURSES = {
  q1: ["architecture-ai-opportunity-map"],
  q2: ["ai-pm-role-map"],
  q3: ["prompt-and-evals"],
  q4: ["rag-architecture"],
  q5: ["ai-metrics-sprint", "ai-risk-compliance"],
};

function updateCourseFilter() {
  const cards = document.querySelectorAll(".course-card");
  cards.forEach((card) => {
    const levelOK =
      filterState.level === "all" || card.dataset.level === filterState.level;
    const durationOK =
      filterState.duration === "all" ||
      card.dataset.duration === filterState.duration;
    card.classList.toggle("is-hidden", !(levelOK && durationOK));
  });
}

function initFilters() {
  const filterWrap = document.getElementById("filters");
  if (!filterWrap) return;

  filterWrap.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;

    const type = btn.dataset.filterType;
    const value = btn.dataset.filterValue;
    if (!type || !value) return;

    filterState[type] = value;
    document
      .querySelectorAll(`.filter-btn[data-filter-type="${type}"]`)
      .forEach((el) => {
        el.classList.remove("is-active");
      });
    btn.classList.add("is-active");
    updateCourseFilter();
  });

  updateCourseFilter();
}

function collectAssessmentState() {
  const state = {};
  document
    .querySelectorAll('#assessmentForm input[type="checkbox"]')
    .forEach((box) => {
      state[box.dataset.questionId] = box.checked;
    });
  return state;
}

function setAssessmentState(state) {
  document
    .querySelectorAll('#assessmentForm input[type="checkbox"]')
    .forEach((box) => {
      box.checked = Boolean(state[box.dataset.questionId]);
    });
}

function loadAssessmentState() {
  const raw = localStorage.getItem(ASSESSMENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (err) {
    localStorage.removeItem(ASSESSMENT_KEY);
    return null;
  }
}

function saveAssessmentState(state) {
  localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(state));
}

function getCompletedCourseSet(state) {
  const completed = new Set();
  Object.entries(state).forEach(([questionId, checked]) => {
    if (!checked) return;
    (QUESTION_TO_COURSES[questionId] || []).forEach((courseId) => {
      completed.add(courseId);
    });
  });
  return completed;
}

function renderAssessmentResult(completedSet) {
  const allCards = Array.from(document.querySelectorAll(".course-card"));
  const completedTitles = [];
  const pendingTitles = [];

  allCards.forEach((card) => {
    const courseId = card.dataset.courseId;
    const title = card.querySelector("h3")?.textContent || "未命名课程";
    const statusEl = card.querySelector(".course-status");
    const done = completedSet.has(courseId);
    card.classList.toggle("is-completed", done);
    if (statusEl) {
      statusEl.textContent = done ? "状态：已完成（评估）" : "状态：建议学习";
    }
    if (done) {
      completedTitles.push(title);
    } else {
      pendingTitles.push(title);
    }
  });

  const summary = document.getElementById("assessmentSummary");
  const summaryText =
    `评估完成：已具备 ${completedTitles.length} / ${allCards.length} 个模块经验。` +
    ` 免修：${completedTitles.join("、") || "无"}。` +
    ` 建议优先学习：${pendingTitles.slice(0, 2).join("、") || "无"}。`;
  if (summary) summary.textContent = summaryText;
}

function runAssessment() {
  const state = collectAssessmentState();
  saveAssessmentState(state);
  const completedSet = getCompletedCourseSet(state);
  renderAssessmentResult(completedSet);
}

function initAssessment() {
  const form = document.getElementById("assessmentForm");
  if (!form) return;
  const modal = document.getElementById("assessmentModal");

  const openModal = () => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  const saved = loadAssessmentState();
  if (saved) {
    setAssessmentState(saved);
    renderAssessmentResult(getCompletedCourseSet(saved));
    closeModal();
  } else {
    renderAssessmentResult(new Set());
    openModal();
  }

  const runBtn = document.getElementById("runAssessment");
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      runAssessment();
      closeModal();
    });
  }

  const resetBtn = document.getElementById("resetAssessment");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(ASSESSMENT_KEY);
      setAssessmentState({});
      renderAssessmentResult(new Set());
    });
  }

  const closeBtn = document.getElementById("closeAssessment");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  }

}

function renderProgress() {
  const boxes = document.querySelectorAll('#taskList input[type="checkbox"]');
  const done = Array.from(boxes).filter((b) => b.checked).length;
  const total = boxes.length;
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");
  if (progressText) progressText.textContent = `已完成 ${done} / ${total}`;
  if (progressFill)
    progressFill.style.width = `${Math.round((done / total) * 100)}%`;
}

function saveProgress() {
  const state = {};
  document
    .querySelectorAll('#taskList input[type="checkbox"]')
    .forEach((box) => {
      state[box.dataset.taskId] = box.checked;
    });
  localStorage.setItem("arch2ai-progress", JSON.stringify(state));
}

function loadProgress() {
  const raw = localStorage.getItem("arch2ai-progress");
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    document
      .querySelectorAll('#taskList input[type="checkbox"]')
      .forEach((box) => {
        box.checked = Boolean(state[box.dataset.taskId]);
      });
  } catch (err) {
    localStorage.removeItem("arch2ai-progress");
  }
}

function initTracker() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  loadProgress();
  renderProgress();

  taskList.addEventListener("change", (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
      saveProgress();
      renderProgress();
    }
  });

  const resetBtn = document.getElementById("resetTracker");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document
        .querySelectorAll('#taskList input[type="checkbox"]')
        .forEach((box) => {
          box.checked = false;
        });
      saveProgress();
      renderProgress();
    });
  }
}

initFilters();
initAssessment();
initTracker();
