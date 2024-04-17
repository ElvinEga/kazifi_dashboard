export interface JobData {
  id: number;
  user_id: number;
  job_title: string;
  job_url: string;
  company_name: string;
  description: string;
  resume_text: string;
  jd_match: string;
  profile_summary: string;
  keywords: string;
  missing_keywords: string;
  soft_skills: string;
  hard_skills: string;
  created_at: string;
  updated_at: string;
}

export interface ScoreData {
  score: number;
  word_count: WordCount;
  email_present: boolean;
  phone_number_present: boolean;
  linkedin_profile_present: boolean;
  emails: string[];
  phones: string[];
  links: string[];
  education_match: EducationMatch;
  job_title_match: boolean;
  repetition: Repetition[];
  cliche_words: ClicheWords;
  standard_sections_present: StandardSectionsPresent;
}

export interface WordCount {
  score: number;
  word_count: number;
}

export interface EducationMatch {
  score: number;
  qualifications: string[];
  resume_qualifications: string[];
}

export interface Repetition {
  count: number;
  word: string;
}

export interface ClicheWords {
  score: number;
  cliches_found: string[];
}

export interface StandardSectionsPresent {
  found_sections: string[];
  missing: boolean;
  missing_sections: string[];
}
