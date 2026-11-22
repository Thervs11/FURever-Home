import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.location}>Your location</Text>
      </View>
      <View style={styles.notification} accessibilityLabel="Notifications">
        <Text style={styles.notificationIcon}>♢</Text>
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    color: '#666666',
    fontSize: 14,
  },
  name: {
    color: '#242424',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  location: {
    color: '#777777',
    fontSize: 12,
    marginTop: 4,
  },
  notification: {
    alignItems: 'center',
    backgroundColor: '#FFF2E8',
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    position: 'relative',
    width: 44,
  },
  notificationIcon: {
    color: '#E87932',
    fontSize: 24,
    lineHeight: 28,
  },
  notificationDot: {
    backgroundColor: '#E87932',
    borderColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1.5,
    height: 10,
    position: 'absolute',
    right: 9,
    top: 8,
    width: 10,
  },
});
