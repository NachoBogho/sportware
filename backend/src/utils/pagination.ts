export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export const paginate = <T>(items: T[], options: PaginationOptions): PaginatedResponse<T> => {
  const { page, limit } = options;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = items.slice(startIndex, endIndex);
  const total = items.length;

  return {
    data: paginatedItems,
    total,
    page,
    limit,
  };
};