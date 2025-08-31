
import { ResearcherRole, ResearchTask } from './types';

export const ROLE_OPTIONS: { value: ResearcherRole; label: string }[] = [
  { value: ResearcherRole.Clinician, label: 'Clinician' },
  { value: ResearcherRole.Pharmacologist, label: 'Pharmacologist' },
  { value: ResearcherRole.Epidemiologist, label: 'Epidemiologist' },
  { value: ResearcherRole.PublicHealthOfficial, label: 'Public Health Official' },
  { value: ResearcherRole.Geneticist, label: 'Geneticist' },
  { value: ResearcherRole.Bioinformatician, label: 'Bioinformatician' },
];

export const TASK_OPTIONS: { value: ResearchTask; label: string }[] = [
  { value: ResearchTask.InvestigateCausality, label: 'Investigate Causality' },
  { value: ResearchTask.CompareEfficacy, label: 'Compare Efficacy' },
  { value: ResearchTask.AssessRiskFactors, label: 'Assess Risk Factors' },
  { value: ResearchTask.DevelopDiagnostic, label: 'Develop a Diagnostic Tool' },
  { value: ResearchTask.EvaluatePrognosis, label: 'Evaluate Prognosis' },
  { value: ResearchTask.ConductMetaAnalysis, label: 'Conduct a Meta-Analysis' },
];
