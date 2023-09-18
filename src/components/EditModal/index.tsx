import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import { WishlistItem } from '../../pages/Dashboard';
import Button from '../Button';
import Input from '../Input';

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
      <Button
        title="Cancel"
        onPress={onCancel}
        color="blue"
        icon="arrow-left"
        background="white"
      />
      <View style={styles.container}>
        <Input
          style={styles.input}
          onChangeText={(text) => setEditedItem(text)}
          value={editedItem}
          placeholder='Nome'
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
      </View>
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
