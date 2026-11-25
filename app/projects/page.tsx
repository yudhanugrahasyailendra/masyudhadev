import type { Metadata } from 'next';
import MainMenu from '../components/MainMenu';

export const metadata: Metadata = {
  title: 'Projects - Yudha',
};

export default function ProjectsPage() {
  return <MainMenu initialTab="projects" />;
}
