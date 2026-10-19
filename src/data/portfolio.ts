/**
 * Central portfolio data — generated from Shreyans's resume (shrey.tex).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shreyans Jain',
  displayName: 'Shreyans Jain',
  firstName: 'SHREYANS',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A JAIN ORIGINAL',
  role: 'AI/ML Engineer',
  tagline: ['AI / ML Engineer', 'Agentic AI', 'LLM Systems'],
  intro: 'AI/ML Engineer building multi-agent systems, RAG pipelines and real-time multimodal AI with LangGraph, Gemini and Google Cloud.',
  location: 'Bengaluru',
  email: 'shreyansjain.placement@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shreyans-jain-9255351a7/',
    github: 'https://github.com/Shreyyyyy',
  },
  resumePdf: '/assets/Shreyans_Jain_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Avatar of Shreyans Jain',
  },
  /** "Specializing in" chips — from the resume summary. */
  interests: ['LLM Systems', 'Agentic AI', 'Retrieval-Augmented Generation', 'Production ML Infrastructure'],
};

export const education: { school: string; place: string; degree: string; short: string; period: string; score?: string }[] = [
  {
    school: 'CHRIST (Deemed to be University)',
    place: 'Bangalore',
    degree: 'Master of Computer Applications',
    short: 'MCA',
    period: 'Jul 2023 – Apr 2025',
  },
  {
    school: 'Vellore Institute of Technology (VIT)',
    place: 'Vellore',
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    period: 'Jul 2020 – Apr 2023',
  },
];

export const experience = [
  {
    company: 'Dentsu',
    role: 'Gen AI Engineer',
    place: 'Bengaluru, India',
    period: 'May 2026 – Present',
    points: [
      'Designed and implemented multi-agent AI systems using Google ADK, Gemini, LangGraph and tool calling, decomposing complex workflows into specialized agents for planning, retrieval, reasoning and execution.',
      'Built a real-time AI voice assistant integrating streaming speech-to-text, LLM inference and text-to-speech; optimized asynchronous inference and audio processing for sub-second transcription latency in local deployments.',
      'Developed an AI video generation platform using Gemini, Veo, Imagen and agentic workflows to automate creative brief analysis, storyboard generation, asset orchestration and scene-level generation.',
      'Implemented RAG pipelines, vector retrieval, structured tool calling and cloud storage integrations to provide agents with grounded context and reliable access to enterprise data.',
      'Developed an AI system for analyzing RFP documents and generating solution architectures, infrastructure recommendations, SLAs and cost estimates using multimodal LLMs and agent-based orchestration.',
    ],
  },
  {
    company: 'BusinessNext (Acidaes Solutions Pvt. Ltd.)',
    role: 'AI Engineer',
    place: 'Noida, India',
    period: 'Jan 2025 – Apr 2026',
    points: [
      'Developed and deployed LLM-powered agents for CRM automation, QA generation, sprint management and enterprise workflow orchestration using LangChain and custom agent frameworks.',
      'Fine-tuned LLaMA and Mistral models for structured tool calling, improving argument prediction accuracy by 30% and enabling reliable execution of CRM operations.',
      'Built a centralized LLM evaluation and monitoring platform using DeepEval, measuring hallucination, latency, safety, relevance and instruction-following metrics across production models.',
      'Integrated Guardrails-AI and telemetry pipelines for runtime validation and agent observability, reducing incorrect tool executions by 40%.',
      'Architected and implemented 8+ multi-agent workflows, exploring task delegation, agent routing, tool selection and orchestration strategies for enterprise automation.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  /** Who the system was built for, shown as a badge on the card. */
  client?: string;
  logline: string;
  /** The problem the project set out to solve. */
  challenge: string;
  /** "How it works" pipeline, rendered as animated steps in the project overlay. */
  flow: string[];
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'chat' | 'mix' | 'wave' | 'film' | 'agents';
};

// Originals are the systems built at Dentsu and BusinessNext, plus client work for Maruti Suzuki and Honda.
export const projects: Project[] = [
  {
    id: 'spend-forecast-chatbot',
    title: 'Spend Forecast Chatbot',
    year: '2026',
    genre: 'Conversational AI • Text-to-SQL • Forecasting',
    client: 'Maruti Suzuki & Honda',
    logline: 'Ask in plain English, get the upcoming spend — a chatbot that reads the whole database and forecasts what comes next.',
    challenge:
      'Business teams at Maruti Suzuki and Honda needed answers about future spending without waiting on analysts to pull, join and model data by hand.',
    flow: ['Business question', 'LLM → SQL', 'Database', 'Analysis', 'Spend forecast'],
    stack: ['Gemini', 'LangGraph', 'SQL', 'Python', 'Pandas'],
    build: [
      'Built a conversational AI assistant for Maruti Suzuki and Honda that answers business questions in natural language.',
      'Translated questions into database queries, analyzed historical spending across all the data, and forecast upcoming spending to support growth planning.',
    ],
    features: ['Natural-language questions over the database', 'Automatic query generation', 'Analysis across all historical spend data', 'Upcoming-spend forecasts', 'Built for two automotive brands'],
    metrics: [
      { value: '2', label: 'automotive clients served' },
      { value: 'NL → SQL', label: 'plain English to live data' },
    ],
    palette: { from: '#04121f', via: '#0b3d66', to: '#05080d', accent: '#4cc9ff' },
    motif: 'chat',
  },
  {
    id: 'marketing-mix-model',
    title: 'Marketing Mix Model',
    year: '2026',
    genre: 'Data Science • Attribution • Budget Optimization',
    logline: 'Measures how every media channel drives sales — and where the next rupee of budget should go.',
    challenge: 'Marketing budgets were spread across many channels with no clear view of which ones actually moved sales.',
    flow: ['Spend & sales data', 'Adstock + saturation', 'Regression model', 'Channel ROI', 'Budget plan'],
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistical Modeling'],
    build: [
      'Built a Marketing Mix Model that quantifies the contribution of each media channel to sales.',
      'Estimated channel-level ROI and used it to recommend how to reallocate marketing budget.',
    ],
    features: ['Channel contribution to sales', 'Carry-over (adstock) and diminishing-returns effects', 'ROI per channel', 'Budget reallocation scenarios'],
    metrics: [
      { value: 'ROI', label: 'measured per channel' },
      { value: 'Budget', label: 'reallocation recommendations' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'mix',
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent AI Systems',
    year: '2026',
    genre: 'Agentic AI • Gemini • Dentsu',
    logline: 'Complex workflows decomposed into specialized agents for planning, retrieval, reasoning and execution.',
    challenge: 'Enterprise workflows were too complex for a single prompt — they needed planning, grounded data access and reliable execution.',
    flow: ['Task', 'Planner agent', 'Retrieval (RAG)', 'Reasoning agent', 'Tool execution'],
    stack: ['Google ADK', 'Gemini', 'LangGraph', 'Tool Calling', 'RAG'],
    build: [
      'Designed and implemented multi-agent AI systems using Google ADK, Gemini, LangGraph and tool calling, decomposing complex workflows into specialized agents for planning, retrieval, reasoning and execution.',
      'Implemented RAG pipelines, vector retrieval, structured tool calling and cloud storage integrations to provide agents with grounded context and reliable access to enterprise data.',
    ],
    features: [
      'Planning, retrieval, reasoning & execution agents',
      'RAG pipelines and vector retrieval',
      'Structured tool calling',
      'Cloud storage integrations for enterprise data',
    ],
    metrics: [
      { value: '4', label: 'specialized agent roles' },
      { value: 'RAG', label: 'grounded context for every agent' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'agents',
  },
  {
    id: 'video-generation',
    title: 'AI Video Generation Platform',
    year: '2026',
    genre: 'Multimodal • Veo • Imagen',
    logline: 'From creative brief to storyboard to scene-level generation — driven by agentic workflows.',
    challenge: 'Turning a creative brief into video meant days of manual storyboarding and asset work.',
    flow: ['Creative brief', 'Gemini analysis', 'Storyboard', 'Imagen assets', 'Veo scenes'],
    stack: ['Gemini', 'Veo', 'Imagen', 'Agentic Workflows'],
    build: [
      'Developed an AI video generation platform using Gemini, Veo, Imagen and agentic workflows to automate creative brief analysis, storyboard generation, asset orchestration and scene-level generation.',
    ],
    features: ['Creative brief analysis', 'Storyboard generation', 'Asset orchestration', 'Scene-level video generation'],
    metrics: [
      { value: '4', label: 'automated stages, brief to scene' },
      { value: '3', label: 'Google models: Gemini, Veo, Imagen' },
    ],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'film',
  },
  {
    id: 'voice-assistant',
    title: 'Real-Time AI Voice Assistant',
    year: '2026',
    genre: 'Speech • LLM • Low Latency',
    logline: 'Streaming speech-to-text, LLM inference and text-to-speech in one real-time loop.',
    challenge: 'Voice conversations feel broken when the assistant lags — every stage had to stream.',
    flow: ['Microphone', 'Streaming STT', 'LLM inference', 'TTS', 'Spoken reply'],
    stack: ['Python', 'Streaming STT', 'LLM Inference', 'TTS', 'Async I/O'],
    build: [
      'Built a real-time AI voice assistant integrating streaming speech-to-text, LLM inference and text-to-speech.',
      'Optimized asynchronous inference and audio processing for sub-second transcription latency in local deployments.',
    ],
    features: ['Streaming speech-to-text', 'LLM inference in the loop', 'Text-to-speech responses', 'Asynchronous audio processing', 'Local deployments'],
    metrics: [
      { value: '<1s', label: 'transcription latency' },
      { value: '3', label: 'stage pipeline: STT → LLM → TTS' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'wave',
  },
  {
    id: 'rfp-architect',
    title: 'RFP Solution Architect',
    year: '2026',
    genre: 'Document AI • Multimodal LLMs',
    logline: 'Reads RFP documents and drafts solution architectures, infrastructure, SLAs and cost estimates.',
    challenge: 'Responding to an RFP meant reading long documents and hand-drafting architecture, SLAs and pricing.',
    flow: ['RFP document', 'Multimodal LLM', 'Requirements', 'Agents draft', 'Architecture + cost'],
    stack: ['Multimodal LLMs', 'Agent Orchestration', 'Gemini'],
    build: [
      'Developed an AI system for analyzing RFP documents and generating solution architectures, infrastructure recommendations, SLAs and cost estimates using multimodal LLMs and agent-based orchestration.',
    ],
    features: ['RFP document analysis', 'Solution architecture generation', 'Infrastructure recommendations', 'SLAs and cost estimates'],
    metrics: [{ value: '4', label: 'deliverables: architecture, infra, SLAs, cost' }],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'llm-eval-guardrails',
    title: 'LLM Evaluation & Guardrails',
    year: '2025',
    genre: 'MLOps • Safety • BusinessNext',
    logline: 'A centralized platform to measure, monitor and guard production LLMs and agents.',
    challenge: 'Production agents were calling tools with wrong arguments, and nobody could see model quality over time.',
    flow: ['Model output', 'DeepEval metrics', 'Guardrails check', 'Telemetry', 'Dashboard'],
    stack: ['DeepEval', 'Guardrails-AI', 'Telemetry', 'Python'],
    build: [
      'Built a centralized LLM evaluation and monitoring platform using DeepEval, measuring hallucination, latency, safety, relevance and instruction-following metrics across production models.',
      'Integrated Guardrails-AI and telemetry pipelines for runtime validation and agent observability, reducing incorrect tool executions by 40%.',
    ],
    features: ['Hallucination, latency, safety & relevance metrics', 'Instruction-following evaluation', 'Runtime validation with Guardrails-AI', 'Agent observability via telemetry'],
    metrics: [
      { value: '40%', label: 'fewer incorrect tool executions' },
      { value: '5', label: 'quality metrics tracked' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'tool-calling-finetune',
    title: 'Tool-Calling LLM Fine-Tuning',
    year: '2025',
    genre: 'Fine-Tuning • LLaMA • Mistral',
    logline: 'LLaMA and Mistral fine-tuned for structured tool calling over CRM operations.',
    challenge: 'Off-the-shelf models guessed tool arguments, so CRM operations failed unpredictably.',
    flow: ['CRM request', 'Fine-tuned LLM', 'Structured call', 'Validation', 'CRM action'],
    stack: ['LLaMA', 'Mistral', 'Hugging Face', 'PyTorch', 'LangChain'],
    build: [
      'Fine-tuned LLaMA and Mistral models for structured tool calling, improving argument prediction accuracy by 30% and enabling reliable execution of CRM operations.',
      'Developed and deployed LLM-powered agents for CRM automation, QA generation, sprint management and enterprise workflow orchestration using LangChain and custom agent frameworks.',
      'Architected and implemented 8+ multi-agent workflows, exploring task delegation, agent routing, tool selection and orchestration strategies.',
    ],
    features: ['Structured tool-call generation', 'CRM automation agents', 'QA generation & sprint management', 'Agent routing & task delegation'],
    metrics: [
      { value: '+30%', label: 'argument prediction accuracy' },
      { value: '8+', label: 'multi-agent workflows' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'tool-accuracy',
    title: '+30% Accuracy',
    org: 'BusinessNext',
    detail: 'Fine-tuned LLaMA and Mistral for structured tool calling, lifting argument prediction accuracy by 30%.',
    laurel: 'Fine-Tuning',
  },
  {
    id: 'guardrails',
    title: '40% Fewer Errors',
    org: 'BusinessNext',
    detail: 'Guardrails-AI and telemetry pipelines cut incorrect tool executions by 40%.',
    laurel: 'Agent Safety',
  },
  {
    id: 'workflows',
    title: '8+ Agent Workflows',
    org: 'BusinessNext',
    detail: 'Architected multi-agent workflows for task delegation, routing, tool selection and orchestration.',
    laurel: 'Orchestration',
  },
  {
    id: 'latency',
    title: 'Sub-Second Latency',
    org: 'Dentsu',
    detail: 'Real-time voice assistant with sub-second transcription latency in local deployments.',
    laurel: 'Real-Time AI',
  },
  {
    id: 'google-cloud',
    title: '4 Skill Badges',
    org: 'Google Cloud',
    detail: 'Gemini multimodality, multimodal RAG, Imagen, Streamlit GenAI apps and Vertex AI prompt design.',
    laurel: 'Certified',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Google Cloud', name: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG' },
  { issuer: 'Google Cloud', name: 'Build Real World AI Applications with Gemini and Imagen' },
  { issuer: 'Google Cloud', name: 'Develop GenAI Apps with Gemini and Streamlit' },
  { issuer: 'Google Cloud', name: 'Prompt Design in Vertex AI' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Python first',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'llms',
    title: 'ML & LLMs',
    subtitle: 'Models that ship',
    skills: [
      { name: 'LLM Inference', mono: 'In' },
      { name: 'Fine-Tuning', mono: 'Ft' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Evaluation', mono: 'Ev' },
      { name: 'Multimodal AI', mono: 'Mm' },
      { name: 'Structured Generation', mono: 'Sg' },
      { name: 'Tool Calling', mono: 'Tc' },
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    subtitle: 'Agents that plan and act',
    skills: [
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Google ADK', mono: 'Ad' },
      { name: 'Multi-Agent Systems', mono: 'Ma' },
      { name: 'Agent Orchestration', mono: 'Ao' },
      { name: 'Planning & Routing', mono: 'Pr' },
      { name: 'Tool Execution', mono: 'Te' },
    ],
  },
  {
    id: 'infra',
    title: 'AI Infrastructure',
    subtitle: 'Serving & pipelines',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'MLflow', mono: 'Mf' },
      { name: 'Kafka', mono: 'Kf' },
      { name: 'Vector Databases', mono: 'Vd' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Async Processing', mono: 'As' },
      { name: 'Model Serving', mono: 'Ms' },
    ],
  },
  {
    id: 'platforms',
    title: 'Models & Platforms',
    subtitle: 'Google Cloud & open weights',
    skills: [
      { name: 'Google Gemini', mono: 'Gm' },
      { name: 'Veo', mono: 'Ve' },
      { name: 'Imagen', mono: 'Im' },
      { name: 'LLaMA', mono: 'Ll' },
      { name: 'Mistral', mono: 'Mi' },
      { name: 'Hugging Face', mono: 'Hf' },
      { name: 'Vertex AI', mono: 'Vx' },
      { name: 'Google Cloud', mono: 'Gc' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'How it gets built',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Distributed Workflows', mono: 'Dw' },
      { name: 'API Design', mono: 'Ai' },
      { name: 'Observability', mono: 'Ob' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Agile / Scrum', mono: 'Ag' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Real-Time AI Voice Assistant', 'LLM Evaluation & Guardrails'],
  PyTorch: ['Tool-Calling LLM Fine-Tuning'],
  'Fine-Tuning': ['Tool-Calling LLM Fine-Tuning', '+30% argument prediction accuracy'],
  RAG: ['Multi-Agent AI Systems', 'Google Cloud — Multimodal RAG'],
  'Prompt Engineering': ['Google Cloud — Prompt Design in Vertex AI'],
  Evaluation: ['LLM Evaluation & Guardrails'],
  'Multimodal AI': ['AI Video Generation Platform', 'RFP Solution Architect', 'Google Cloud — Gemini Multimodality'],
  'Tool Calling': ['Multi-Agent AI Systems', 'Tool-Calling LLM Fine-Tuning'],
  LangGraph: ['Multi-Agent AI Systems'],
  LangChain: ['Tool-Calling LLM Fine-Tuning'],
  'Google ADK': ['Multi-Agent AI Systems'],
  'Multi-Agent Systems': ['Multi-Agent AI Systems', '8+ multi-agent workflows'],
  'Agent Orchestration': ['RFP Solution Architect', 'AI Video Generation Platform'],
  'Planning & Routing': ['Multi-Agent AI Systems', '8+ multi-agent workflows'],
  'Tool Execution': ['LLM Evaluation & Guardrails', '40% fewer incorrect tool executions'],
  'Vector Databases': ['Multi-Agent AI Systems'],
  'Async Processing': ['Real-Time AI Voice Assistant'],
  'Google Gemini': ['Multi-Agent AI Systems', 'AI Video Generation Platform', '4 Google Cloud certifications'],
  Veo: ['AI Video Generation Platform'],
  Imagen: ['AI Video Generation Platform', 'Google Cloud — Gemini and Imagen'],
  LLaMA: ['Tool-Calling LLM Fine-Tuning'],
  Mistral: ['Tool-Calling LLM Fine-Tuning'],
  'Vertex AI': ['Google Cloud — Prompt Design in Vertex AI'],
  Observability: ['LLM Evaluation & Guardrails'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2023',
    synopsis: 'Bachelor of Computer Applications at Vellore Institute of Technology (VIT), Vellore.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Undergrad',
        description: 'Bachelor of Computer Applications at VIT, Vellore.',
        tags: ['BCA', 'VIT'],
        runtime: 'Jul 2020 – Apr 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Going Deeper',
    period: '2023 – 2025',
    synopsis: 'Master of Computer Applications at CHRIST (Deemed to be University), Bangalore — and four Google Cloud credentials.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Master’s',
        description: 'Master of Computer Applications at CHRIST (Deemed to be University), Bangalore.',
        tags: ['MCA', 'CHRIST'],
        runtime: 'Jul 2023 – Apr 2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Credentials',
        description: 'Google Cloud: Gemini multimodality & multimodal RAG, Gemini & Imagen apps, GenAI apps with Streamlit, and prompt design in Vertex AI.',
        tags: ['Google Cloud', 'Gemini', 'Vertex AI'],
        runtime: 'Apr 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Agent Builder',
    period: '2025 – 2026',
    synopsis: 'AI Engineer at BusinessNext (Acidaes Solutions), Noida — LLM agents for enterprise automation.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Agents',
        description: 'LLM-powered agents for CRM automation, QA generation, sprint management and workflow orchestration with LangChain.',
        tags: ['LangChain', 'CRM', 'Agents'],
        runtime: 'Jan 2025 – Apr 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Fine-Tune',
        description: 'LLaMA and Mistral fine-tuned for structured tool calling — argument prediction accuracy up 30%.',
        tags: ['LLaMA', 'Mistral', '+30%'],
        runtime: 'BusinessNext',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Watchtower',
        description: 'DeepEval-based evaluation and monitoring, plus Guardrails-AI and telemetry — incorrect tool executions down 40%.',
        tags: ['DeepEval', 'Guardrails-AI', '−40%'],
        runtime: 'BusinessNext',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'The Orchestrator',
        description: '8+ multi-agent workflows exploring task delegation, agent routing, tool selection and orchestration.',
        tags: ['Multi-Agent', 'Routing', '8+'],
        runtime: 'BusinessNext',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Generative Worlds',
    period: '2026 – Present',
    synopsis: 'Gen AI Engineer at Dentsu, Bengaluru — multi-agent systems, voice, video, document AI, marketing science and client chatbots for Maruti Suzuki and Honda.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Architect',
        description: 'Multi-agent systems with Google ADK, Gemini and LangGraph — planning, retrieval, reasoning and execution agents grounded by RAG.',
        tags: ['Google ADK', 'LangGraph', 'RAG'],
        runtime: 'May 2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Voice',
        description: 'A real-time voice assistant — streaming STT, LLM inference and TTS at sub-second transcription latency.',
        tags: ['STT', 'TTS', '<1s'],
        runtime: 'Dentsu',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Director',
        description: 'An AI video generation platform on Gemini, Veo and Imagen — from creative brief to storyboard to scene.',
        tags: ['Veo', 'Imagen', 'Gemini'],
        runtime: 'Dentsu',
        palette: crimson,
      },
      {
        code: 'S04 E04',
        title: 'The Consultant',
        description: 'An RFP analyzer that drafts solution architectures, infrastructure, SLAs and cost estimates.',
        tags: ['Multimodal LLMs', 'RFP'],
        runtime: 'Dentsu',
        palette: amber,
      },
      {
        code: 'S04 E05',
        title: 'The Forecaster',
        description: 'A chatbot for Maruti Suzuki and Honda that reads the spend database and forecasts upcoming spending in plain English.',
        tags: ['Text-to-SQL', 'Forecasting', 'Automotive'],
        runtime: 'Maruti Suzuki & Honda',
        palette: ocean,
      },
      {
        code: 'S04 E06',
        title: 'The Media Scientist',
        description: 'A Marketing Mix Model that measures each channel’s impact on sales and recommends where budget should go.',
        tags: ['MMM', 'ROI', 'Budget'],
        runtime: 'Dentsu',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Gen AI Engineer', detail: 'Dentsu • Bengaluru', palette: crimson },
  { label: 'Primary language', title: 'Python', detail: 'with PyTorch, Pandas & SQL', palette: amber },
  { label: 'Fine-tuning win', title: '+30%', detail: 'Tool-call argument accuracy • LLaMA & Mistral', palette: violet },
  { label: 'Safety win', title: '−40%', detail: 'Incorrect tool executions • Guardrails-AI', palette: jade },
  { label: 'Orchestration', title: '8+ Workflows', detail: 'Multi-agent, at BusinessNext', palette: ocean },
  { label: 'Real time', title: '<1s Latency', detail: 'Streaming voice assistant', palette: crimson },
  { label: 'Generative video', title: 'Veo + Imagen', detail: 'Brief → storyboard → scene', palette: amber },
  { label: 'Client Original', title: 'Spend Chatbot', detail: 'Maruti Suzuki & Honda • forecasts upcoming spend', palette: violet },
  { label: 'Cloud credentials', title: 'Google Cloud ×4', detail: 'Gemini • Imagen • Vertex AI', palette: ocean },
  { label: 'Education', title: 'MCA', detail: 'CHRIST University • BCA from VIT', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now',
    title: 'Gen AI Engineer',
    lines: ['Dentsu, Bengaluru', 'May 2026 – Present'],
    chips: ['Google ADK', 'Gemini', 'LangGraph'],
  },
  {
    kicker: 'Skills',
    title: 'Agents first.',
    lines: ['Python · PyTorch · LangGraph · LangChain', 'RAG · Fine-tuning · Evaluation · Tool calling'],
    chips: ['Python', 'LangGraph', 'Gemini', 'LLaMA', 'FastAPI', 'Docker'],
  },
  {
    kicker: 'Previously',
    title: 'The Agent Builder',
    lines: ['AI Engineer · BusinessNext · Jan 2025 – Apr 2026', '+30% tool-call accuracy · −40% bad tool executions', '8+ multi-agent workflows'],
  },
  {
    kicker: 'Originals',
    title: `${projects.length} Systems Shipped`,
    lines: ['Spend forecast chatbot for Maruti Suzuki & Honda', 'Marketing mix model · Multi-agent systems · AI video', 'Real-time voice · RFP architect · Evaluation · Fine-tuning'],
  },
  {
    kicker: 'Education',
    title: 'MCA · BCA',
    lines: ['CHRIST (Deemed to be University), Bangalore', 'Vellore Institute of Technology (VIT)'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Google Cloud Badges`,
    lines: ['Gemini Multimodality & Multimodal RAG · Gemini & Imagen', 'Streamlit GenAI Apps · Prompt Design in Vertex AI'],
  },
];

export type ProfileId = 'shreyans' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shreyans',
    name: 'Shreyans',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
