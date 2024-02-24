export interface SearchResult {
  results: Result[];
  total_results: number;
  last_visible_page: number;
  perse_status_code: number;
  create_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Result {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Content {
  url: string;
  organic: OrganicItem[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
}
export interface Rating {
  count: number;
  rating: number;
}

export interface OrganicItem {
  url: string;
  badge: string;
  image: string;
  price: Price;
  title: string;
  rating: Rating;
  seller: Seller;
  product_id: string;
  currency: number;
}

export interface Price {
  price: number;
  currency: string;
}

export interface Seller {
  name: string;
}
