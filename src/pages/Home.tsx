import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { 
  User, Briefcase, GraduationCap, Code, BookOpen, Award,
  Sun, Moon, Download, Github, Linkedin, Mail, Phone, 
  MapPin, Globe, ChevronDown, Menu, X
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

// 个人信息
const personalInfo = {
  name: "许焱",
  title: "大模型算法工程师",
  bio: "本人性格沉稳，正直忠诚，具有良好的沟通协助能力，能与内外部团队高效配合，推动项目落地。拥有丰富的卫星定轨自动化、大气波导反演系统开发经验，并在大模型技术领域有深入研究。",
  avatar: "/src/assets/images/avatar.png",
  contact: [
    { type: "email", value: "xuyan4811@outlook.com", icon: <Mail size={20} /> },
    { type: "phone", value: "18763861027", icon: <Phone size={20} /> },
    { type: "location", value: "山东省泰安市", icon: <MapPin size={20} /> },
    { type: "giee", value: "gitee.com/xuyan-breeze", icon: <Globe size={20} /> }
  ],
  personalDetails: [
    { label: "出生年月", value: "1999.08.18" },
    { label: "民族", value: "汉族" },
    { label: "籍贯", value: "山东省泰安市" },
    { label: "政治面貌", value: "中共党员" },
    { label: "学历", value: "硕士" }
  ]
};

// 工作经历
const workExperience = [
  {
    id: 1,
    company: "天津云遥宇航科技有限公司",
    position: "算法工程师",
    period: "2024.06-至今",
    description: "负责低轨卫星精密定轨全流程自动化及相关系统开发",
    achievements: [
      "独立开发 GPANDA & NPANDA 定轨自动化脚本（Python），将人工 1h 手动流程压缩至 4 min 无人值守运行，支撑Linux服务器 30+ 颗云遥卫星定轨业务化运行",
      "独立开发\"发射即更新\"卫星参数脚本（Python），将人工1h 手动配置流程压缩至5s，支撑 26 余颗卫星零差错解算数据",
      "构建低轨卫星业务健康监测与多维精度评估体系，保障业务稳定运行，出错率降低80%",
      "自研并开发大气波导反演系统（Python）：基于 ERA5 与掩星干湿廓线，实现接地/悬空波导自动识别与绘图",
      "作为技术骨干参与军工重点项目，完成项目GNSS 掩星质量评估程序（Fortran）、自动化脚本（Python）和软件GUI（tkinter）的开发"
    ]
  }
];

// 教育背景
const education = [
  {
    id: 1,
    degree: "硕士",
    major: "资源与环境",
    school: "山东科技大学",
    period: "2021年9月 - 2024年6月",
    advisor: "刘智敏（副教授）、苏醒（副教授）",
    researchArea: "GNSS 高精度数据智能自动化处理"
  },
  {
    id: 2,
    degree: "本科",
    major: "测绘工程",
    school: "山东农业工程学院",
    period: "2017年9月 - 2021年6月"
  }
];

// 在校经历
const researchExperience = [
  {
    id: 1,
    title: "编程学习",
    description: "学习Fortran、Python等编程语言，独立设计编程思路并完成编程项目",
    details: [
      "基于Python开发Windows/Linux双系统GNSS数据处理自动化程序",
      "包含数据准备、参数配置、执行程序解算、精度评估等功能模块"
    ]
  },
  {
    id: 2,
    title: "GNSS软件学习",
    description: "熟悉GNSS的高精度定位/定轨基本理论，研究GNSS源码PRIDE（Fortran）和PANDA（Fortran）的详细代码算法结构",
    details: [
      "数据预处理(TurboEdit算法)、简化动力学（Oi模块）、最小二乘(LSQ模块)、残差编辑等",
      "能够调试并修改运行时所产生的BUG",
      "掌握PANDA精密定位、精密定轨和低轨卫星精密定轨数据处理与精度评估流程"
    ]
  },
  {
    id: 3,
    title: "Linux系统学习",
    description: "在Linux环境下开发GNSS高精度数据处理程序（Python），并具备批量多线程数据处理经验"
  },
  {
    id: 4,
    title: "学术学习",
    description: "发表论文3篇，参加学术会议2次，协助导师撰写《空间大地测量理论与技术》书稿，编写13篇SCI论文审稿意见"
  }
];

// 项目经历
const projects = [
  {
    id: 1,
    title: "SDCORS 数据自动化处理及分析系统升级",
    role: "项目负责人（后期维护与优化）",
    period: "2019-2023年（硕士期间）",
    description: "负责SDCORS数据自动化处理及分析系统的后期维护与优化",
    technologies: ["Linux", "GAMIT", "Bernese", "Python"],
    outcomes: "基于Python开发了GNSS数据处理自动化，实现数据自动下载解压、自动完成GNSS软件配置，自动求取解算精度"
  },
  {
    id: 2,
    title: "低轨卫星精密定轨全流程自动化",
    role: "独立开发",
    period: "2024年7月（工作期间）",
    description: "负责低轨卫星精密定轨全流程自动化，独立开发GPANDA & NPANDA定轨自动化脚本",
    technologies: ["Python", "Linux", "GNSS低轨卫星定轨"],
    outcomes: "将人工1h手动流程压缩至4min无人值守运行，已支撑Linux服务器30+颗云遥卫星定轨业务化运行"
  },
  {
    id: 3,
    title: "大气波导反演系统",
    role: "自研开发",
    period: "2024年9月（工作期间）",
    description: "自研并开发大气波导反演系统，基于ERA5与掩星干湿廓线，实现接地/悬空波导自动识别与绘图",
    technologies: ["Python", "气象数据处理", "数据可视化"],
    outcomes: "实现了大气波导现象的自动识别与可视化展示"
  },
  {
    id: 4,
    title: "军工重点项目GNSS掩星质量评估系统",
    role: "技术骨干",
    period: "2024年12月至2025年6月（工作期间）",
    description: "作为技术骨干参与军工重点项目，完成项目GNSS掩星质量评估程序、自动化脚本和软件GUI的开发,具备银河麒麟（国防版）服务器本地化部署经验，撰写验收文档",
    technologies: ["Fortran", "Python", "tkinter", "Linux银河麒麟系统环境"],
    outcomes: "项目一次性通过专家评审并获'优秀'评级"
  }
];

// 发表论文
const publications = [
  {
    id: 1,
    title: "Tropospheric Delay Parameter Estimation Strategy in BDS Precise Point Positioning",
    authors: "Liu,Z.;Xu,Y.;Su,X;et al.",
    journal: "Remote Sens.",
    year: 2023,
    volume: 15,
    pages: 3880,
    link: "https://doi.org/10.3390/rs15153880",
    note: "SCI 二区TOP，第二作者(导师一作)"
  },
  {
    id: 2,
    title: "Effect of Troposphere Parameter Estimation on BDS PPP",
    authors: "Liu,Z.;Xu,Y.;Su X;et al.",
    conference: "China Satellite Navigation Conference (CSNC 2024) Proceedings",
    publisher: "Springer, Singapore",
    year: 2024,
    link: "https://link.springer.com/chapter/10.1007/978-981-99-6944-9_7",
    note: "EI，第二作者(导师一作)"
  },
  {
    id: 3,
    title: "北斗卫星导航系统广播星历轨道精度分析",
    authors: "许焱,刘智敏,徐保朋等",
    conference: "第十三届中国卫星导航年会论文集——S04星轨道与精密定位",
    year: 2022,pages: "81-88",
    link: "DOI:10.26914/c.cnkihy.2022.001199",
    note: "会议论文"
  },
  {
    id: 4,
    title: "Performance Analysis of GPS/BDS Broadcast Ionospheric Models in Standard Point Positioning during 2021Strong Geomagnetic Storms",
    authors: "Li,Q.;Su,X.;Xu,Y.;et al.",
    journal: "Remote Sens.",
    year: 2022,
    volume: 14,
    pages: 4424,
    link: "https://doi.org/10.3390/rs14174424",
    note: "SCI 二区TOP，第三作者"
  }
];

// 学术会议
const conferences = [
  {
    id: 1,
    name: "中国测绘学会2021学术年会",
    year: "2021年10月",
    role: "参会者"
  },
  {
    id: 2,
    name: "大地测量与导航2024综合学术年会",
    year: "2024年05月",
    role: "参会者并张贴论文海报"
  }
];

// 实习经历
const internships = [
  {
    id: 1,
    company: "山东正元地球物理信息技术有限公司",
    position: "测量员(实习)",
    period: "2021年3月 - 2021年5月（本科期间）",
    achievements: [
      "管线测量：采用RTK接收机和全站仪收集用户天然气管道的数字坐标、设置有效碎部点、绘制管道数字地形图",
      "管道防腐：协助安置管道防腐装置,采用阴极管道保护设计法,加快工作进度"
    ]
  }
];

// 获奖荣誉
const awards = [
  { id: 1, title: "山东科技大学'优秀毕业生'称号", year: "2024年06月", description: "学习与科研能力表现突出", isScholarship: false },
  { id: 2, title: "山东科技大学'优秀研究生'称号", year: "2023年11月", description: "学术成果突出", isScholarship: false },
  { id: 3, title: "研究生一等学业奖学金", year: "2023年11月", description: "综合成绩第2位,共43人", isScholarship: true },
  { id: 4, title: "山东科技大学'优秀研究生'称号", year: "2022年11月", description: "学习成绩优异", isScholarship: false },
  { id: 5, title: "研究生二等学业奖学金", year: "2022年11月", description: "综合成绩第10位,共43人", isScholarship: true },
  { id: 6, title: "中国测绘学会2021学术年会志愿服务证书", year: "2021年10月", description: "承担中国测绘学会志愿者", isScholarship: false },
  { id: 7, title: "山东农业工程学院'优秀学生'称号", year: "2020年11月", description: "学习成绩优异,实习表现突出", isScholarship: false },
  { id: 8, title: "山东农业工程学院第四届'南方测绘杯'测量大赛二等奖", year: "2019年04月", description: "表现优异", isScholarship: false },
  { id: 9, title: "'优秀青年志愿者'称号", year: "2022年04月", description: "在抗击疫情志愿服务活动中表现优秀", isScholarship: false },
  { id: 10, title: "组织'睿飞杯'2022年山东科技大学无人机测绘创新智能大赛", year: "2022年06月", description: "参与组织", isScholarship: false }
];

// 技术能力
const technicalSkills = [
  { category: "编程语言", skills: [
    { name: "Python", level: 95 },
    { name: "Fortran", level: 90 },
    { name: "C/C++", level: 75 },
    { name: "Shell", level: 80 },
    { name: "MATLAB", level: 85 }
  ]},
  { category: "大模型技术", skills: [
    { name: "LoRA微调 (peft + transformers)", level: 90 },
    { name: "Unsloth/LLaMA-Factory框架", level: 85 },
    { name: "模型部署与量化", level: 88 },
    { name: "TensorRT加速", level: 82 },
    { name: "Ollama/vLLM/LM Studio", level: 85 }
  ]},
  { category: "大模型Agent工具", skills: [
    { name: "Dify平台", level: 85 },
    { name: "LangChain Agent", level: 80 },
    { name: "零代码/低代码智能体搭建", level: 83 },
    { name: "自动化工作流设计", level: 88 }
  ]},
  { category: "系统与开发工具", skills: [
    { name: "Linux系统", level: 90 },
    { name: "VS Code/PyCharm", level: 95 },
    { name: "Git/GitHub/Gitee", level: 85 },
    { name: "Docker容器化", level: 80 },
    { name: "跨平台远程开发", level: 85 }
  ]},
  { category: "科研与办公", skills: [
    { name: "Microsoft Office", level: 90 },
    { name: "LaTex + MathType", level: 85 },
    { name: "Origin/ArcMap/Visio", level: 88 },
    { name: "Photoshop", level: 80 },
    { name: "SCI论文写作与发表", level: 85 }
  ]}
];

// 自我评价
const selfEvaluation = [
  {
    category: "性格特征",
    content: "本人性格沉稳，正直忠诚，具有良好的沟通协助能力，能与内外部团队高效配合，推动项目落地。"
  },
  {
    category: "学习能力",
    content: "本人具有较强的钻研能力，脚踏实地，思维活跃，勇于创新，具有良好的学习习惯，习惯做笔记，学习能力强，能紧跟大模型技术发展趋势，适应快速迭代的技术环境。"
  },
  {
    category: "团队认知",
    content: "崇尚专业分工、优势互补的团队模式，致力于实现团队价值最大化；坚信团队成功优于个人表现，致力于构建聚焦问题解决、持续优化迭代的高效协作环境。"
  },
  {
    category: "未来规划",
    content: "致力于打造高效团队，持续为公司创造价值。"
  }
];

// 生成雷达图数据
const generateRadarData = (selectedSkills) => {
  return selectedSkills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100
  }));
};

// 个人信息组件
const PersonalInfo = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={personalInfo.avatar} 
          alt={personalInfo.name} 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="flex-1 text-center md:text-left">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p 
          className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {personalInfo.title}
        </motion.p>
        
        {/* 个人详细信息 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {personalInfo.personalDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">{detail.label}：</span>
              <span className="text-gray-600 dark:text-gray-400">{detail.value}</span>
            </div>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {personalInfo.bio}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {personalInfo.contact.map((item, index) => (
            <a 
              key={index}
              href={item.type === "email" ? `mailto:${item.value}` : 
                    item.type === "phone" ? `tel:${item.value}` : 
                    `https://${item.value}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              <span>{item.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// 工作经历组件
const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {workExperience.map((exp, index) => (
        <motion.div 
          key={exp.id}
          className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border-l-4 border-blue-500"
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
              <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
          
          <ul className="space-y-2">
            {exp.achievements.map((achievement, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-2 text-gray-700 dark:text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <i className="fa-solid fa-check-circle text-green-500 mt-1 flex-shrink-0"></i>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

// 教育背景组件
const Education = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div 
          key={edu.id}
          className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          // 只有硕士学位才有证书显示功能
          onMouseEnter={() => index === 0 && setShowCertificates(true)}
          onMouseLeave={() => index === 0 && setShowCertificates(false)}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree} - {edu.major}</h3>
              <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{edu.period}</p>
          </div>
          
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            {edu.advisor && <p><strong>导师：</strong>{edu.advisor}</p>}
            {edu.researchArea && <p><strong>研究方向：</strong>{edu.researchArea}</p>}
            {index === 0 && (
              <p className="text-blue-500 text-sm mt-2 italic">
                鼠标悬停查看硕士毕业证和学位证
              </p>
            )}
          </div>
          
          {/* 硕士毕业证和学位证显示 */}
          {index === 0 && (
            <AnimatePresence>
              {showCertificates && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full left-0 mt-4 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                    <img
                      src="/src/assets/images/degree_certificate_1.png"
                      alt="硕士毕业证"
                      className="w-full h-auto rounded"
                    />
                    <p className="text-center text-sm mt-1 text-gray-600 dark:text-gray-400">硕士毕业证</p>
                  </div>
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                    <img
                      src="/src/assets/images/degree_certificate_2.png"
                      alt="硕士学位证"
                      className="w-full h-auto rounded"
                    />
                    <p className="text-center text-sm mt-1 text-gray-600 dark:text-gray-400">硕士学位证</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      ))}
      
      {/* 科研经历 */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">在校经历</h3>
        <div className="space-y-4">
          {researchExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
              {exp.details && (
                <ul className="space-y-1 text-gray-600 dark:text-gray-300 pl-5 list-disc">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 技术能力组件
const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(technicalSkills[0].category);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  
  const selectedSkills = technicalSkills.find(skill => skill.category === selectedCategory)?.skills || [];
  const radarData = generateRadarData(selectedSkills);
  
  return (
    <div className="space-y-6">
      {/* 移动端筛选器 */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        >
          <span className="font-medium text-gray-900 dark:text-white">选择技术类别：{selectedCategory}</span>
          <ChevronDown 
            size={20} 
            className={`text-gray-500 dark:text-gray-400 transition-transform ${isFilterVisible ? 'rotate-180' : ''}`} 
          />
        </button>
        
        <AnimatePresence>
          {isFilterVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-white dark:bg-gray-800 rounded-b-xl shadow-md mt-1"
            >
              <div className="p-2">
                {technicalSkills.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => {
                      setSelectedCategory(category.category);
                      setIsFilterVisible(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg my-1 ${
                      selectedCategory === category.category 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 桌面端筛选器 */}
      <div className="hidden md:flex gap-2 flex-wrap">
        {technicalSkills.map((category) => (
          <motion.button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.category 
                ? 'bg-blue-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.category}
          </motion.button>
        ))}
      </div>
      
      {/* 技术能力可视化 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 进度条展示 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{selectedCategory} 技能水平</h3>
          <div className="space-y-6">
            {selectedSkills.map((skill, index) => (
              <motion.div key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 雷达图展示 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} width={500} height={300} data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#4b5563', fontSize: 12 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name={selectedCategory}
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 项目经历组件
const Projects = () => {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <motion.div 
          key={project.id}
          className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-blue-600 dark:text-blue-400">{project.role}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{project.period}</p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">技术栈：</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-1">成果：</h4>
            <p className="text-gray-600 dark:text-gray-300">{project.outcomes}</p>
          </div>
        </motion.div>
      ))}
      
      {/* 实习经历 */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">实习经历</h3>
        <div className="space-y-4">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{intern.position}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{intern.company}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{intern.period}</p>
              </div>
              
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-5 list-disc">
                {intern.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 学术成果组件
const Publications = () => {
  const [showConferencePhotos, setShowConferencePhotos] = useState([false, false]);
  
  const handleConferenceHover = (index, isHovering) => {
    const newState = [...showConferencePhotos];
    newState[index] = isHovering;
    setShowConferencePhotos(newState);
  };
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">学术论文</h3>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.id}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pub.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{pub.authors}</p>
              <div className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
                {pub.journal && <p><strong>期刊：</strong>{pub.journal} {pub.volume && `, Vol. ${pub.volume}`}{pub.pages && `, pp. ${pub.pages}`} ({pub.year})</p>}
                {pub.conference && <p><strong>会议：</strong>{pub.conference}, {pub.publisher && `${pub.publisher},`} {pub.year}</p>}
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <i className="fa-solid fa-link"></i>
                    {pub.link}
                  </a>
                )}
                {pub.note && <p><strong>备注：</strong>{pub.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* 学术会议 */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">学术会议</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.id}
              className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => handleConferenceHover(index, true)}
              onMouseLeave={() => handleConferenceHover(index, false)}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{conf.name}</h4>
              <div className="flex flex-wrap justify-between items-center text-gray-600 dark:text-gray-300">
                <p>{conf.role}</p>
                <p className="text-blue-600 dark:text-blue-400">{conf.year}</p>
              </div>
              <p className="text-blue-500 text-sm mt-2 italic">
                鼠标悬停查看会议照片
              </p>
              
              {/* 会议照片显示 */}
              <AnimatePresence>
                {showConferencePhotos[index] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 mt-4 w-full z-10"
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                      <img
                        src={`/src/assets/images/conference_${index + 1}.png`}
                        alt={`${conf.name}照片`}
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 获奖荣誉组件
const Awards = () => {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <motion.div 
            key={award.id}
            className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md flex flex-col relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -3 }}
            onMouseEnter={() => !award.isScholarship && setHoveredAward(award.id)}
            onMouseLeave={() => setHoveredAward(null)}
          >
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{award.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{award.description}</p>
              {!award.isScholarship && (
                <p className="text-blue-500 text-sm mt-2 italic">
                  鼠标悬停查看证书
                </p>
              )}
            </div>
            <div className="mt-auto pt-2">
              <span className="text-blue-600 dark:text-blue-400 font-medium">{award.year}</span>
            </div>
            
            {/* 奖项照片显示（非奖学金奖项） */}
            {!award.isScholarship && (
              <AnimatePresence>
                {hoveredAward === award.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 mt-4 w-full z-10"
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                      <img
                        src={`/src/assets/images/award_${award.id}.png`}
                        alt={`${award.title}证书`}
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* 自我评价 */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">自我评价</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selfEvaluation.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-star text-yellow-500"></i>
                {item.category}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 下载简历按钮
const DownloadButton = () => {
  const handleDownload = () => {
    // 这里简化处理，实际项目中需要实现真实的PDF下载功能
    alert("简历下载功能已触发，实际项目中将生成并下载PDF文件");
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Download size={24} />
    </motion.button>
  );
};

export default function Home() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sections = useRef({});

  // 导航菜单项
  const navItems = [
    { id: "personal", label: "个人信息", icon: <User size={20} /> },
    { id: "work", label: "工作经历", icon: <Briefcase size={20} /> },
    { id: "education", label: "教育背景", icon: <GraduationCap size={20} /> },
    { id: "skills", label: "技术能力", icon: <Code size={20} /> },
    { id: "projects", label: "项目与实习", icon: <BookOpen size={20} /> },
    { id: "publications", label: "学术成果", icon: <BookOpen size={20} /> },
    { id: "awards", label: "获奖与评价", icon: <Award size={20} /> }
  ];

  // 滚动到指定区域
  const scrollToSection = (id) => {
    sections.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // 监听滚动，高亮当前导航项
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const id of Object.keys(sections.current)) {
        const section = sections.current[id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            document.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.remove("active");
            });
            document
              .querySelector(`.nav-link[href="#${id}"]`)
              ?.classList.add("active");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md z-40 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 hidden sm:block">
              许焱 - 大模型算法工程师
            </h1>
          </div>

          {/* 桌面端导航 */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* 主题切换按钮 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端导航菜单 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
            >
              <ul className="py-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-6 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 主内容区域 */}
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* 个人信息区域 */}
        <section 
          ref={(el) => (sections.current.personal = el)} 
          id="personal" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <User className="text-blue-600 dark:text-blue-400" size={28} />
            <span>个人信息</span>
          </motion.h2>
          <PersonalInfo />
        </section>

        {/* 工作经历区域 */}
        <section 
          ref={(el) => (sections.current.work = el)} 
          id="work" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
            <span>工作经历</span>
          </motion.h2>
          <WorkExperience />
        </section>

        {/* 教育背景区域 */}
        <section 
          ref={(el) => (sections.current.education = el)} 
          id="education" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
            <span>教育背景</span>
          </motion.h2>
          <Education />
        </section>

        {/* 技术能力区域 */}
        <section 
          ref={(el) => (sections.current.skills = el)} 
          id="skills" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code className="text-blue-600 dark:text-blue-400" size={28} />
            <span>技术能力</span>
          </motion.h2>
          <TechnicalSkills />
        </section>

        {/* 项目经历区域 */}
        <section 
          ref={(el) => (sections.current.projects = el)} 
          id="projects" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
            <span>项目与实习</span>
          </motion.h2>
          <Projects />
        </section>

        {/* 学术成果区域 */}
        <section 
          ref={(el) => (sections.current.publications = el)} 
          id="publications" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
            <span>学术成果</span>
          </motion.h2>
          <Publications />
        </section>

        {/* 获奖荣誉区域 */}
        <section 
          ref={(el) => (sections.current.awards = el)} 
          id="awards" 
          className="mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Award className="text-blue-600 dark:text-blue-400" size={28} />
            <span>获奖与评价</span>
          </motion.h2>
          <Awards />
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} 许焱 - 大模型算法工程师</p>
          <p className="mt-2 text-sm">
            使用 React, Tailwind CSS 和 TypeScript 构建
          </p>
        </div>
      </footer>

      {/* 下载简历按钮 */}
      <DownloadButton />
    </div>
  );
}