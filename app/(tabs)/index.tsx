import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Bell, Search, MapPin, Star, Heart } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: 'Silk Sarees', image: 'https://images.pexels.com/photos/9634727/pexels-photo-9634727.jpeg' },
  { id: '2', name: 'Cotton Sarees', image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg' },
  { id: '3', name: 'Designer Sarees', image: 'https://images.pexels.com/photos/9634727/pexels-photo-9634727.jpeg' },
  { id: '4', name: 'Bridal Sarees', image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg' },
];

const featuredSarees = [
  {
    id: '1',
    name: 'Banarasi Silk Saree',
    price: '₹15,999',
    originalPrice: '₹24,999',
    discount: '36% OFF',
    rating: 4.5,
    reviews: 128,
    image: 'https://images.pexels.com/photos/9634727/pexels-photo-9634727.jpeg',
    brand: 'Royal Heritage',
  },
  {
    id: '2',
    name: 'Kanjivaram Wedding Saree',
    price: '₹12,499',
    originalPrice: '₹18,999',
    discount: '34% OFF',
    rating: 4.7,
    reviews: 89,
    image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg',
    brand: 'Silk Valley',
  },
];

const bannerOffers = [
  { id: '1', title: 'Festival Sale', subtitle: 'Up to 70% OFF', image: 'https://images.pexels.com/photos/9634727/pexels-photo-9634727.jpeg' },
  { id: '2', title: 'Bridal Collection', subtitle: 'Starting ₹9,999', image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg' },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategory = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSaree = ({ item }: any) => (
    <TouchableOpacity style={styles.sareeCard}>
      <View style={styles.sareeImageContainer}>
        <Image source={{ uri: item.image }} style={styles.sareeImage} />
        <TouchableOpacity style={styles.wishlistBtn}>
          <Heart size={16} color="#E91E63" />
        </TouchableOpacity>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      </View>
      <View style={styles.sareeInfo}>
        <Text style={styles.brandName}>{item.brand}</Text>
        <Text style={styles.sareeName} numberOfLines={2}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={12} color="#FFD700" fill="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderBanner = ({ item }: any) => (
    <TouchableOpacity style={styles.bannerCard}>
      <LinearGradient
        colors={['rgba(233, 30, 99, 0.8)', 'rgba(233, 30, 99, 0.3)']}
        style={styles.bannerGradient}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
          <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
        </View>
      </LinearGradient>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#E91E63" />
            <Text style={styles.locationText}>Deliver to Mumbai 400001</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search for sarees, brands..."
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Banner Offers */}
        <View style={styles.section}>
          <FlatList
            data={bannerOffers}
            renderItem={renderBanner}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerList}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {/* Featured Sarees */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Sarees</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredSarees}
            renderItem={renderSaree}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sareeList}
          />
        </View>

        {/* Special Deals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Deals</Text>
          <FlatList
            data={featuredSarees}
            renderItem={renderSaree}
            keyExtractor={(item) => `deal_${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sareeList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  notificationBtn: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  viewAllText: {
    fontSize: 14,
    color: '#E91E63',
    fontWeight: '600',
  },
  bannerList: {
    paddingHorizontal: 16,
  },
  bannerCard: {
    width: width - 32,
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  sareeList: {
    paddingHorizontal: 16,
  },
  sareeCard: {
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sareeImageContainer: {
    position: 'relative',
  },
  sareeImage: {
    width: '100%',
    height: 200,
  },
  wishlistBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#E91E63',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  sareeInfo: {
    padding: 12,
  },
  brandName: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 2,
  },
  sareeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 2,
  },
  reviews: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
});