import { StyleSheet, Text, View } from 'react-native';

const items = [
  { label: 'Home', icon: '⌂' },
  { label: 'Favorites', icon: '♡' },
  { label: 'Messages', icon: '✉' },
  { label: 'Profile', icon: '○' },
];

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const isActive = index === 0;

        return (
          <View key={item.label} style={styles.item}>
            <Text style={[styles.icon, isActive && styles.activeText]}>
              {item.icon}
            </Text>
            <Text style={[styles.label, isActive && styles.activeText]}>
              {item.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    minHeight: 62,
    paddingHorizontal: 8,
    paddingTop: 7,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    color: '#858585',
    fontSize: 21,
    height: 25,
    lineHeight: 25,
  },
  label: {
    color: '#858585',
    fontSize: 10,
    marginTop: 2,
  },
  activeText: {
    color: '#E87932',
  },
});
