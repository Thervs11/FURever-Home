import { ScrollView, StyleSheet, Text, View } from 'react-native';

const categories = ['All', 'Dog', 'Cat', 'Rabbit', 'Other'];

export default function CategoryList() {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <View
            key={category}
            style={[styles.category, index === 0 && styles.activeCategory]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#242424',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  list: {
    columnGap: 10,
    paddingRight: 4,
  },
  category: {
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: 18,
  },
  activeCategory: {
    backgroundColor: '#E87932',
  },
  categoryText: {
    color: '#555555',
    fontSize: 13,
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
