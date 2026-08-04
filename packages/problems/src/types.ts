import type { Component } from 'vue';
import type { ProblemTest } from '@repo/testing';

export interface Problem {
  title: string;
  tags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  data: () => Promise<{
    content: Component;
    tests: ProblemTest[];
    assets?: Record<string, string>;
    template: string;
    solution: string;
    assessmentCriteria?: Component;
  }>;
}

export interface Collection {
  name: string;
  description: string;
  problems: Record<string, Problem>;
}
