import { SORT_ORDERS } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDERS.ASC, SORT_ORDERS.DESC].includes(sortOrder);

  if (isKnownOrder) {
    return sortOrder;
  }

  return SORT_ORDERS.ASC;
};

const parseSortBy = (sortBy) => {
  const keysOfContacts = [
    '_id',
    'name',
    'phoneNumber',
    'email',
    'isFavourite',
    'contactType',
    'createdAt',
    'updatedAt',
  ];

  if (keysOfContacts.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};


export const parseSortParams = (query) => {

  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy
  };
};