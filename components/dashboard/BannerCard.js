import { StyleSheet, Text, View } from 'react-native';

export default function BannerCard({ title, variant = 'community' }) {
  const isCommunity = variant === 'community';

  return (
    <View
      style={[
        styles.container,
        isCommunity ? styles.communityBackground : styles.companionBackground,
      ]}
    >
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        {isCommunity ? (
          <View style={styles.buttonPlaceholder}>
            <Text style={styles.buttonText}>Button</Text>
          </View>
        ) : (
          <Text style={styles.caption}>Text area</Text>
        )}
      </View>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Image</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    minHeight: 126,
    overflow: 'hidden',
    padding: 16,
  },
  communityBackground: {
    backgroundColor: '#FFF0E4',
  },
  companionBackground: {
    backgroundColor: '#FFF4D9',
  },
  content: {
    flex: 1,
    minWidth: 0,
    paddingRight: 10,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
  },
  buttonPlaceholder: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#E87932',
    borderRadius: 14,
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  caption: {
    color: '#777777',
    fontSize: 12,
    marginTop: 8,
  },
  imagePlaceholder: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: 14,
    height: 88,
    justifyContent: 'center',
    width: 88,
  },
  imageText: {
    color: '#888888',
    fontSize: 12,
  },
});
