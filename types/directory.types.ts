export interface DirectoryAddress {
  street: string;
  village: string;
  subdistrict: string;
  district: string;
  province: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
}

export interface ResearchItem {
  title: string;
  authors: string;
}

export interface CommunityServiceItem {
  title: string;
  description: string;
}

export interface IntellectualPropertyItem {
  title: string;
  authors: string;
}

export interface CourseItem {
  year: string;
  semester: string;
  course_name: string;
  class_name: string;
  study_program: string;
}

export interface FunctionalPosition {
  position: string;
}

export interface LecturerStaffMember {
  id: string;
  sister_uuid: string | null;

  front_degree: string;
  full_name: string;
  behind_degree: string;

  nip: string;
  nidn: string;
  nuptk: string | null;

  gender: string;

  email: string;
  email_usu: string;

  work_unit_id: string;
  work_unit: string;
  work_unit_name: string;

  study_program_id: string;
  study_program: string;

  photo: string;

  address: DirectoryAddress;

  phone: string;
  npwp: string;

  type: string;
  type_str: string;

  status: string;

  profile?: string;

  publications?: {
    national?: PublicationItem[];
    international?: PublicationItem[];
  };

  scientific_fields?: string[];
  research_media?: string[];

  researches?: ResearchItem[];
  community_services?: CommunityServiceItem[];
  intellectual_properties?: IntellectualPropertyItem[];
  courses?: CourseItem[];

  cv_url?: string;

  bank_account: unknown[];
  education: unknown[];

  functional: FunctionalPosition[];
  rank: unknown[];
}

export interface StudentMember {
  id: string;

  nim: string;
  name: string;
  email?: string;
  gender: string;

  entry_year: string;
  education_level: string;

  major_code: number;
  major_name: string;

  faculty_id: number;
  faculty_name: string;

  status: string;

  photo: string;
}

export type DirectoryMember =
  | LecturerStaffMember
  | StudentMember;