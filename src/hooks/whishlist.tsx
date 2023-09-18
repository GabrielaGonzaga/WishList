import { useQuery, useMutation, useQueryClient } from 'react-query';

interface WishlistItem {
  id: number;
  item: string;
}

const wishlistData: WishlistItem[] = [
  { id: 1, item: 'Sample Item 1' },
  { id: 2, item: 'Sample Item 2' },
];

async function fetchItems(): Promise<WishlistItem[]> {
  return wishlistData;
}

export function useWishlist() {
  const queryClient = useQueryClient();

  const { data: wishlist } = useQuery('wishlist', fetchItems);

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

  return {
    wishlist,
    addItem,
    editItem,
    deleteItem,
  };
}
