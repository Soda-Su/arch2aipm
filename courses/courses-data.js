window.COURSE_DATA = {
  "ai-pm-role-map": {
    title: "AI 产品经理角色地图",
    badge: "Course 01",
    difficulty: "入门",
    duration: "40-55 分钟",
    output: "角色地图 + 能力差距表",
    summary:
      "从建筑师视角建立 AI PM 的岗位认知、协作边界与胜任力模型，避免“只会写提示词”的转型误区。",
    goals: [
      "区分 PM、PO、设计、工程、算法在 AI 项目中的职责边界。",
      "理解 AI PM 的核心交付物：问题定义、方案范围、评估机制、上线治理。",
      "把建筑师经验映射成可迁移优势（系统思维、跨专业协同、规范意识）。",
    ],
    modules: [
      "模块 A: AI PM 价值定位（从“功能负责人”到“系统价值负责人”）",
      "模块 B: 职责接口图（业务/设计/工程/法务）",
      "模块 C: 30-60-90 天入岗行动框架",
    ],
    assignments: [
      "输出《我的 AI PM 角色地图（1 页）》。",
      "定义你未来岗位的 5 个关键职责。",
      "盘点你当前最强的 3 项可迁移能力。",
      "明确未来 6 周必须补齐的 3 个短板。",
    ],
    acceptance:
      "内容可被面试官在 3 分钟内读懂，并能直接展开追问。",
    resources: [
      {
        label: "Atlassian: Product Manager Role & Responsibilities",
        href: "https://www.atlassian.com/agile/product-management/product-manager",
      },
      {
        label: "Atlassian: Product Management",
        href: "https://www.atlassian.com/agile/product-management",
      },
      {
        label: "OpenAI: Model Optimization",
        href: "https://platform.openai.com/docs/guides/model-optimization",
      },
      {
        label: "OpenAI: Evaluation Best Practices",
        href: "https://platform.openai.com/docs/guides/evaluation-best-practices",
      },
    ],
  },
  "prompt-and-evals": {
    title: "Prompt 设计与评估入门",
    badge: "Course 02",
    difficulty: "入门",
    duration: "60-75 分钟",
    output: "Prompt 模板 + 小型 Eval 表",
    summary:
      "把“会写提示词”升级为“能稳定交付结果”：建立模板、对照、评分和迭代流程。",
    goals: [
      "掌握 System/User 指令分层与变量化模板设计。",
      "理解 few-shot、结构化输出与错误回退策略。",
      "搭建最小可用评估集，避免“拍脑袋”判断效果。",
    ],
    modules: [
      "模块 A: Prompt 结构与复用（模板、版本、变量）",
      "模块 B: 评估设计（通过/失败定义、边界样本）",
      "模块 C: 迭代闭环（日志 → 数据集 → 调整）",
    ],
    assignments: [
      "为“建筑规范问答”写 1 版 Prompt 模板（含约束与输出格式）。",
      "准备 15 条测试样本（正常/边界/对抗各 5 条）。",
      "定义 3 个评分维度（准确性、可引用性、可执行性）。",
    ],
    acceptance:
      "2 轮迭代后失败率下降，且能明确解释“为何改进”。",
    resources: [
      {
        label: "OpenAI: Prompting Guide",
        href: "https://platform.openai.com/docs/guides/prompting",
      },
      {
        label: "OpenAI: Prompt Optimizer",
        href: "https://platform.openai.com/docs/guides/prompt-optimizer",
      },
      {
        label: "OpenAI: Getting Started with Datasets",
        href: "https://platform.openai.com/docs/guides/evaluation-getting-started",
      },
      {
        label: "OpenAI: Evaluation Best Practices",
        href: "https://platform.openai.com/docs/guides/evaluation-best-practices",
      },
      {
        label: "OpenAI: Graders",
        href: "https://platform.openai.com/docs/guides/graders",
      },
      {
        label: "Anthropic: Prompt Engineering Overview",
        href: "https://docs.anthropic.com/en/docs/prompt-engineering",
      },
    ],
  },
  "rag-architecture": {
    title: "RAG 产品架构拆解",
    badge: "Course 03",
    difficulty: "进阶",
    duration: "90-110 分钟",
    output: "RAG 方案图 + 评估表",
    summary:
      "从“能答”到“答得准、答得稳、答得可追溯”：建立面向真实业务的 RAG 产品框架。",
    goals: [
      "理解数据入口、切分策略、索引更新与召回质量的关系。",
      "掌握检索与生成分层评估，定位错误在“找不到”还是“生成错”。",
      "建立可追溯输出（引用片段、来源文档、时间戳）的产品标准。",
    ],
    modules: [
      "模块 A: 知识库与向量索引（更新策略、元数据）",
      "模块 B: 检索策略（语义检索、过滤、重排）",
      "模块 C: 答案生成与引用可追溯",
      "模块 D: 线上监控与失败分层复盘",
    ],
    assignments: [
      "以“建筑法规问答助手”为例，输出 1 张 RAG 架构图。",
      "准备 30 条测试问题，覆盖新旧规范冲突场景。",
      "输出错误归因表（检索失败/生成幻觉/引用缺失）。",
    ],
    acceptance:
      "每条回答都可追溯到来源片段，且错误有分类与处置方案。",
    resources: [
      {
        label: "OpenAI: Retrieval Guide",
        href: "https://platform.openai.com/docs/guides/retrieval",
      },
      {
        label: "OpenAI: File Search Tool",
        href: "https://platform.openai.com/docs/guides/tools-file-search",
      },
      {
        label: "OpenAI: Embeddings Guide",
        href: "https://platform.openai.com/docs/guides/embeddings",
      },
      {
        label: "OpenAI: text-embedding-3-large",
        href: "https://platform.openai.com/docs/models/text-embedding-3-large",
      },
      {
        label: "Google Cloud: Vertex AI RAG Engine Overview",
        href: "https://cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-overview",
      },
    ],
  },
  "ai-metrics-sprint": {
    title: "AI 指标体系速练",
    badge: "Course 04",
    difficulty: "进阶",
    duration: "45-60 分钟",
    output: "指标树 + 实验看板草案",
    summary:
      "建立可执行的指标树，把“模型效果、用户体验、业务结果”放进同一个决策框架。",
    goals: [
      "定义 North Star Metric 与输入指标的关系。",
      "理解 HEART 在 AI 产品中的映射。",
      "把模型质量指标（准确率、拒答率、引用率）接入产品决策。",
    ],
    modules: [
      "模块 A: 指标分层（北极星、行为、质量、成本）",
      "模块 B: 指标诊断（发现“高活跃低价值”陷阱）",
      "模块 C: 实验设计（假设-实验-结论-复用）",
    ],
    assignments: [
      "为你的 AI 产品写 1 个北极星指标（附定义与计算口径）。",
      "拆出 5 个输入指标（获客、激活、留存、质量、成本）。",
      "写 1 个实验计划（目标、样本、成功阈值、风险预案）。",
    ],
    acceptance:
      "能解释“为什么这个指标代表用户价值，而不是只代表流量”。",
    resources: [
      {
        label: "Google Research (CHI 2010): HEART Framework 原论文",
        href: "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/",
      },
      {
        label: "Amplitude: North Star Metric Hub",
        href: "https://amplitude.com/north-star-hub",
      },
      {
        label: "Amplitude: North Star Metric Practical Guide",
        href: "https://amplitude.com/en-us/blog/product-north-star-metric",
      },
      {
        label: "OpenAI: Evaluation Best Practices",
        href: "https://platform.openai.com/docs/guides/evaluation-best-practices",
      },
    ],
  },
  "architecture-ai-opportunity-map": {
    title: "建筑行业 AI 场景发现清单",
    badge: "Course 05",
    difficulty: "入门",
    duration: "35-50 分钟",
    output: "机会清单 + 优先级矩阵",
    summary:
      "把建筑业务流程拆解为可落地的 AI 产品机会，优先做“高频、可验证、可迭代”的场景。",
    goals: [
      "按建筑全流程识别 AI 机会：前期策划、概念设计、规范校核、施工协同、运维反馈。",
      "使用“价值 x 可行性 x 风险”三维方法做优先级排序。",
      "形成可直接写入作品集的 3 个候选产品方向。",
    ],
    modules: [
      "模块 A: 行业趋势与约束（效率、版权、责任边界）",
      "模块 B: 机会识别（任务级拆解）",
      "模块 C: 机会评估（优先级打分与 MVP 定义）",
    ],
    assignments: [
      "列出 15 个建筑场景中的重复性任务。",
      "选 3 个任务完成“价值/可行性/风险”打分。",
      "确定 1 个 MVP，并写出 2 周交付范围。",
    ],
    acceptance:
      "MVP 目标用户明确，且可在作品集中展示“改进前后对比”。",
    resources: [
      {
        label: "RIBA AI Report 2025",
        href: "https://www.architecture.com/knowledge-and-resources/resources-landing-page/riba-ai-report-2025",
      },
      {
        label: "RIBA AI Report 2024",
        href: "https://www.architecture.com/knowledge-and-resources/resources-landing-page/riba-ai-report-2024",
      },
      {
        label: "RIBA: 2025 调研摘要（2025-06-27）",
        href: "https://www.architecture.com/knowledge-and-resources/knowledge-landing-page/second-riba-ai-report-shows-surge-in-usage-among-uk-architects",
      },
      {
        label: "Autodesk AI for Design & Make",
        href: "https://www.autodesk.com/solutions/autodesk-ai",
      },
      {
        label: "Autodesk: AI in Architecture & Engineering",
        href: "https://www.autodesk.com/solutions/ai-in-architecture-engineering",
      },
      {
        label: "AIA AI Task Force（发布于 2026-01-29）",
        href: "https://www.aia.org/resource-center/ai-task-force",
      },
    ],
  },
  "ai-risk-compliance": {
    title: "AI 产品风险与合规实操",
    badge: "Course 06",
    difficulty: "进阶",
    duration: "80-100 分钟",
    output: "风险台账 + 上线门禁清单",
    summary:
      "建立可落地的风险治理机制：从模型风险识别到上线前控制，再到持续监测与事件响应。",
    goals: [
      "掌握 NIST AI RMF 的四大功能：Govern、Map、Measure、Manage。",
      "理解 EU AI Act 的关键时间点与组织影响。",
      "形成“上线前门禁 + 上线后监测 + 事故处置”三段式治理方案。",
    ],
    timeline: [
      "2024-08-01: EU AI Act 生效（entered into force）。",
      "2025-02-02: 禁止性条款与 AI literacy 要求开始适用。",
      "2025-08-02: 治理规则与 GPAI 相关义务开始适用。",
      "2026-08-02: AI Act 多数条款全面适用。",
      "2027-08-02: 部分高风险系统过渡期结束（特定场景）。",
    ],
    assignments: [
      "输出风险台账：风险项、严重度、概率、控制措施、责任人。",
      "输出上线门禁：数据、模型、内容安全、合规、人工兜底。",
      "输出应急流程：触发条件、止损动作、对外沟通与复盘机制。",
    ],
    acceptance:
      "任何风险项都可追踪到负责人、监控指标和关闭标准。",
    resources: [
      {
        label: "NIST: AI Risk Management Framework (AI RMF 1.0)",
        href: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
      {
        label: "NIST AI 600-1: Generative AI Profile（2024-07-26）",
        href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
      },
      {
        label: "NIST AI RMF Playbook",
        href: "https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook",
      },
      {
        label: "EUR-Lex: Regulation (EU) 2024/1689",
        href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      },
      {
        label: "European Commission: AI Act Timeline",
        href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      },
      {
        label: "EC News: First rules applicable（2025-02-03）",
        href: "https://digital-strategy.ec.europa.eu/en/news/first-rules-artificial-intelligence-act-are-now-applicable",
      },
      {
        label: "OECD AI Principles",
        href: "https://oecd.ai/ai-principles/",
      },
      {
        label: "ISO/IEC 42001:2023（AIMS）",
        href: "https://www.iso.org/standard/42001",
      },
    ],
  },
};
