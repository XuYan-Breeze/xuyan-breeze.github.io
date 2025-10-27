import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Briefcase, GraduationCap, Code, BookOpen, Award,
  Github, Mail, Phone, 
  MapPin, Globe, ChevronDown, X, ExternalLink, 
  ChevronRight, Calendar
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

  // 个人信息
  const personalInfo = {
    name: "许焱",
    title: "大模型算法工程师",
    avatar: "/images/许焱.jpg",
    // 按照要求的顺序排列：出生年月、民族、籍贯、政治面貌、学历、邮箱、电话、gitee
    details: [
    { label: "出生年月", value: "1999.08.18", type: "birthday", icon: <Calendar size={20} /> },
    { label: "民族", value: "汉族", type: "nationality", icon: <User size={20} /> },
    { label: "籍贯", value: "山东省泰安市", type: "location", icon: <MapPin size={20} /> },
    { label: "政治面貌", value: "中共党员", type: "political", icon: <User size={20} /> },
    { label: "学历", value: "硕士", type: "education", icon: <GraduationCap size={20} /> },
    { label: "邮箱", value: "xuyan4811@outlook.com", type: "email", icon: <Mail size={20} /> },
    { label: "电话（WeChat）", value: "18763861027", type: "phone", icon: <Phone size={20} /> },
    { 
      label: "Gitee", 
      value: "gitee.com/xuyan-breeze", 
      type: "gitee", 
      icon: <Globe size={20} />,
      url: "https://gitee.com/xuyan-breeze"
    }
  ]
};

  // 工作经历
  const workExperience = [
    {
      id: 1,company: "天津云遥宇航科技有限公司",
      position: "算法工程师",
      period: "2024.06-至今",
      achievements: [
        "独立开发 GPANDA & NPANDA 定轨自动化脚本（Python），将人工 1h 手动流程压缩至 4 min 无人值守运行，支撑Linux服务器 30+ 颗云遥卫星定轨业务化运行",
        "独立开发\"发射即更新\"卫星参数脚本（Python），将人工1h 手动配置流程压缩至5s，已支撑 26 余颗卫星零差错解算数据",
        "构建低轨卫星业务健康监测（系统文件准备、数据质量和时效性检查）与多维精度评估（残差、事后和重叠弧段分析）体系，保障业务稳定运行，出错率降低80%",
        "熟悉 NetCDF、GRIB 等气象标准格式，可独立完成ERA5（气压层 + 模式层）、无线电探空、GNSS 掩星、GFS 预报场等数据的下载、读写、质控、时间/空间插值及可视化",
        "自研并开发大气波导反演系统（Python）：基于 ERA5 与掩星干湿廓线，实现接地/悬空波导自动识别与绘图",
        "作为技术骨干参与军工重点项目，完成项目GNSS 掩星质量评估程序（Fortran）、自动化脚本（Python）和软件GUI（tkinter）的开发，具备银河麒麟（国防版）服务器本地化部署经验，撰写验收文档，项目一次性通过专家评审并获\"优秀\"评级"
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
    role: "自研开发",period: "2024年9月（工作期间）",
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
    link: "https://kns.cnki.net/kcms2/article/abstract?v=krTYG2tdvzqv1gxaMHR4d3lVzzIZ_YWIzkIUjPubXxyor2OM9rvoPKk1QBWRTq_pdKf8GBfzXkOTZJzcP3gMnewC1Y-E0pG0mfI8LXfUnUwMSZdWNqbwqXwcPZGvydPdO0djJbeVBWBzmmCU5feuHJ7nUBFjXK5u-TL91SmVSu2sJOG98fvZi0RCcSmQnvkpVquphoyIXXqLidaXfGqs-Q==&uniplatform=NZKPT",
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
  { id: 3, title: "研究生一等学业奖学金", year: "2023年11月", description: "综合成绩第4位,共43人", isScholarship: true },
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
    { name: "Unsloth + LoRA微调", level: 90 },
    { name: "LLaMA-Factory + LoRA微调", level: 85 },
    { name: "Ollama模型本地化部署与服务", level: 92 },
    { name: "vLLM模型本地化部署与服务", level: 88 },
		{ name: "LM Studio模型本地化部署与服务", level: 90 },
  ]},
  { category: "大模型Agent工具", skills: [
    { name: "Dify平台", level: 85 },
    { name: "LangChain Agent", level: 80 },
    { name: "零代码/低代码智能体搭建", level: 83 },
    { name: "自动化工作流设计", level: 85 }
  ]},
  { category: "系统与开发工具", skills: [
    { name: "多系统调试与开发 (Linux/WSL/Windows)", level: 90 },
    { name: "VS Code/Cursor/PyCharm/Visual Studio", level: 95 },
    { name: "Git管理GitHub/Gitee", level: 85 },
    { name: "Docker容器化与编排", level: 80 }
  ]},
  { category: "跨平台云端同步工具", skills: [
    { name: "Onedrive+WebDAV+Zotero文献管理", level: 85 },
    { name: "WebDAV+Jpolin多平台笔记同步", level: 90 },
    { name: "Markdown文档编写", level: 88 },
    { name: "跨设备数据同步", level: 85 }
  ]},
  { category: "科研绘图与办公", skills: [
    { name: "Microsoft Office", level: 90 },
    { name: "Adobe Acrobat", level: 90 },
    { name: "LaTex + MathType公式编辑", level: 85 },
    { name: "Origin/ArcMap/Visio绘图", level: 92 },
    { name: "Photoshop图像处理", level: 80 }
  ]}
];

// 自我评价
const selfEvaluation = [
  {
    category: "性格特征",
    content: "本人性格乐观开朗，正直忠诚，具有良好的沟通协助能力，能与内外部团队高效配合，推动项目落地。"
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
const generateRadarData = (selectedSkills: Array<{ name: string; level: number }>) => {
  return selectedSkills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100
  }));
};

// 个人信息组件
const PersonalInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* 左侧个人信息卡片 */}
      <motion.div 
        className="w-full lg:w-1/3 p-6 content-card flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-48 h-64 rounded-lg overflow-hidden border-4 border-blue-500 mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-white/90 font-semibold mb-6 drop-shadow-md">
          {personalInfo.title}
        </p>
        
        {/* 基本信息 - 放在职位标题下方 */}
        <div className="w-full bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 border border-white/20">
          <div className="grid grid-cols-1 gap-3">
            {personalInfo.details.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium text-white/80 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {item.type === "gitee" && item.url ? (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:underline flex items-center gap-1"
                  >
                    {item.value}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-white">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* 右侧主要信息区域 */}
      <div className="w-full lg:w-2/3 space-y-6">
        {/* 研究兴趣和专业技能卡片 */}
      <motion.div 
        className="p-6 content-card"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-white" />
            研究兴趣与专业技能
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-white/90">研究兴趣</h3>
              <ul className="space-y-2 pl-5 list-disc text-white/80">
                <li>大模型微调与优化</li>
                <li>Agent智能体开发</li>
                <li>数据自动化处理及业务部署</li>
                <li>GNSS精密定位与定轨</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-white/90">核心技能</h3>
              <ul className="space-y-2 pl-5 list-disc text-white/80">
                <li>Python/Fortran编程</li>
                <li>LoRA微调技术</li>
                <li>模型部署与服务</li>
                <li>自动化工作流设计</li>
                <li>Linux系统开发</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
         {/* 自我评价卡片 */}
   <motion.div 
     className="p-6 content-card"
     initial={{ opacity: 0, x: 20 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6, delay: 0.3 }}
   >
     <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
       <User size={20} className="text-white" />
       自我评价
     </h2>
     
     <div className="space-y-3">
       {selfEvaluation.map((item, index) => (
         <motion.div 
           key={index}
           className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
         >
           <div className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
             <i className="fa-solid fa-user text-xs"></i>
           </div>
           <p className="text-white">
             <span className="font-medium">{item.category}：</span>
             {item.content}
           </p>
         </motion.div>
      ))}
    </div>
  </motion.div>
      </div>
    </div>
  );
};

// 工作经历组件
const WorkExperience = () => {
  return (
    <div className="space-y-8">
      {/* 工作经历标题 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
           <Briefcase className="text-white" size={20} />
           工作经历
        </h3>
      </motion.div>
      
      {workExperience.map((exp) => (
         <motion.div 
          key={exp.id}
          className="p-6 content-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
               <h3 className="text-xl font-bold text-white">{exp.position}</h3>
               <p className="text-white/90 font-medium">{exp.company}</p>
             </div>
             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80">
               <Calendar size={16} />
               <span className="text-sm">{exp.period}</span>
            </div>
          </div>
           
           <div className="space-y-4">
             <h4 className="font-semibold text-white">主要成就：</h4>
             <ul className="space-y-3">
               {exp.achievements.map((achievement, idx) => (
                 <motion.li 
                   key={idx} 
                   className="flex items-start gap-3"
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1, duration: 0.5 }}
                 >
                   <div className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                     <i className="fa-solid fa-check text-xs"></i>
                   </div>
                   <span className="text-white/90">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
      
      {/* 实习经历 */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
           <Briefcase className="text-white" size={20} />
           实习经历
        </h3>
        <div className="space-y-4">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
               className="p-6 content-card"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
             >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                 <h4 className="text-lg font-bold text-white">{intern.position}</h4>
                 <p className="text-white/90">{intern.company}</p>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80">
                 <Calendar size={16} />
                 <span className="text-sm">{intern.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {intern.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                   <div className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                     <i className="fa-solid fa-check text-xs"></i>
                   </div>
                   <span className="text-white/90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 证书图片组件 - 支持加载状态、错误处理、缩放
interface CertificateImageProps {
  src: string;
  alt: string;
  label: string;
}

const CertificateImage = ({ src, alt, label }: CertificateImageProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  
  return (
    <div className="flex flex-col h-full">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1 flex items-center justify-center">
        {/* 加载状态 */}
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              <p className="text-gray-700 text-sm font-medium">加载证书图片中...</p>
            </div>
          </div>
        )}
        
        {/* 错误状态 */}
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-4 text-center bg-red-50 z-10">
            <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-3">
              <X size={32} className="text-red-500" />
            </div>
            <h4 className="text-sm font-bold text-gray-800 mb-2">图片加载失败</h4>
            <button
              onClick={() => {
                setImageError(false);
                setImageLoading(true);
              }}
              className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
            >
              重试加载
            </button>
          </div>
        )}
        
        {/* 图片显示 */}
        <motion.div
          className="relative cursor-zoom-in flex items-center justify-center w-full h-full"
          onClick={() => setImageScale(imageScale === 1 ? 1.2 : 1)}
          animate={{ scale: imageScale }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false);
              setImageError(true);
            }}
            style={{ 
              opacity: imageLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </motion.div>
        
        {/* 缩放提示 */}
        {!imageLoading && !imageError && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm z-20">
            {imageScale === 1 ? '点击放大' : '点击缩小'}
          </div>
        )}
      </div>
      <p className="text-center mt-2 font-medium text-gray-700 text-xs">{label}</p>
    </div>
  );
};

// 教育背景组件
const Education = () => {
  const [showCertificates, setShowCertificates] = useState<number | null>(null);
  const selectedEdu = education.find(edu => edu.id === showCertificates);
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
           <motion.div 
             key={edu.id}
             className="p-6 content-card relative overflow-hidden border-2 border-transparent hover:border-blue-500/50 transition-all duration-300"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ delay: index * 0.2, duration: 0.5 }}
             whileHover={{ 
               y: -5, 
               boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
               scale: 1.02
             }}
            >
            <div className="flex flex-col items-start gap-3 mb-4">
              <div className="flex items-center gap-2">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap size={24} />
                </motion.div>
               <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
             </div>
             
             <p className="text-white/90 font-medium">{edu.school}</p>
             <div className="flex items-center gap-2 text-white/80">
               <Calendar size={16} className="text-blue-400" />
               <span>{edu.period}</span>
             </div>
           </div>
           
           <div className="space-y-3 text-white mb-4">
             <p><strong>专业：</strong>{edu.major}</p>
             {edu.advisor && <p><strong>导师：</strong>{edu.advisor}</p>}
             {edu.researchArea && <p><strong>研究方向：</strong>{edu.researchArea}</p>}
            </div>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setShowCertificates(edu.id);
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-xs font-medium w-fit cursor-pointer border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
              <span>点击查看{edu.degree}证书</span>
            </motion.button>
            
            {/* 悬浮效果装饰 */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        ))}
      </div>
      
      {/* 学位证书显示 - 移到外层，避免被卡片的overflow-hidden影响 */}
      <AnimatePresence>
        {showCertificates !== null && selectedEdu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => setShowCertificates(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 头部 */}
              <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{selectedEdu.degree}证书</h3>
                    <p className="text-sm text-white/90">{selectedEdu.school}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCertificates(null)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:rotate-90"
                  aria-label="关闭"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* 证书内容 */}
              <div className="p-4 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(90vh-100px)] overflow-y-auto">
                  <CertificateImage
                    src={selectedEdu.degree === "硕士" ? "/images/硕士毕业证书.jpg" : `https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=${selectedEdu.degree}%20diploma%20certificate%20with%20name%20Xu%20Yan`}
                    alt={`${selectedEdu.degree}毕业证`}
                    label={`${selectedEdu.school} - ${selectedEdu.degree}毕业证`}
                  />
                  <CertificateImage
                    src={selectedEdu.degree === "硕士" ? "/images/硕士学位证书.jpg" : `https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=${selectedEdu.degree}%20degree%20certificate%20with%20name%20Xu%20Yan`}
                    alt={`${selectedEdu.degree}学位证`}
                    label={`${selectedEdu.school} - ${selectedEdu.degree}学位证`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 科研经历 */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
           <BookOpen className="text-white" size={20} />
           在校科研经历
        </h3>
        
        <div className="space-y-4">
          {researchExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
               className="p-6 content-card"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
             >
               <h4 className="text-lg font-bold text-white mb-3">{exp.title}</h4>
               <p className="text-white/80 mb-4">{exp.description}</p>
               
               {exp.details && (
                 <ul className="space-y-2">
                   {exp.details.map((detail, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <ChevronRight size={18} className="text-white mt-1 flex-shrink-0" />
                       <span className="text-white/90">{detail}</span>
                     </li>
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

// 单个技术概述卡片组件 - 小方框紧凑样式
interface TechSummaryProps {
  title: string;
  description: string;
  index: number;
  icon: React.ReactNode;
}

const TechSummaryCard = ({ title, description, index, icon }: TechSummaryProps) => {
  return (
    <motion.div 
      className="p-4 content-card border-2 border-gray-800 flex flex-col h-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 rounded-full bg-blue-100/20 text-white flex items-center justify-center flex-shrink-0">
          {React.cloneElement(icon as React.ReactElement, { size: 16 })}
        </div>
        <h4 className="text-base font-bold text-white">{title}</h4>
      </div>
      
      <p className="text-white/90 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

// 技术能力水平展示 - 紧凑风格
const TechSkillDisplay = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  return (
    <motion.div 
      className="mb-3 last:mb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-sm text-white/80">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

// 技术能力组件
const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(technicalSkills[0]?.category || "编程语言");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  
  const selectedSkills = technicalSkills.find(skill => skill.category === selectedCategory)?.skills || [];
  const radarData = generateRadarData(selectedSkills);
  
  return (
    <div className="space-y-8">
       {/* 技术能力摘要 */}
       <motion.div 
         className="space-y-6"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
       >
         <h3 className="text-xl font-bold text-white mb-4">技术能力概述</h3>
         
          {/* 技术概述卡片组件 - 小方框紧凑布局 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 核心编程能力 */}
            <TechSummaryCard 
              title="核心编程能力" 
              description="精通Python、Fortran，熟悉C/C++、Shell、MATLAB，具备独立设计开发能力和自动化工程代码经验" 
              index={0}
              icon={<Code size={16} />}
            />
            
            {/* 大模型技术 */}
            <TechSummaryCard 
              title="大模型技术" 
              description="精通LoRA微调（peft + transformers），熟练使用Unsloth、LLaMA-Factory微调框架，配合Ollama/vLLM/LM Studio完成7B–70B模型本地化部署、量化与TensorRT加速" 
              index={1}
              icon={<Award size={16} />}
            />
            
            {/* 大模型Agent工具 */}
            <TechSummaryCard 
              title="大模型Agent工具" 
              description="熟悉Dify、LangChain Agent平台，能够快速搭建零代码/低代码智能体，实现全流程无人值守的自动化工作流" 
              index={2}
              icon={<Briefcase size={16} />}
            />
            
            {/* 系统与开发工具 */}
            <TechSummaryCard 
              title="系统与开发工具" 
              description="Linux重度使用者，可跨Windows/Linux/WSL远程开发与调试；熟练运用VS Code、Cursor、PyCharm等开发工具；用Git管理代码仓库" 
              index={3}
              icon={<Globe size={16} />}
            />
            
            {/* 跨平台云端同步工具 */}
            <TechSummaryCard 
              title="跨平台云端同步工具" 
              description="构建基于Onedrive+WebDAV+Zotero的文献管理同步平台，搭建基于WebDAV+Jpolin的多平台笔记同步平台" 
              index={4}
              icon={<Github size={16} />}
            />
            
            {/* 科研绘图与办公 */}
            <TechSummaryCard 
              title="科研绘图与办公" 
              description="掌握Microsoft office、Adobe Acrobat、LaTex + MathType公式编辑，熟练Origin、ArcMap、Visio和Photoshop等科研绘图软件" 
              index={5}
              icon={<BookOpen size={16} />}
            />
          </div>
       </motion.div>
      
      {/* 技术能力详情 - 更紧凑的布局 */}
      <div className="space-y-6">
        {/* 移动端筛选器 */}
        <div className="md:hidden">
           <button 
             onClick={() => setIsFilterVisible(!isFilterVisible)}
             className="w-full flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20"
           >
             <span className="font-medium text-white">选择技术类别：{selectedCategory}</span>
             <ChevronDown 
               size={20} 
               className={`text-white/80 transition-transform ${isFilterVisible ? 'rotate-180' : ''}`} 
             />
           </button>
           
           <AnimatePresence>
             {isFilterVisible && (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 className="overflow-hidden bg-white/10 backdrop-blur-md rounded-b-xl shadow-md mt-1 border-x border-b border-white/20"
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
                           ? 'bg-white/20 text-white' 
                           : 'hover:bg-white/10 text-white/80'
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
        <div className="hidden md:flex gap-3 flex-wrap">
          {technicalSkills.map((category) => (
            <motion.button
               key={category.category}
               onClick={() => setSelectedCategory(category.category)}
               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                 selectedCategory === category.category 
                   ? 'bg-white text-[#845EC2]' 
                   : 'bg-white/10 text-white/80 hover:bg-white/20'
               }`}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               {category.category}
             </motion.button>
          ))}
        </div>
        
        {/* 技术能力可视化 - 紧凑布局 */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* 技术能力列表 - 更紧凑的样式 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5">
            <h3 className="text-xl font-bold text-white mb-4">{selectedCategory} 技能水平</h3>
            
            {/* 紧凑的技术能力展示 */}
            <div className="space-y-3">
              {selectedSkills.map((skill, index) => (
                <TechSkillDisplay key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
           
          {/* 雷达图展示 - 保持原有大小但优化布局 */}
          <div className="content-card rounded-xl flex items-center justify-center p-4">
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={500} height={300} data={radarData}>
                   <PolarGrid stroke="rgba(255, 255, 255, 0.3)" />
                   <PolarAngleAxis 
                     dataKey="subject" 
                     tick={{ fill: 'white', fontSize: 12 }}
                   />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                   <Radar
                     name={selectedCategory}
                     dataKey="A"
                     stroke="white"
                     fill="white"
                     fillOpacity={0.6}
                   />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 单个项目经历卡片组件 - 论文风格
interface ProjectProps {
  project: {
    id: number;
    title: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    outcomes: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectProps) => {
  return (
    <motion.div 
      key={project.id}
      className="p-6 content-card border-2 border-gray-800 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
        <div>
         <h4 className="text-lg font-bold text-white">{project.title}</h4>
         <p className="text-white/90">{project.role}</p>
       </div>
       <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 self-start">
         <Calendar size={16} />
         <span className="text-sm">{project.period}</span>
        </div>
      </div>
      
       <p className="text-white/80 mb-4">{project.description}</p>
       
       <div className="mb-4">
         <h5 className="font-medium text-white mb-2">技术栈：</h5>
         <div className="flex flex-wrap gap-2">
           {project.technologies.map((tech, idx) => (
             <span 
               key={idx} 
               className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
             >
               {tech}
             </span>
           ))}
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
         <h5 className="font-medium text-white mb-1">项目成果：</h5>
         <p className="text-white/90">{project.outcomes}</p>
      </div>
    </motion.div>
  );
};

// 项目经历组件
const Projects = () => {
  return (
    <div className="space-y-8">
      <motion.div 
        className="p-6 bg-white/10 backdrop-blur-md rounded-xl border-2 border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-6">项目经历</h3>
        
        {/* 使用学术论文风格的项目卡片 */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// 会议照片组件 - 带图片加载优化
interface ConferencePhotoProps {
  title: string;
  src: string;
  alt: string;
  onClose: () => void;
}

const ConferencePhoto = ({ title, src, alt, onClose }: ConferencePhotoProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex justify-between items-center p-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:rotate-90"
            aria-label="关闭"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* 图片内容区域 */}
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc(90vh - 100px)' }}>
          <div className="relative bg-gray-100 rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
            {/* 加载状态 */}
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
                  <p className="text-gray-700 text-base font-medium">加载照片中...</p>
                </div>
              </div>
            )}
            
            {/* 错误状态 */}
            {imageError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center py-20 px-6 text-center bg-red-50 z-10">
                <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <X size={40} className="text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">照片加载失败</h4>
                <p className="text-gray-600 mb-4">抱歉，照片暂时无法显示</p>
                <button
                  onClick={() => {
                    setImageError(false);
                    setImageLoading(true);
                  }}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  重试加载
                </button>
              </div>
            )}
            
            {/* 图片显示 */}
            <motion.div
              className="relative cursor-zoom-in flex items-center justify-center w-full h-full p-4"
              onClick={() => setImageScale(imageScale === 1 ? 1.2 : 1)}
              animate={{ scale: imageScale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
                style={{ 
                  opacity: imageLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </motion.div>
            
            {/* 缩放提示 */}
            {!imageLoading && !imageError && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm z-20">
                {imageScale === 1 ? '点击放大' : '点击缩小'}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 学术成果组件
const Publications = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{title: string, src: string, alt: string} | null>(null);
  
  const handlePhotoClick = (title: string, src: string, alt: string) => {
    setSelectedPhoto({ title, src, alt });
  };
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         <h3 className="text-xl font-bold text-white mb-6">学术论文</h3>
         
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.id}
               className="p-6 content-card"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
             >
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                  <BookOpen size={20} />
                </div>
                 <h4 className="text-lg font-bold text-white flex-grow">
                   {pub.title}
                 </h4>
               </div>
               
               <p className="text-white/90 mb-3">{pub.authors}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {pub.journal && (
                  <div className="flex items-start gap-2">
                       <div className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                         <i className="fa-solid fa-newspaper text-xs"></i>
                       </div>
                       <p className="text-white/80">
                         <span className="font-medium">期刊：</span>
                      {pub.journal} {pub.volume && `, Vol. ${pub.volume}`}{pub.pages && `, pp. ${pub.pages}`} ({pub.year})
                    </p>
                  </div>
                )}
                
                {pub.conference && (
                  <div className="flex items-start gap-2">
                       <div className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                         <i className="fa-solid fa-users text-xs"></i>
                       </div>
                       <p className="text-white/80">
                         <span className="font-medium">会议：</span>
                      {pub.conference}, {pub.publisher && `${pub.publisher},`} {pub.year}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3 items-center">
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                     className="flex items-center gap-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                   >
                     <ExternalLink size={16} />
                     <span>查看链接</span>
                  </a>
                )}
                {pub.note && (
                   <span className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm">
                     {pub.note}
                   </span>
                )}
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
         <h3 className="text-xl font-bold text-white mb-6">学术会议</h3>
         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.id}
               className="p-6 content-card relative overflow-hidden"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
             >
              <div className="flex items-start gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100/20 text-white flex items-center justify-center mt-0.5 flex-shrink-0">
                  <i className="fa-solid fa-building-columns text-xl"></i>
                </div>
                <div>
                 <h4 className="font-bold text-white">{conf.name}</h4>
                 <p className="text-white/90">{conf.role}</p>
               </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 self-start mb-4">
                <Calendar size={16} />
                <span className="text-sm">{conf.year}</span>
              </div>
              
              <div className="space-y-3">
                 {conf.name === "中国测绘学会2021学术年会" && (
                   <>
                    <motion.button 
                      className="w-full p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-xl hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 text-left flex items-center justify-between border border-indigo-500/30"
                      onClick={() => handlePhotoClick("中国测绘年会个人留影", "/images/中国测绘年会个人留影.jpg", "中国测绘学会2021学术年会 - 个人留影")}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <i className="fa-solid fa-user"></i>
                        </motion.div>
                        <span className="font-medium">个人留影</span>
                      </div>
                      <ExternalLink size={18} className="text-indigo-400" />
                    </motion.button>
                     
                    <motion.button 
                      className="w-full p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-xl hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 text-left flex items-center justify-between border border-indigo-500/30"
                      onClick={() => handlePhotoClick("中国测绘年会集体留影", "/images/中国测绘年会集体合影.jpg", "中国测绘学会2021学术年会 - 集体留影")}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <i className="fa-solid fa-users"></i>
                        </motion.div>
                        <span className="font-medium">集体留影</span>
                      </div>
                      <ExternalLink size={18} className="text-indigo-400" />
                    </motion.button>
                   </>
                 )}
                 
                 {conf.name === "大地测量与导航2024综合学术年会" && (
                   <>
                    <motion.button 
                      className="w-full p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-xl hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 text-left flex items-center justify-between border border-indigo-500/30"
                      onClick={() => handlePhotoClick("大地测量学术会议个人留影", "/images/大地测量年会个人留影.jpg", "大地测量与导航2024综合学术年会 - 个人留影")}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <i className="fa-solid fa-user"></i>
                        </motion.div>
                        <span className="font-medium">个人留影</span>
                      </div>
                      <ExternalLink size={18} className="text-indigo-400" />
                    </motion.button>
                     
                    <motion.button 
                      className="w-full p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-xl hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 text-left flex items-center justify-between border border-indigo-500/30"
                      onClick={() => handlePhotoClick("大地测量学术会议海报张贴", "/images/大地测量年会海报张贴.jpg", "大地测量与导航2024综合学术年会 - 海报张贴")}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <i className="fa-solid fa-image"></i>
                        </motion.div>
                        <span className="font-medium">海报张贴</span>
                      </div>
                      <ExternalLink size={18} className="text-indigo-400" />
                    </motion.button>
                   </>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* 照片模态框 */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <ConferencePhoto
            title={selectedPhoto.title}
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// 单个奖项证书组件 - 带图片加载优化
interface AwardCertificateProps {
  award: {
    id: number;
    title: string;
    year: string;
    description: string;
  };
  onClose: () => void;
}

const AwardCertificate = ({ award, onClose }: AwardCertificateProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  
  // 获取证书图片路径
  const getImageSrc = () => {
    if (award.title === "山东科技大学'优秀研究生'称号" && award.year === "2023年11月") {
      return "/images/2022-2023优秀研究生.png";
    }
    if (award.title === "山东科技大学'优秀毕业生'称号" && award.year === "2024年06月") {
      return "/images/优秀毕业研究生.png";
    }
    if (award.title === "山东科技大学'优秀研究生'称号" && award.year === "2022年11月") {
      return "/images/2021-2022优秀研究生.png";
    }
    if (award.title === "'优秀青年志愿者'称号") {
      return "/images/优秀青年志愿者.jpg";
    }
    if (award.title === "中国测绘学会2021学术年会志愿服务证书") {
      return "/images/志愿者证书.png";
    }
    if (award.title === "研究生一等学业奖学金" && award.year === "2023年11月") {
      return "/images/2022-2023学年硕士奖学金.png";
    }
    if (award.title === "研究生二等学业奖学金" && award.year === "2022年11月") {
      return "/images/2021-2022学年硕士奖学金.png";
    }
    if (award.title === "组织'睿飞杯'2022年山东科技大学无人机测绘创新智能大赛") {
      return "/images/组织无人机智能大赛.jpg";
    }
    return `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=award%20certificate%20${award.title}`;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold">{award.title}</h3>
              <p className="text-sm text-white/90">{award.year}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:rotate-90"
            aria-label="关闭"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* 图片内容区域 */}
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc(90vh - 100px)' }}>
          <div className="relative bg-gray-100 rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
            {/* 加载状态 */}
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-yellow-500 border-t-transparent"></div>
                  <p className="text-gray-700 text-base font-medium">加载证书图片中...</p>
                </div>
              </div>
            )}
            
            {/* 错误状态 */}
            {imageError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center py-20 px-6 text-center bg-red-50 z-10">
                <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <X size={40} className="text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">图片加载失败</h4>
                <p className="text-gray-600 mb-4">抱歉，证书图片暂时无法显示</p>
                <button
                  onClick={() => {
                    setImageError(false);
                    setImageLoading(true);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  重试加载
                </button>
              </div>
            )}
            
            {/* 图片显示 */}
            <motion.div
              className="relative cursor-zoom-in flex items-center justify-center w-full h-full p-4"
              onClick={() => setImageScale(imageScale === 1 ? 1.2 : 1)}
              animate={{ scale: imageScale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={getImageSrc()}
                alt={`${award.title}证书`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
                style={{ 
                  opacity: imageLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </motion.div>
            
            {/* 缩放提示 */}
            {!imageLoading && !imageError && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm z-20">
                {imageScale === 1 ? '点击放大' : '点击缩小'}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 获奖荣誉组件
const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<number | null>(null);
  
  return (
    <div className="space-y-8">
       <motion.div
         className="p-6 content-card"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
       >
         <h3 className="text-xl font-bold text-white mb-6">获奖荣誉</h3>
         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div 
              key={award.id}
               className="p-5 content-card relative overflow-hidden border-2 border-transparent hover:border-yellow-500/50 transition-all duration-300"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 40px -10px rgba(234, 179, 8, 0.3)",
                  scale: 1.02
                }}
              >
              <div className="flex items-start gap-3 mb-3">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={24} />
                </motion.div>
               <h4 className="font-bold text-white text-base leading-tight">{award.title}</h4>
             </div>
             
             <p className="text-white/80 text-sm mb-4 ml-15">{award.description}</p>
             
             <div className="flex items-center justify-between mt-4">
               <span className="text-white/90 font-medium flex items-center gap-2 text-sm">
                 <Calendar size={16} className="text-yellow-400" />
                 {award.year}
               </span>
               
               <motion.button
                 onClick={(e) => {
                   e.stopPropagation();
                   setSelectedAward(award.id);
                 }}
                 className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-yellow-400 text-xs font-medium cursor-pointer border border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30 transition-all"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <ExternalLink size={14} />
                 <span>查看证书</span>
               </motion.button>
             </div>
              
              {/* 悬浮效果装饰 */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl -z-10"></div>
           </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* 证书模态框 */}
      <AnimatePresence>
        {selectedAward !== null && (
          <AwardCertificate
            award={awards.find(a => a.id === selectedAward)!}
            onClose={() => setSelectedAward(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// PDF下载功能已移除，根据用户需求不再提供此功能

export default function Home() {
  const [activeTab, setActiveTab] = useState("bio");

  // 导航菜单项
  const navItems = [
    { id: "bio", label: "个人简介", icon: <User size={20} /> },
    { id: "work", label: "工作经历", icon: <Briefcase size={20} /> },
    { id: "education", label: "教育背景", icon: <GraduationCap size={20} /> },
    { id: "skills", label: "技术能力", icon: <Code size={20} /> },
    { id: "projects", label: "项目经历", icon: <BookOpen size={20} /> },
    { id: "publications", label: "学术成果", icon: <BookOpen size={20} /> },
    { id: "awards", label: "获奖与荣誉", icon: <Award size={20} /> }
  ];

  return (
    <div className="min-h-screen dark text-white">
        {/* 顶部导航栏 - 添加黑色下边框 */}
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-40 shadow-md border-b-2 border-black">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
               <h1 className="text-xl font-bold text-white hidden sm:block">
                 许焱 - 大模型算法工程师
               </h1>
            </div>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex gap-1 flex-wrap mt-2 md:mt-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                   activeTab === item.id 
                     ? 'bg-white/20 text-white border-b-2 border-white' 
                     : 'hover:bg-white/10 text-white/80'
                 }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* 移除了主题切换按钮，默认使用黑色主题 */}
          </div>
          
          {/* 移动端导航菜单 */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <button
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
                aria-label="打开菜单"
              >
               <span className="font-medium text-white">
                 {navItems.find(item => item.id === activeTab)?.label || "菜单"}
               </span>
               <ChevronDown size={20} className="text-white/80" />
             </button>
             
              <div id="mobile-menu" className="hidden mt-2 absolute left-0 right-0 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <ul className="py-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveTab(item.id);
                          document.getElementById('mobile-menu')?.classList.add('hidden');
                        }}
                         className={`w-full flex items-center gap-3 px-6 py-3 text-left ${
                           activeTab === item.id 
                             ? 'bg-white/20 text-white' 
                             : 'text-white/80 hover:bg-white/10'
                         }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

       {/* 主内容区域 */}
       <main className="container mx-auto px-4 pt-32 pb-20">
         {/* 内容标签页带半透明背景以增强可读性 */}
        <div className="space-y-8">
          {activeTab === "bio" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><PersonalInfo /></div>
            </motion.div>
          )}
          
          {activeTab === "work" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><WorkExperience /></div>
            </motion.div>
          )}
          
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><Education /></div>
            </motion.div>
          )}
          
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><TechnicalSkills /></div>
            </motion.div>
          )}
          
          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><Projects /></div>
            </motion.div>
          )}
          
          {activeTab === "publications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><Publications /></div>
            </motion.div>
          )}
          
          {activeTab === "awards" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
               <div className="text-contrast"><Awards /></div>
            </motion.div>
          )}
        </div>
      </main>

       {/* 页脚 - 添加黑色上边框 */}
        <footer className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-t-2 border-black py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
           <p className="text-white">© {new Date().getFullYear()} 许焱 - 大模型算法工程师</p>
           <p className="mt-2 text-sm text-white/80">
             使用 React, Tailwind CSS 和 TypeScript 构建
           </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="h-3 w-3 rounded-full bg-[#845EC2]"></div>
            <div className="h-3 w-3 rounded-full bg-[#44B98A]"></div>
          </div>
        </div>
      </footer>

       {/* 移除了PDF下载功能，根据用户需求不再提供此功能 */}
    </div>
  );
}