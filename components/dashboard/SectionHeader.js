import { StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({ title = 'For Adoption' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seeMore}>See more</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#242424',
    fontSize: 18,
    fontWeight: '700',
  },
  seeMore: {
    color: '#E87932',
    fontSize: 13,
    fontWeight: '600',
  },
});
