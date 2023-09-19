import { useQuery, useMutation, useQueryClient } from 'react-query';

export interface WishlistItem {
  id: number;
  item: string;
}

const wishlistData: WishlistItem[] = [
  { id: 1, item: 'Sample Item 1' },
  { id: 2, item: 'Sample Item 2' },
];

const favoriteData: WishlistItem[] = [
  { id: 1, item: 'Sample Item 1' },
  { id: 2, item: 'Sample Item 2' },
];

async function fetchItems(): Promise<WishlistItem[]> {
  return wishlistData;
}

async function fetchFavorite(): Promise<WishlistItem[]> {
  return favoriteData;
}

export function useWishlist() {
  const queryClient = useQueryClient();

  const { data: wishlist } = useQuery('wishlist', fetchItems);
  const { data: favorite } = useQuery('favorite', fetchFavorite);

  const deleteItem = useMutation(
    async (itemId: number) => {
      const index = wishlistData.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        wishlistData.splice(index, 1);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('wishlist');
      },
    }
  ).mutateAsync;

  const editItem = useMutation(
    async (updatedItem: WishlistItem) => {
      const index = wishlistData.findIndex(
        (item) => item.id === updatedItem.id
      );
      if (index !== -1) {
        wishlistData[index] = updatedItem;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('wishlist');
      },
    }
  ).mutateAsync;

  const addItem = useMutation(
    async (newItem: WishlistItem) => {
      wishlistData.push(newItem);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('wishlist');
      },
    }
  ).mutateAsync;

  const addFavorite = useMutation(
    async (newItem: WishlistItem) => {
      favoriteData.push(newItem);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('favorite');
      },
    }
  ).mutateAsync;

  const deleteFavorite = useMutation(
    async (itemId: number) => {
      const index = favoriteData.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        favoriteData.splice(index, 1);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('favorite');
      },
    }
  ).mutateAsync;

  return {
    wishlist,
    favorite,
    addItem,
    editItem,
    deleteItem,
    addFavorite,
    deleteFavorite,
  };
}
