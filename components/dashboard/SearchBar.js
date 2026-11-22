import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        editable={false}
        placeholder="Search for a pet"
        placeholderTextColor="#8A8A8A"
        style={styles.input}
        accessibilityLabel="Search for a pet"
      />
      <View style={styles.searchButton} accessibilityLabel="Search">
        <Text style={styles.searchIcon}>⌕</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 16,
    flexDirection: 'row',
    minHeight: 50,
    paddingHorizontal: 14,
  },
  input: {
    color: '#333333',
    flex: 1,
    fontSize: 14,
    minWidth: 0,
    paddingVertical: 12,
  },
  searchButton: {
    alignItems: 'center',
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  searchIcon: {
    color: '#E87932',
    fontSize: 28,
    lineHeight: 32,
  },
});
