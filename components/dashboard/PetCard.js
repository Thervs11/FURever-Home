import { StyleSheet, Text, View } from 'react-native';

export default function PetCard() {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Pet Image</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text numberOfLines={1} style={styles.name}>
            Pet Name
          </Text>
          <Text style={styles.favorite} accessibilityLabel="Favorite">
            ♡
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.information}>
          Pet Information
        </Text>
        <View style={styles.detailsRow}>
          <View style={styles.genderBadge}>
            <Text style={styles.genderText}>Gender</Text>
          </View>
          <View style={styles.detailsButton}>
            <Text style={styles.detailsText}>View Details</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 126,
    padding: 12,
  },
  imagePlaceholder: {
    alignItems: 'center',
    alignSelf: 'stretch',
    aspectRatio: 1,
    backgroundColor: '#F1E7DE',
    borderRadius: 13,
    justifyContent: 'center',
    maxWidth: '34%',
  },
  imageText: {
    color: '#777777',
    fontSize: 11,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 100,
    minWidth: 0,
    paddingLeft: 12,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: '#242424',
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    minWidth: 0,
  },
  favorite: {
    color: '#E87932',
    fontSize: 22,
    marginLeft: 6,
  },
  information: {
    color: '#777777',
    fontSize: 12,
    marginVertical: 4,
  },
  detailsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderBadge: {
    backgroundColor: '#FFF0E4',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  genderText: {
    color: '#B95C24',
    fontSize: 10,
  },
  detailsButton: {
    backgroundColor: '#E87932',
    borderRadius: 14,
    marginLeft: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  detailsText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
});
