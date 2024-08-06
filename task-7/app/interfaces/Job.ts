export default interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string; // You might want to use Date type if you handle it as a Date object
  endDate: string; // Same as above
  deadline: string; // Same as above
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string; // Same as above
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any; // Replace `any` with a more specific type if you have details
  perksAndBenefits: any; // Replace `any` with a more specific type if you have details
  createdAt: string; // Same as above
  updatedAt: string; // Same as above
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}
