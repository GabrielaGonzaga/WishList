import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import {
  Container,
  Header,
  Card,
  CardText,
  CardActions,
  InputContainer,
} from './styles';
import { useWishlist } from '../../hooks/whishlist';
import EditModal from '../../components/EditModal';
import Button from '../../components/Button';
import Input from '../../components/Input';

export interface WishlistItem {
  id: number;
  item: string;
}

const Dashboard = () => {
  const { wishlist, addItem, editItem, deleteItem } = useWishlist();
  const [newItemText, setNewItemText] = useState('');
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      addItem({ id: Date.now(), item: newItemText });
      setNewItemText('');
    }
  };

  const handleEditItem = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <Header>Wishlist</Header>
      <InputContainer>
        <Input
          placeholder="Enter a new item"
          value={newItemText}
          onChangeText={(text: string) => setNewItemText(text)}
        />
        <Button onPress={handleAddItem} background='green' color="white" icon="plus-circle">Add</Button>
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
                color="blue"
                icon="edit"
              />
              <Button
                onPress={() => deleteItem(item.id)}
                color="red"
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
    </Container>
  );
};

export default Dashboard;
