import React, { useState } from 'react';
import { FlatList, Modal, TouchableOpacity, View } from 'react-native';
import {
  Container,
  Header,
  Card,
  CardText,
  CardActions,
  InputContainer,
  PlayButton,
  Text,
} from './styles';
import { useWishlist } from '../../hooks/whishlist';
import EditModal from '../../components/EditModal';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Video } from 'expo-av'; // Import Video from expo-av

export interface WishlistItem {
  id: number;
  item: string;
}

const AddItems = () => {
  const { wishlist, addItem, editItem, deleteItem } = useWishlist();
  const [newItemText, setNewItemText] = useState('');
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);

  // State to control the modal visibility
  const [isVideoModalVisible, setVideoModalVisible] = useState(false);

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      addItem({ id: Date.now(), item: newItemText });
      setNewItemText('');
    }
  };

  const handleEditItem = (item: any) => {
    setSelectedItem(item);
  };

  // Function to toggle the modal visibility
  const toggleVideoModal = () => {
    setVideoModalVisible(!isVideoModalVisible);
  };

  return (
    <Container>
      <Header>
        <Text>Wishlist Items</Text>
        <PlayButton onPress={toggleVideoModal} color="white" icon="play" />
      </Header>
      <InputContainer>
        <Input
          placeholder="Enter a new item"
          value={newItemText}
          onChangeText={(text: string) => setNewItemText(text)}
        />
        <Button
          onPress={handleAddItem}
          background="green"
          color="white"
          icon="pluscircleo"
        >
          Add
        </Button>
      </InputContainer>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <CardText>{item.item}</CardText>
            <CardActions>
              <Button
                onPress={() => handleEditItem(item)}
                color="#77cbed"
                icon="form"
              />
              <Button
                onPress={() => deleteItem(item.id)}
                color="#ee7676"
                icon="delete"
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVideoModalVisible}
        onRequestClose={toggleVideoModal}
      >
        <Button onPress={toggleVideoModal} color={'white'} icon={'close'} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2E2E2E',
          }}
        >
          <Video
            source={require('../../../assets/tutorial.mp4')} // Replace with your video file path
            style={{ width: '100%', height: 200 }}
            useNativeControls
          />
        </View>
      </Modal>
    </Container>
  );
};

export default AddItems;
