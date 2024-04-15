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
  education_match: boolean;
  job_title_match: boolean;
  standard_sections_present: StandardSectionsPresent;
}

export interface WordCount {
  score: number;
  word_count: number;
}

export interface StandardSectionsPresent {
  found_sections: string[];
  missing: boolean;
  missing_sections: string[];
}
