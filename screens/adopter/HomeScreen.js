import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import BannerCard from '../../components/dashboard/BannerCard';
import CategoryList from '../../components/dashboard/CategoryList';
import PetCard from '../../components/dashboard/PetCard';
import SearchBar from '../../components/dashboard/SearchBar';
import SectionHeader from '../../components/dashboard/SectionHeader';
import BottomNavigation from '../../components/navigation/BottomNavigation';

const samplePets = ['pet-1', 'pet-2', 'pet-3'];

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <SearchBar />
        <View style={styles.bannerList}>
          <BannerCard
            title="Animal Lovers Community"
            variant="community"
          />
          <BannerCard
            title="Find Your Best Companion"
            variant="companion"
          />
        </View>
        <CategoryList />
        <SectionHeader />
        <View style={styles.petList}>
          {samplePets.map((pet) => (
            <PetCard key={pet} />
          ))}
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  content: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingHorizontal: 18,
    paddingTop: 12,
    rowGap: 20,
  },
  bannerList: {
    rowGap: 12,
  },
  petList: {
    rowGap: 12,
  },
});
