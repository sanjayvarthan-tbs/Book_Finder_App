import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Heart, Star } from 'lucide-react-native';

interface SareeCardProps {
  saree: {
    id: string;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    rating: number;
    reviews: number;
    image: string;
    brand: string;
  };
  onPress?: () => void;
  onWishlistPress?: () => void;
}

export default function SareeCard({ saree, onPress, onWishlistPress }: SareeCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: saree.image }} style={styles.image} />
        <TouchableOpacity style={styles.wishlistBtn} onPress={onWishlistPress}>
          <Heart size={16} color="#E91E63" />
        </TouchableOpacity>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{saree.discount}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.brandName}>{saree.brand}</Text>
        <Text style={styles.sareeName} numberOfLines={2}>{saree.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={12} color="#FFD700" fill="#FFD700" />
          <Text style={styles.rating}>{saree.rating}</Text>
          <Text style={styles.reviews}>({saree.reviews})</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{saree.price}</Text>
          <Text style={styles.originalPrice}>{saree.originalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
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
  info: {
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