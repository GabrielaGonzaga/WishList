import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { Container, Header, Card, CardText, CardActions } from './styles';
import { useWishlist } from '../../hooks/whishlist';
import Button from '../../components/Button';
import EditModal from '../../components/EditModal';
import { useQueryClient } from 'react-query';
import { Audio } from 'expo-av'; // Import Expo Audio

export interface WishlistItem {
  id: number;
  item: string;
}

const WishList = () => {
  const {
    wishlist,
    // @ts-ignore
    setWishlist,
    addItem,
    editItem,
    deleteItem,
    favorite,
    addFavorite,
    deleteFavorite,
  } = useWishlist();
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);
  const queryClient = useQueryClient();
  const [sound, setSound] = useState<Audio.Sound | null>(null); // Initialize sound

  useEffect(() => {
    const loadWishlistFromStorage = async () => {
      try {
        const savedWishlist = await AsyncStorage.getItem('wishlist');
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        }
      } catch (error) {
        console.error('Error loading wishlist from AsyncStorage:', error);
      }
    };

    const loadFavoritesFromStorage = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        if (savedFavorites) {
          // @ts-ignore
          favorite(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites from AsyncStorage:', error);
      }
    };

    loadWishlistFromStorage();
    loadFavoritesFromStorage();
  }, []);

  const handleFavoriteItem = async (item: WishlistItem) => {
    const isAlreadyFavorited = favorite?.some((fav) => fav.id === item.id);

    if (isAlreadyFavorited) {
      const updatedFavorites = favorite?.filter((fav) => fav.id !== item.id);
      deleteFavorite(item.id);
    } else {
      addFavorite(item);

      // Load the audio file (make sure to provide the correct file path)
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/favorite.mp3')
      );
      setSound(sound);

      // Play the sound
      await sound.playAsync();
    }

    queryClient.invalidateQueries('favorite');
  };

  return (
    <Container>
      <Header>Items</Header>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <CardText>{item.item}</CardText>
            <CardActions>
              <Button
                onPress={() => handleFavoriteItem(item)}
                color="pink"
                icon={
                  favorite?.some((fav) => fav.id === item.id)
                    ? 'heart'
                    : 'hearto'
                }
              />
            </CardActions>
          </Card>
        )}
      />
      {selectedItem && (
        <EditModal
          item={selectedItem}
          visible={true}
          onSave={(editedText) => {
            editItem({
              ...selectedItem,
              item: editedText,
            });
            setSelectedItem(null);
          }}
          onCancel={() => setSelectedItem(null)}
        />
      )}
    </Container>
  );
};

export default WishList;
