export interface PaginationModel {
  skip?: number;
  take?: number;
}

export const paginationCompare = (a: PaginationModel, b: PaginationModel): boolean => {
  return a.skip === b.skip
    && a.take === b.take;
};
