import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';

import Button from '../Button';
import Input from '../Input';
import { Container, TextInput, ButtonContainer } from './styles';
import { WishlistItem } from '../../hooks/whishlist';

interface EditModalProps {
  visible: boolean;
  item: WishlistItem;
  onSave: (editedText: string) => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  visible,
  item,
  onSave,
  onCancel,
}) => {
  const [editedItem, setEditedItem] = useState(item.item);

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <ButtonContainer>
        <Button
          title="Cancel"
          onPress={onCancel}
          color="white"
          icon="arrowleft"
          background="transparent"
        />
      </ButtonContainer>
      <Container>
        <TextInput
          onChangeText={(text) => setEditedItem(text)}
          value={editedItem}
          placeholder="Nome"
        />
        <View style={styles.actions}>
          <Button
            onPress={handleSave}
            title="Save"
            background="green"
            color="white"
            icon="save"
          >
            Salvar
          </Button>
        </View>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    alignItems: 'flex-end',
    width: '90%',
  },
  input: {
    width: '90%',
    marginBottom: 20,
  },
});

export default EditModal;
