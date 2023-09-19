import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Card, CardText, CardActions } from './styles';
import { useWishlist, WishlistItem } from '../../hooks/whishlist';
import Button from '../../components/Button';
import { Audio } from 'expo-av'; // Import Expo Audio

const FavoritesList = () => {
  const { favorite, deleteFavorite } = useWishlist();
  const [sound, setSound] = useState<Audio.Sound | null>(null); // Initialize sound

  const handleRemoveFavorite = async (item: WishlistItem) => {
    deleteFavorite(item.id);

    // Load the audio file (make sure to provide the correct file path)
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/delete.mp3')
    );
    setSound(sound);

    // Play the sound
    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      // Unload the sound when the component unmounts
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <Container>
      <Header>Favorites</Header>
      <FlatList
        data={favorite}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <CardText>{item.item}</CardText>
            <CardActions>
              <Button
                onPress={() => handleRemoveFavorite(item)}
                color="pink"
                icon={'heart'}
              />
            </CardActions>
          </Card>
        )}
      />
    </Container>
  );
};

export default FavoritesList;
