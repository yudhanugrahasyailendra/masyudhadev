import type { Metadata } from 'next';
import MainMenu from '../components/MainMenu';

export const metadata: Metadata = {
  title: 'About - Yudha',
};

export default function AboutPage() {
  return <MainMenu initialTab="profile" />;
}
