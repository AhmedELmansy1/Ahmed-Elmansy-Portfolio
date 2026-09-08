import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectDetailClient } from './ProjectDetailClient';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Ahmed Elmansy',
    };
  }

  return {
    title: `${project.title} | Ahmed Elmansy Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ahmed Elmansy`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
