export type Accessor<T> = string;

export type Column<T> = {
  key: string;
  title: React.ReactNode;
  width?: number | string;
  render?: (row: T, rowIndex: number) => React.ReactNode;
};

export type SortConfig<T> = {
  key: Accessor<T>;
  direction: "asc" | "desc";
};
