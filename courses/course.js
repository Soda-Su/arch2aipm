function renderList(items, containerId, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (className) li.className = className;
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderResources(items) {
  const container = document.getElementById("resources");
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = item.label;
    li.appendChild(a);
    container.appendChild(li);
  });
}

function renderCourse() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const course = window.COURSE_DATA?.[id];

  if (!course) {
    document.title = "课程未找到";
    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = `
        <a class="back-link" href="../index.html#course-library">← 返回课程列表</a>
        <section class="card-section">
          <article class="card"><h2>课程未找到</h2><p>请从首页课程列表重新进入。</p></article>
        </section>
      `;
    }
    return;
  }

  document.title = `课程详情 - ${course.title}`;
  document.getElementById("courseBadge").textContent = course.badge;
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseSummary").textContent = course.summary;
  document.getElementById("chipDifficulty").textContent = `难度: ${course.difficulty}`;
  document.getElementById("chipDuration").textContent = `时长: ${course.duration}`;
  document.getElementById("chipOutput").textContent = `输出: ${course.output}`;

  renderList(course.goals || [], "goalsList");
  renderList(course.modules || [], "modulesList");
  renderList(course.assignments || [], "assignmentsList");
  renderResources(course.resources || []);

  const acceptance = document.getElementById("acceptance");
  acceptance.textContent = `验收标准：${course.acceptance || ""}`;

  const timelineSection = document.getElementById("timelineSection");
  if (course.timeline && course.timeline.length > 0) {
    timelineSection.hidden = false;
    renderList(course.timeline, "timelineList");
  } else {
    timelineSection.hidden = true;
  }
}

renderCourse();
