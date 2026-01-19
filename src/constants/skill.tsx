import AngularIcon from '@/components/icons/services/angular-icon';
import AstroIcon from '@/components/icons/services/astro-icon';
import ChatGPTIcon from '@/components/icons/services/chat-gpt-icon';
import ClaudeAI from '@/components/icons/services/claude-ai-icon';
import DeepSeekIcon from '@/components/icons/services/deppseek-icon';
import DockerIcon from '@/components/icons/services/docker-icon';
import DrizzleORMIcon from '@/components/icons/services/drizzle-orm-icon';
import ExpoIcon from '@/components/icons/services/expo-icon';
import ExpressjsIcon from '@/components/icons/services/expresjs-icon';
import FlutterIcon from '@/components/icons/services/flutter-icon';
import GitIcon from '@/components/icons/services/git-icon';
import GithubIcon from '@/components/icons/services/github-icon';
import GitLabIcon from '@/components/icons/services/gitlab-icon';
import JavaScriptIcon from '@/components/icons/services/javascript-icon';
import MongodbIcon from '@/components/icons/services/mongodb-icon';
import MaterialUIIcon from '@/components/icons/services/mui-icon';
import NestIcon from '@/components/icons/services/nest-icon';
import NextAuthIcon from '@/components/icons/services/next-auth-icon';
import NextIcon from '@/components/icons/services/next-icon';
import NodeIcon from '@/components/icons/services/node-icon';
import ObsidianIcon from '@/components/icons/services/obsidian-icon';
import PhotoshopIcon from '@/components/icons/services/photoshop-icon';
import PostgreSQLIcon from '@/components/icons/services/postgresql-icon';
import PostmanIcon from '@/components/icons/services/postman-icon';
import ReactIcon from '@/components/icons/services/react-icon';
import ReactQueryIcon from '@/components/icons/services/react-query-icon';
import ReactRouterIcon from '@/components/icons/services/react-route-icon';
import SupabaseIcon from '@/components/icons/services/supabase-icon';
import TailwindIcon from '@/components/icons/services/tailwind-icon';
import TypeORMIcon from '@/components/icons/services/type-orm-icon';
import TypeScriptIcon from '@/components/icons/services/typescript-icon';
import UpstashIcon from '@/components/icons/services/upstash-icon';
import VisualStudioCodeIcon from '@/components/icons/services/vs-code-icon';
import ZodIcon from '@/components/icons/services/zod-icon';
import ZustandIcon from '@/components/icons/services/zustand-icon';

import { ReactNode } from 'react';

export enum SkillType {
  All = 'All',
  Backend = 'Backend',
  Frontend = 'Frontend',
  Database = 'Database',
  Mobile = 'Mobile',
  Language = 'Language'
}

export enum ToolType {
  All = 'All',
  Library = 'Library',
  // Framework = "Framework",
  Software = 'Software',
  Ai = 'Ai'
  // Other = "Other",
}

export type SkillProps = {
  name: string;
  icon: ReactNode;
  percentage: number;
  type: SkillType | ToolType;
};

// Habilidades de codificación
export const codingSkills: SkillProps[] = [
  { name: 'Nodejs', percentage: 85, icon: <NodeIcon />, type: SkillType.Backend },
  { name: 'Reactjs', percentage: 85, icon: <ReactIcon />, type: SkillType.Frontend },
  { name: 'Nextjs', percentage: 85, icon: <NextIcon />, type: SkillType.Frontend },
  { name: 'PostgreSQL', percentage: 80, icon: <PostgreSQLIcon />, type: SkillType.Database },
  { name: 'Tailwind / Mui', percentage: 85, icon: <TailwindIcon />, type: SkillType.Frontend },
  { name: 'Javascript', percentage: 85, icon: <JavaScriptIcon />, type: SkillType.Language },
  { name: 'ExpressJS', percentage: 75, icon: <ExpressjsIcon />, type: SkillType.Backend },
  { name: 'Typescript', percentage: 70, icon: <TypeScriptIcon />, type: SkillType.Language },
  // { name: 'Angular', percentage: 70, icon: <AngularIcon />, type: SkillType.Frontend }
];

// Herramientas (tools)
export const tools: SkillProps[] = [
  { name: 'Docker', percentage: 75, icon: <DockerIcon />, type: ToolType.Software },
  { name: 'Git', percentage: 80, icon: <GitIcon />, type: ToolType.Software },
  { name: 'GitLab', percentage: 80, icon: <GitLabIcon />, type: ToolType.Software },
  { name: 'Visual Studio Code', percentage: 85, icon: <VisualStudioCodeIcon />, type: ToolType.Software },
  { name: 'PostMan', percentage: 75, icon: <PostmanIcon />, type: ToolType.Software },
  { name: 'ClaudeAi', percentage: 85, icon: <ClaudeAI />, type: ToolType.Ai },
  { name: 'ChatGPT', percentage: 85, icon: <ChatGPTIcon />, type: ToolType.Ai }
];
